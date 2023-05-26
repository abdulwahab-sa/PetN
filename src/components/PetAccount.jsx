/* eslint-disable react/prop-types */
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import dogIcon from '../assets/dogPlaceholder.png';
import camIcon from '../assets/camIcon.png';
import axios from 'axios';
import { Buffer } from 'buffer';

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
		type: 'date',
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

const PetAccount = ({ openSidebar, setOpenSidebar }) => {
	// React Hook form in combination with Yup for validation schema

	const [selectedImage, setSelectedImage] = useState(null);
	const schema = yup.object().shape({
		petName: yup.string().required(),
		species: yup.string().required(),
		breed: yup.string().required(),
		birthDate: yup.string().required(),
		color: yup.string().required(),
		weight: yup.string().required(),
		lastPinnedLocation: yup.string().required(),
		petImg: yup.string().required(),
	});

	const fileInputRef = useRef(null);
	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = async (data) => {
		const token = localStorage.getItem('user');

		try {
			const response = await axios.post('http://localhost:3000/api/createpet', data, {
				headers: {
					Authorization: token,
				},
			});

			// Handle the response as needed
			console.log(response.data);
		} catch (error) {
			// Handle the error
			console.error(error);
		}
	};

	const handleImageSelect = () => {
		fileInputRef.current.click();
	};

	const handleFileChange = async (e) => {
		const file = e.target.files[0];
		const formData = new FormData();
		formData.append('file', file);
		formData.append('upload_preset', 'wy679bdg');

		try {
			const response = await axios.post('https://api.cloudinary.com/v1_1/dixpklhom/image/upload', formData);
			if (response) {
				const imageUrl = response.data.secure_url;
				console.log(imageUrl);
				setValue('petImg', imageUrl);
				setSelectedImage(imageUrl);
			}
		} catch (error) {
			console.error(error);
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
				<div className="relative w-full mx-auto pet-form-wrapper lg:pet-form-wrapper-md flex items-center justify-center">
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

					<div className="flex flex-col mt-28 lg:mt-10 pb-3 lg:pb-0 md:flex-row flex-wrap item-center justify-center">
						{inputs.map((el) => (
							<div
								className={`flex flex-col w-full lg:w-2/5 space-y-2 max-w-2xl m-2 ${
									el.title === 'Last Pinned Location' ? 'lg:w-full' : 'lg:w-2/5'
								}`}
								key={el.id}
							>
								<span className="text-lg font-medium text-darkBlue">{el.title}</span>
								<input
									type={el.type}
									className={`w-full h-9 py-1 px-3 pet-form-input ${errors[el.value] ? 'border-red-500' : ''}`}
									{...register(el.value)}
								/>
							</div>
						))}
						<input
							className="cursor-pointer mt-5 bg-darkBlue text-white py-2 px-3 pet-form-input w-4/5 font-semibold"
							type="submit"
							value="Save Pet"
						/>
					</div>
				</div>
			</form>
		</div>
	);
};

export default PetAccount;
