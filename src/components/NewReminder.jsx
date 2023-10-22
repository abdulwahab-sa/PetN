import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useSidebar } from '../context/SidebarContext';
import { useGetAllPetsQuery, useCreateReminderMutation } from '../slices/petApiSlice';
import toast from 'react-hot-toast';

const inputs = [
	{
		id: 2,
		title: 'Date of Reminder',
		value: 'reminderDate',
		type: 'date',
	},
	{
		id: 3,
		title: 'Note',
		value: 'reminderNote',
		type: 'text',
	},
];

const NewReminder = () => {
	const { openSidebar, setOpenSidebar } = useSidebar();

	const { data: petsData } = useGetAllPetsQuery();

	const [createReminder, { isLoading }] = useCreateReminderMutation();

	// React Hook form in combination with Yup for validation schema

	const schema = yup.object().shape({
		petId: yup.number().required().integer(),
		reminderDate: yup.string().required(),
		reminderNote: yup.string().required(),
	});

	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = async (data) => {
		//const token = localStorage.getItem('user');

		try {
			const response = await createReminder(data);
			console.log(response);

			if (response.data.reminder) {
				toast.success('Reminder Created Successfully');

				// reset the form

				setValue('petId', '');
				setValue('reminderDate', '');
				setValue('reminderNote', '');
			}
		} catch (error) {
			// Handle the error
			console.error(error);
			toast.error('Something went wrong');
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
						<div className="flex flex-col w-full space-y-2 max-w-2xl m-2  ">
							<span className="text-lg font-medium text-darkBlue">Pet Name</span>

							<select
								name=""
								id=""
								className={`w-full h-9 py-1 px-3 pet-form-input ${errors.petId ? 'border-red-500' : ''}`}
								{...register('petId')}
							>
								<option value=""> Select Pet </option>
								{petsData?.data.map((pet) => (
									<option value={pet.id} key={pet.id}>
										{pet.petName}
									</option>
								))}
							</select>
						</div>
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
							className={`cursor-pointer mt-5 ${
								isLoading ? 'bg-lightBlue' : 'bg-darkBlue'
							}  text-white py-2 px-3 pet-form-input w-4/5 font-semibold`}
							type="submit"
							value={`${isLoading ? 'Saving Reminder...' : 'Save Reminder'}`}
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default NewReminder;
