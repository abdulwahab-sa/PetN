import { useState } from 'react';
import Footer from '../components/Footer';
import MyPets from '../components/MyPets';
import Navigation from '../components/Navigation';
import PetAccount from '../components/PetAccount';
import Sidebar from '../components/Sidebar';

const Account = () => {
	const [openSidebar, setOpenSidebar] = useState(false);
	return (
		<div className="flex">
			<Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
			<PetAccount openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
		</div>
	);
};

export default Account;
