/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import dogIcon from '../assets/dogPlaceholder.png';
import camIcon from '../assets/camIcon.png';
import axios from 'axios';
import { useSidebar } from '../context/SidebarContext';
import { useParams } from 'react-router';
import Geolocator from './Geolocator';
import { MdLocationOn } from 'react-icons/md';
import { useCreatePetMutation, useUpdatePetMutation, useGetSinglePetQuery } from '../slices/petApiSlice';
import toast from 'react-hot-toast';

// Reusable Component for the Pet Form that is used for creating a new pet or viewing an existing pet
// depending on the type prop passed to it
// if type is createNew, the form is used for creating a new pet
// if type is view, the form is used for viewing an existing pet
/*
const allPets = [
	{
		pet_id: '1',
		petName: 'Buddy',
		species: 'Dog',
		breed: 'Labrador',
		birthDate: '2019-01-01',
		color: 'Black',
		weight: '20',
		lastPinnedLocation: '1234',
		petImg:
			'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nJTIwbW9vbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
	},
];
*/
const PetForm = ({ type }) => {
	// Inputs for the form
	const inputs = [
		{
			id: 1,
			title: 'Name of Pet',
			value: 'petName',
			type: 'text',
		},
		{
			id: 2,
			title: 'Species',
			value: 'species',
			type: 'text',
		},
		{
			id: 3,
			title: 'Breed',
			value: 'breed',
			type: 'text',
		},
		{
			id: 4,
			title: 'Birthdate',
			value: 'birthDate',
			type: type === 'view' ? 'text' : 'date',
		},
		{
			id: 5,
			title: 'Color',
			value: 'color',
			type: 'text',
		},
		{
			id: 6,
			title: 'Weight',
			value: 'weight',
			type: 'text',
		},
		{
			id: 7,
			title: 'Last Pinned Location',
			value: 'lastPinnedLocation',
			type: 'text',
		},
	];

	// Get the current location name of the user from the Geolocator component
	const { locationName } = Geolocator();

	// State for storing user location
	const [userLocation, setUserLocation] = useState(null);

	// Sidebar Context for opening and closing sidebar
	const { openSidebar, setOpenSidebar } = useSidebar();

	// Get the id of the pet from the URL
	const { id } = useParams();

	// State for the pet data
	const [petData, setPetData] = useState(null);

	// state for submit success
	const [submitSuccess, setSubmitSuccess] = useState(false);

	// Rtk Mutation for creating a new pet
	const [createPet, { isLoading: createPetLoading, error: createPetError, success: createPetSuccess }] = useCreatePetMutation();

	// Rtk Mutation for updating an existing pet
	const [updatePet, { isLoading: updateIsLoading, isSuccess: updateIsSuccess, isError: updateIsError, error: updateError }] =
		useUpdatePetMutation();

	const { data: singlePetData, isLoading: singlePetLoading, error: singlePetError } = useGetSinglePetQuery(id, { skip: !id });

	// Get the pet data from the server if type is view and id is not null
	useEffect(() => {
		if (type === 'view' && id) {
			setPetData(singlePetData?.data);
			singlePetError && toast.error('Something went wrong!');
		} else if (type === 'createNew') {
			console.log('createNew');
		}
	}, [singlePetData, type, id, singlePetError]);

	// State for selected image and image preview in case of createNew
	const [selectedImage, setSelectedImage] = useState(null);

	let schema;
	let registration = {};

	// If type is createNew, create a validation schema for all inputs
	if (type === 'createNew') {
		schema = yup.object().shape({
			petName: yup.string().required(),
			species: yup.string().required(),
			breed: yup.string().required(),
			birthDate: yup.string().required(),
			color: yup.string().required(),
			weight: yup.string().required(),
			lastPinnedLocation: yup.string().required(),
			petImg: yup.string().required(),
		});
	} else if (type === 'view') {
		schema = yup.object().shape({
			lastPinnedLocation: yup.string().required(),
		});
	}
	// React Hook form in combination with Yup for validation schema
	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	// If type is createNew, create a registration object for each input
	if (type === 'createNew') {
		inputs.forEach((input) => {
			registration[input.value] = register(input.value);
		});
	} else if (type === 'view') {
		registration = {
			lastPinnedLocation: register('lastPinnedLocation'),
		};
	}

	// Create a reference for the file input
	const fileInputRef = useRef(null);

	// Function for handling image selection as the original input is hidden and replaced with a button
	const handleImageSelect = () => {
		fileInputRef.current.click();
	};

	// Function for handling file change and uploading to Cloudinary for image hosting and retrieval of image URL
	// The image URL is then set as the value of the petImg input and displayed as the selected image
	const handleFileChange = async (e) => {
		const file = e.target.files[0];
		const formData = new FormData();
		formData.append('file', file);
		formData.append('upload_preset', 'rm3fkp0y');

		try {
			const response = await axios.post('https://api.cloudinary.com/v1_1/dpw1bckje/image/upload', formData);
			if (response) {
				const imageUrl = response.data.secure_url;

				setValue('petImg', imageUrl);
				setSelectedImage(imageUrl);
			}
		} catch (error) {
			toast.error('Something went wrong!');
		}
	};

	const handleLocationClick = (e) => {
		e.preventDefault();
		setUserLocation(locationName);
		setValue('lastPinnedLocation', locationName);
	};

	// Function for handling form submission
	const onSubmit = async (data) => {
		const token = localStorage.getItem('user');
		if (type === 'createNew') {
			try {
				const response = await createPet(data);

				// Handle the response as needed
				console.log(response.data);

				if (response.data.pet) {
					toast.success('Pet created successfully!');
				}

				// Reset the form
				setSelectedImage(null);
				setValue('petName', '');
				setValue('species', '');
				setValue('breed', '');
				setValue('birthDate', '');
				setValue('color', '');
				setValue('weight', '');
				setValue('lastPinnedLocation', '');
				setValue('petImg', '');
			} catch (error) {
				// Handle the error
				toast.error('Something went wrong!');
			}
		} else if (type === 'view') {
			try {
				const response = await updatePet(id, data);

				if (response.data.pet) {
					toast.success('Pet updated successfully!');
				}

				// Reload the page
				//window.location.reload();
			} catch (error) {
				// Handle the error
				console.error(error);
				toast.error('Something went wrong!');
			}
		}
	};

	return (
		<div className="lg:py-40 py-8 px-4 lg:px-14 flex flex-col space-y-8 w-full ">
			<button
				onClick={() => setOpenSidebar(!openSidebar)}
				className=" lg:hidden mb-20 w-20 mx-auto bg-lightBlue p-2 rounded-md  font-semibold text-white"
			>
				Menu
			</button>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="relative w-full mx-auto pet-form-wrapper lg:pet-form-wrapper-md flex flex-col items-center justify-center">
					{type === 'createNew' ? (
						<div className=" absolute -top-20  z-20">
							<div className="relative">
								{selectedImage ? (
									<img src={selectedImage} alt="Selected" onClick={handleImageSelect} className="w-44 h-44 rounded-full" />
								) : (
									<img
										src={dogIcon}
										alt="Placeholder"
										onClick={handleImageSelect}
										className=" flex items-center justify-center bg-gray-500 w-44 h-44 rounded-full"
									/>
								)}

								<div className="absolute bottom-4 right-5 bg-camColor w-8 h-8 flex items-center justify-center rounded-full ">
									<img onClick={handleImageSelect} src={camIcon} alt="" className="w-4" />
								</div>
							</div>
							<input type="file" accept="image/*" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} />
						</div>
					) : (
						<div className=" absolute -top-20  z-20">
							<img src={petData && petData['petImg']} alt="Selected" className="w-44 h-44 rounded-full" />
						</div>
					)}

					<div className="flex flex-col mt-28 lg:mt-10 pb-3 lg:pb-0 md:flex-row flex-wrap item-center justify-center">
						{singlePetLoading ? (
							<div id="loading flex items-center justify-center">
								<div className="loader"></div>
							</div>
						) : (
							inputs.map((el) => {
								if (type === 'createNew') {
									return (
										<div
											className={`relative flex flex-col w-full lg:w-2/5 space-y-2 max-w-2xl m-2 ${
												el.title === 'Last Pinned Location' ? 'lg:w-full' : 'lg:w-2/5'
											}`}
											key={el.id}
										>
											<span className="text-lg font-medium text-darkBlue">{el.title}</span>
											<button
												className={`${
													el.title === 'Last Pinned Location' ? 'absolute' : 'hidden'
												} top-0 -right-10 text-2xl text-darkBlue rounded-full flex justify-center items-center w-9 h-9 border-2 border-blue-500 hover:bg-lightBlue hover:text-white`}
												onClick={handleLocationClick}
											>
												<MdLocationOn />
											</button>
											<input
												type={el.type}
												className={`w-full h-9 py-1 px-3 pet-form-input ${errors[el.value] ? 'border-red-500' : ''}`}
												{...registration[el.value]}
											/>
										</div>
									);
								}
								return (
									<div
										className={`relative flex flex-col w-full lg:w-2/5 space-y-2 max-w-2xl m-2 ${
											el.title === 'Last Pinned Location' ? 'lg:w-full' : 'lg:w-2/5'
										}`}
										key={el.id}
									>
										<span className="text-lg font-medium text-darkBlue">{el.title}</span>
										<button
											className={`${
												el.title === 'Last Pinned Location' ? 'absolute' : 'hidden'
											} top-0 -right-10 text-2xl text-darkBlue rounded-full flex justify-center items-center w-9 h-9 border-2 border-blue-500 hover:bg-lightBlue hover:text-white`}
											onClick={handleLocationClick}
										>
											<MdLocationOn />
										</button>
										<input
											type={el.type}
											className={`w-full h-9 py-1 px-3 pet-form-input ${errors[el.value] ? 'border-red-500' : ''}`}
											{...registration[el.value]}
											disabled={el.value !== 'lastPinnedLocation'}
											placeholder={el.value !== 'lastPinnedLocation' ? petData && petData[el.value] : ''}
											defaultValue={el.value !== 'lastPinnedLocation' ? null : petData && petData['lastPinnedLocation']}
										/>
									</div>
								);
							})
						)}

						{!singlePetLoading && (
							<input
								className={`cursor-pointer mt-5 ${
									createPetLoading || updateIsLoading ? 'bg-lightBlue' : 'bg-darkBlue'
								}  text-white py-2 px-3 pet-form-input w-4/5 font-semibold`}
								type="submit"
								value={`${createPetLoading || updateIsLoading ? 'Saving Pet...' : 'Save Pet'}`}
							/>
						)}
					</div>
				</div>
			</form>
		</div>
	);
};

export default PetForm;
