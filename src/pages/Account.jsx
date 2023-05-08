import MyPets from '../components/MyPets';
import Sidebar from '../components/Sidebar';

const Account = () => {
	return (
		<div className="flex min-h-screen">
			<Sidebar />
			<MyPets />
		</div>
	);
};

export default Account;
