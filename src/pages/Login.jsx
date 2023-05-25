import FormTemplate from '../components/FormTemplate';
import { useAuthContext } from '../context/AuthContext';
import axios from 'axios';

const Login = () => {
	const { dispatch } = useAuthContext();

	const login = async (email, password) => {
		const response = await axios.post('http://localhost:3000/api/login', { email, password });
		const data = response.data.accessToken;
		console.log(data);
		if (!data) {
			console.log('No data');
		}
		if (data) {
			//const { accessToken, refreshToken } = response.data;
			localStorage.setItem('user', JSON.stringify(data));
			dispatch({ type: 'LOGIN', payload: data });
		}
	};

	return (
		// eslint-disable-next-line no-undef
		<FormTemplate actionType={'login'} actionHandler={login} />
	);
};

export default Login;