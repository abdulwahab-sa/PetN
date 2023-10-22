import { useNavigate } from 'react-router-dom';
import FormTemplate from '../components/FormTemplate';
import toast from 'react-hot-toast';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLoginMutation } from '../slices/userApiSlice';
import { setCredentials } from '../slices/authSlice';

const Login = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [login, { isLoading }] = useLoginMutation();

	const { userInfo } = useSelector((state) => state.auth);

	useEffect(() => {
		if (userInfo) {
			navigate('/mypets');
		}
	}, [navigate, userInfo]);

	const loginHandler = async (email, password) => {
		try {
			const response = await login({ email, password });

			const loginData = response.data;
			if (loginData) {
				toast.success('Login successful');
			}
			dispatch(setCredentials({ ...loginData }));
		} catch (err) {
			console.log(err);
			toast.error('Invalid email or password');
		}
	};

	return (
		// eslint-disable-next-line no-undef
		<FormTemplate actionType={'login'} actionHandler={loginHandler} isLoading={isLoading} />
	);
};

export default Login;
