/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import rockyImg from '../assets/rockyImg.png';
import rosheImg from '../assets/rosheImg.png';
import serenaImg from '../assets/serenaImg.png';
import camIcon from '../assets/camIcon.png';
import deleteIcon from '../assets/delete.png';
import { useSidebar } from '../context/SidebarContext';

const petsData = [
	{
		id: 1,
		name: 'Rocky',
		Species: 'Dog',
		Breed: 'English Bulldog',
		Age: '2 years and 7 months',
		img: rockyImg,
	},
	{
		id: 2,
		name: 'Roshe',
		Species: 'Dog',
		Breed: 'American Bully-Chow Chow Mix',
		Age: '3 years and 9 months',
		img: rosheImg,
	},
	{
		id: 3,
		name: 'Serena',
		Species: 'Dog',
		Breed: 'Siberian Husky-Chow Chow Mix',
		Age: '3 years and 9 months',
		img: serenaImg,
	},
];

const MyPets = () => {
	const { openSidebar, setOpenSidebar } = useSidebar();

	const [pets, setPets] = useState(petsData);
	useEffect(() => {
		setPets(petsData);
	}, [pets]);

	const handleDelete = (id) => {
		setPets(pets.filter((pet) => pet.id !== id));
	};

	return (
		<div className="h-full w-full md:py-28 md:px-24 py-12 px-5 ">
			<div className="flex justify-between">
				<h2 className="font-bold text-darkGrey md:text-5xl text-3xl">My Pets</h2>
				<button onClick={() => setOpenSidebar(!openSidebar)} className="lg:hidden bg-lightBlue p-3  rounded-md  font-semibold text-white">
					Menu
				</button>
			</div>

			<div className="flex flex-col space-y-8 mt-12">
				{pets.map((pet) => (
					<div
						key={pet.id}
						className="relative lg:pet-wrapper pet-wrapper-border h-full w-full flex flex-col lg:flex-row lg:items-center justify-center px-4 py-4 lg:py-0 lg:justify-start lg:space-x-4"
					>
						<div className="relative">
							<img src={pet.img} alt="" className="lg:w-28 lg:h-28 h-24 w-24 rounded-full" />
							<div className=" absolute left-16 bottom-2 z-30 bg-camColor w-7 h-7 flex items-center justify-center rounded-full ">
								<img src={camIcon} alt="" className="w-4" />
							</div>
						</div>
						<div className="flex flex-col ">
							<h3 className="text-xl font-bold text-darkGrey mb-1">{pet.name}</h3>
							<span className="text-base font-normal text-lightGrey">{`Species: ${pet.Species}`}</span>
							<span className="text-base font-normal text-lightGrey">{`Breed: ${pet.Breed}`}</span>
							<span className="text-base font-normal text-lightGrey">{`Age: ${pet.Age}`}</span>
						</div>
						<button
							className="absolute -top-5 -right-5 bg-primaryPurple p-2 h-8 w-8 rounded-full flex items-center justify-center"
							onClick={() => handleDelete(pet.id)}
						>
							<img src={deleteIcon} alt="" className="w-3 h-3" />
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default MyPets;
