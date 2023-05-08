import MyPets from '../components/MyPets';
import PetAccount from '../components/PetAccount';
import Sidebar from '../components/Sidebar';

const Account = () => {
	return (
		<div className="flex min-h-screen">
			<Sidebar />
			<PetAccount />
		</div>
	);
};

export default Account;
