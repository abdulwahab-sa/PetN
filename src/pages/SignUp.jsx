import { useNavigate } from 'react-router-dom';
import FormTemplate from '../components/FormTemplate';
import axios from 'axios';

const SignUp = () => {
	const navigate = useNavigate();

	const register = async (email, password) => {
		const response = await axios.post('https://pawtech-api.herokuapp.com/api/register', { email, password });
		const data = response.data.accessToken;
		console.log(data);
		if (!data) {
			console.log('No data');
		}
		if (data) {
			console.log('user added');
			navigate('/login');
		}
	};

	return <FormTemplate actionType={'signup'} actionHandler={register} />;
};

export default SignUp;
