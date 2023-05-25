/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import addIcon from '../assets/add.png';
import deleteIcon from '../assets/delete.png';
import { Link } from 'react-router-dom';
import { useSidebar } from '../context/SidebarContext';

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

const MyReminders = () => {
	const { openSidebar, setOpenSidebar } = useSidebar();
	const [reminders, setReminders] = useState(remindersData);
	useEffect(() => {
		setReminders(remindersData);
	}, [reminders]);

	const handleDelete = (id) => {
		setReminders(reminders.filter((rem) => rem.id !== id));
	};

	return (
		<div className="h-full w-full lg:py-28 lg:px-24 py-12 px-5 ">
			<button
				onClick={() => setOpenSidebar(!openSidebar)}
				className="lg:hidden bg-lightBlue p-3  rounded-md  font-semibold text-white mb-6"
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
				{remindersData.map((rem) => (
					<div
						key={rem.id}
						className="relative pet-wrapper-border h-full w-full flex flex-col lg:flex-row lg:items-start justify-between px-4 py-4 lg:px-6 "
					>
						<div className="flex flex-col ">
							<h3 className="text-xl font-bold text-darkGrey mb-1">{rem.petName}</h3>
							<span className="text-base font-normal text-lightGrey">{rem.note}</span>
						</div>
						<div className="flex h-full">
							<span className="font-semibold text-xl text-primaryRed"> {rem.date} </span>
						</div>
						<button
							onClick={() => handleDelete(rem.id)}
							className="absolute -top-5 -right-5 bg-primaryPurple p-2 h-8 w-8 rounded-full flex items-center justify-center"
						>
							<img src={deleteIcon} alt="" className="w-3 h-3" />
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default MyReminders;
