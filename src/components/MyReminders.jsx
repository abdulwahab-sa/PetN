/* eslint-disable react/prop-types */
import addIcon from '../assets/add.png';
import deleteIcon from '../assets/delete.png';
import { Link } from 'react-router-dom';
import { useSidebar } from '../context/SidebarContext';
import { useGetAllRemindersQuery, useDeleteReminderMutation } from '../slices/petApiSlice';
import toast from 'react-hot-toast';

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

	const { data: reminders, error, isLoading } = useGetAllRemindersQuery();
	console.log(error);

	const [deleteReminder] = useDeleteReminderMutation();

	const handleDelete = async (id) => {
		try {
			const response = await deleteReminder(id);
			if (response.data.reminder) {
				toast.success('Reminder Deleted Successfully');
			}
		} catch (error) {
			console.log(error);
			toast.error('Something went wrong');
		}
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
				{isLoading ? (
					<div id="loading flex items-center justify-center">
						<div className="loader"></div>
					</div>
				) : error ? (
					<span className="font-semibold text-gray-600 text-xl"> There are no reminders to display! </span>
				) : (
					reminders?.data.map((rem) => (
						<div
							key={rem.id}
							className="relative pet-wrapper-border h-full w-full flex flex-col lg:flex-row lg:items-start justify-between px-4 py-4 lg:px-6 "
						>
							<div className="flex flex-col ">
								<h3 className="text-xl font-bold text-darkGrey mb-1">{rem.pet.petName}</h3>
								<span className="text-base font-normal text-lightGrey">{rem.reminderNote}</span>
							</div>
							<div className="flex h-full">
								<span className="font-semibold text-xl text-primaryRed"> {rem.reminderDate.split('T')[0]} </span>
							</div>
							<button
								onClick={() => handleDelete(rem.id)}
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
