import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const RootLayout = () => {
	return (
		<>
			<Navigation />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	);
};

export default RootLayout;
