/* eslint-disable react/prop-types */
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import graphic from './../assets/graphic.png';
import catPic from './../assets/catPic.png';

const FormTemplate = ({ actionType, actionHandler }) => {
	const schema = yup.object().shape({
		email: yup.string().email().required(),
		password: yup.string().required(),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data) => {
		const { email, password } = data;
		actionHandler(email, password);
	};

	return (
		<div className="md:h-hero h-full w-full bg-hero flex flex-col md:flex-row justify-between ">
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="md:pl-24 px-8 md:px-0 pt-8 md:pt-0 mb-6  md:w-2/5 w-full flex flex-col md:my-auto space-y-4 md:space-y-5 text-white "
			>
				<h2 className="text-3xl md:text-5xl font-bold">{actionType === 'login' ? 'Welcome back!' : 'Create Account'}</h2>

				<div className="flex flex-col w-full space-y-1 max-w-sm">
					<span className="text-lg font-normal text-white">Email Address</span>
					<input
						{...register('email')}
						type="text"
						placeholder="Insert your email"
						className={`text-darkGrey w-full h-11 py-1 px-3 pet-form-input ${errors.email ? 'border-2 border-red-500' : ''}`}
					/>
				</div>
				<div className="flex flex-col w-full space-y-1 max-w-sm">
					<span className="text-lg font-normal text-white">Password</span>
					<input
						{...register('password')}
						type="password"
						placeholder="Insert your password"
						className={`text-darkGrey w-full h-11 py-1 px-3 pet-form-input ${errors.password ? 'border-2 border-red-500' : ''}`}
					/>
				</div>

				{actionType === 'login' && <span className="text-right text-darkBlue font-semibold max-w-sm"> Forget password? </span>}
				<input
					type="submit"
					value={actionType === 'login' ? 'Log In' : 'Sign Up'}
					className="cursor-pointer bg-darkBlue block h-11 max-w-sm rounded-md font-semibold text-white"
				/>
			</form>

			<div className="relative md:w-1/2 w-full ">
				<img src={graphic} alt="" className="hidden md:flex graphic absolute md:top-10 md:left-10" />
				<img src={catPic} alt="" className="h-80 mb-6 md:mb-0 mx-auto md:mx-0 md:dog  md:absolute md:bottom-0 md:right-0 z-20 " />
			</div>
		</div>
	);
};

export default FormTemplate;
