import { useNavigate } from 'react-router-dom';
import FormTemplate from '../components/FormTemplate';
import { useAuthContext } from '../context/AuthContext';
import axios from 'axios';

const Login = () => {
	const { dispatch } = useAuthContext();
	const navigate = useNavigate();
	const login = async (email, password) => {
		const response = await axios.post('https://pawtech-api.herokuapp.com/api/login', { email, password });
		const data = response.data.accessToken;
		console.log(data);
		if (!data) {
			console.log('No data');
		}
		if (data) {
			//const { accessToken, refreshToken } = response.data;
			localStorage.setItem('user', data);
			dispatch({ type: 'LOGIN', payload: data });
			navigate('/mypets');
		}
	};

	return (
		// eslint-disable-next-line no-undef
		<FormTemplate actionType={'login'} actionHandler={login} />
	);
};

export default Login;
