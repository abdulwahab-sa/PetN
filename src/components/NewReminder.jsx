import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useSidebar } from '../context/SidebarContext';
import axios from 'axios';

const inputs = [
	{
		id: 1,
		title: 'Name of Pet',
		value: 'petName',
		type: 'text',
	},
	{
		id: 2,
		title: 'Date of Reminder',
		value: 'dateOfReminder',
		type: 'date',
	},
	{
		id: 3,
		title: 'Note',
		value: 'note',
		type: 'text',
	},
];

const NewReminder = () => {
	const { openSidebar, setOpenSidebar } = useSidebar();

	// React Hook form in combination with Yup for validation schema

	const schema = yup.object().shape({
		petName: yup.string().required(),
		dateOfReminder: yup.string().required(),
		note: yup.string().required(),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = async (data) => {
		const token = localStorage.getItem('user');

		try {
			const response = await axios.post('http://localhost:3000/api/createreminder', data, {
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

	return (
		<div className="lg:py-32 py-8 px-4 lg:px-14 flex flex-col space-y-10 w-full h-full">
			<button
				onClick={() => setOpenSidebar(!openSidebar)}
				className="lg:hidden bg-lightBlue p-3  rounded-md  font-semibold text-white mb-6 w-16"
			>
				Menu
			</button>
			<h2 className="font-bold text-darkGrey md:text-5xl text-3xl">New Reminder</h2>

			<div className="py-8 md:pb-40 w-full mx-auto px-6  pet-form-wrapper md:reminder-form-wrapper-md ">
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="flex flex-col md:mt-0 items-center justify-center">
						{inputs.map((el) => (
							<div className="flex flex-col w-full space-y-2 max-w-2xl m-2  " key={el.id}>
								<span className="text-lg font-medium text-darkBlue">{el.title}</span>
								<input
									type={el.type}
									className={`w-full h-9 py-1 px-3 pet-form-input ${errors[el.value] ? 'border-red-500' : ''}`}
									{...register(el.value)}
								/>
							</div>
						))}
						<input
							className="cursor-pointer mt-5 bg-darkBlue text-white py-2 px-3 pet-form-input w-4/5 max-w-2xl font-semibold"
							type="submit"
							value="Save Reminder"
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default NewReminder;
