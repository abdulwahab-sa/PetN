/* eslint-disable react/prop-types */

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import rockyImg from '../assets/rockyImg.png';
import camIcon from '../assets/camIcon.png';

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

	const schema = yup.object().shape({
		petName: yup.string().required(),
		species: yup.string().required(),
		breed: yup.string().required(),
		birthDate: yup.string().required(),
		color: yup.string().required(),
		weight: yup.string().required(),
		lastPinnedLocation: yup.string().required(),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data) => console.log(data);

	return (
		<div className="lg:py-40 py-8 px-4 lg:px-14 flex flex-col space-y-8 w-full ">
			<button
				onClick={() => setOpenSidebar(!openSidebar)}
				className=" lg:hidden mb-20 w-20 mx-auto bg-lightBlue p-2 rounded-md  font-semibold text-white"
			>
				Menu
			</button>
			<div className="relative w-full mx-auto pet-form-wrapper lg:pet-form-wrapper-md flex items-center justify-center">
				<div className=" absolute -top-20  z-20">
					<div className="relative">
						<img src={rockyImg} alt="" className="w-44 h-44 rounded-full" />
						<div className="absolute bottom-4 right-5 bg-camColor w-8 h-8 flex items-center justify-center rounded-full ">
							<img src={camIcon} alt="" className="w-4" />
						</div>
					</div>
				</div>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="flex flex-col mt-28 lg:mt-0 pb-3 lg:pb-0 md:flex-row flex-wrap item-center justify-center">
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
				</form>
			</div>
		</div>
	);
};

export default PetAccount;
