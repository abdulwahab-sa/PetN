import { useNavigate } from 'react-router-dom';
import FormTemplate from '../components/FormTemplate';
import { useRegisterMutation } from '../slices/userApiSlice';
import toast from 'react-hot-toast';

const SignUp = () => {
	const navigate = useNavigate();

	const [register, { isLoading }] = useRegisterMutation();

	const registerHandler = async (email, password) => {
		try {
			const response = await register({ email, password });

			if (response.data) {
				toast.success('Registration successful');
				navigate('/login');
			}
		} catch (error) {
			toast.error('Invalid email or password');
			console.error(error);
		}
	};

	return <FormTemplate actionType={'signup'} actionHandler={registerHandler} isLoading={isLoading} />;
};

export default SignUp;
