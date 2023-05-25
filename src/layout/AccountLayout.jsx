import { Outlet } from 'react-router';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

const AccountLayout = () => {
	return (
		<>
			<Navigation />

			<main className="flex">
				<Sidebar />
				<Outlet />
			</main>

			<Footer />
		</>
	);
};

export default AccountLayout;
