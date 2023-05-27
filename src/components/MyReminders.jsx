/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import addIcon from '../assets/add.png';
import deleteIcon from '../assets/delete.png';
import { Link } from 'react-router-dom';
import { useSidebar } from '../context/SidebarContext';
import axios from 'axios';

/*
const remindersData = [
	{
		id: 1,
		petName: 'Rocky',
		note: 'Deworming',
		date: 'Saturday, May 27',
	},
	{
		id: 2,
		petName: 'Rocky',
		note: '5-in-1 Vaccine',
		date: 'Saturday, May 27',
	},
	{
		id: 3,
		petName: 'Rocky',
		note: 'Deworming',
		date: 'Saturday, May 27',
	},
];
*/

const MyReminders = () => {
	const { openSidebar, setOpenSidebar } = useSidebar();
	const [reminders, setReminders] = useState([]);

	const apiEndpoint = 'https://pawtech-api.herokuapp.com/api/getreminders';
	const token = localStorage.getItem('user');

	useEffect(() => {
		axios
			.get(apiEndpoint, {
				headers: {
					Authorization: token,
				},
			})
			.then((response) => {
				setReminders(response.data);
			})
			.catch((error) => {
				console.error(error);
			});
	}, [token]);

	const endpoint = 'https://pawtech-api.herokuapp.com/api/deletereminder';
	const handleDelete = (id) => {
		setReminders(reminders.filter((rem) => rem.rem_id !== id));
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
		<div className="h-full w-full lg:py-28 lg:px-24 py-12 px-5 flex flex-col">
			<button
				onClick={() => setOpenSidebar(!openSidebar)}
				className="lg:hidden mb-12 w-20 mx-auto bg-lightBlue p-2 rounded-md  font-semibold text-white"
			>
				Menu
			</button>
			<div className="flex justify-between">
				<h2 className="font-bold text-darkGrey lg:text-5xl text-3xl">My Reminders</h2>
				<Link to={'/newreminder'}>
					<button className="bg-primaryPurple p-2 h-10 w-10 rounded-full flex items-center justify-center">
						<img src={addIcon} alt="" className="w-5 h-5" />
					</button>
				</Link>
			</div>

			<div className="flex flex-col space-y-8 mt-12">
				{reminders.length === 0 ? (
					<span className="font-semibold text-gray-600 text-xl"> There are no reminders to display! </span>
				) : (
					reminders.map((rem) => (
						<div
							key={rem.rem_id}
							className="relative pet-wrapper-border h-full w-full flex flex-col lg:flex-row lg:items-start justify-between px-4 py-4 lg:px-6 "
						>
							<div className="flex flex-col ">
								<h3 className="text-xl font-bold text-darkGrey mb-1">{rem.petName}</h3>
								<span className="text-base font-normal text-lightGrey">{rem.note}</span>
							</div>
							<div className="flex h-full">
								<span className="font-semibold text-xl text-primaryRed"> {rem.dateOfReminder} </span>
							</div>
							<button
								onClick={() => handleDelete(rem.rem_id)}
								className="absolute -top-5 -right-5 bg-primaryPurple p-2 h-8 w-8 rounded-full flex items-center justify-center"
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

export default MyReminders;
