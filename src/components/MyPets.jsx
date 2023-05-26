/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { Image } from 'cloudinary-react';
import deleteIcon from '../assets/delete.png';
import { useSidebar } from '../context/SidebarContext';
import axios from 'axios';

const MyPets = () => {
	const { openSidebar, setOpenSidebar } = useSidebar();

	const [pets, setPets] = useState([]);

	const apiEndpoint = 'http://localhost:3000/api/getpets';
	const token = localStorage.getItem('user');

	useEffect(() => {
		axios
			.get(apiEndpoint, {
				headers: {
					Authorization: token,
				},
			})
			.then((response) => {
				setPets(response.data);
			})
			.catch((error) => {
				console.error(error);
			});
	}, [token]);

	const endpoint = 'http://localhost:3000/api/deletepet/';

	const handleDelete = (id) => {
		setPets(pets.filter((pet) => pet.pet_id !== id));

		axios
			.delete(`${endpoint}${id}`, {
				headers: {
					Authorization: token,
				},
			})
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.error(error);
			});
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
				{pets.length === 0 ? (
					<span className="font-semibold text-gray-600 text-xl"> There are no pets to display! </span>
				) : (
					pets.map((pet) => (
						<div
							key={pet.pet_id}
							className="relative lg:pet-wrapper pet-wrapper-border h-full w-full flex flex-col lg:flex-row lg:items-center justify-center px-4 py-4 lg:py-0 lg:justify-start lg:space-x-4"
						>
							<div className="relative">
								<Image cloudName="dixpklhom" publicId={pet.petImg} className="lg:w-28 lg:h-28 h-24 w-24 rounded-full" />
							</div>
							<div className="flex flex-col ">
								<h3 className="text-xl font-bold text-darkGrey mb-1">{pet.petName}</h3>
								<span className="text-base font-normal text-lightGrey">{`Species: ${pet.species}`}</span>
								<span className="text-base font-normal text-lightGrey">{`Breed: ${pet.breed}`}</span>
								<span className="text-base font-normal text-lightGrey">{`Age: ${pet.birthDate}`}</span>
							</div>
							<button
								className="absolute -top-5 -right-5 bg-primaryPurple p-2 h-8 w-8 rounded-full flex items-center justify-center"
								onClick={() => handleDelete(pet.pet_id)}
							>
								<img src={deleteIcon} alt="" className="w-3 h-3" />
							</button>
						</div>
					))
				)}
			</div>
		</div>
	);
};

export default MyPets;
