import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import HomeAbout from '../components/HomeAbout';
import Navigation from '../components/Navigation';

const Home = () => {
	return (
		<>
			<Navigation />
			<HeroSection />;
			<HomeAbout />
			<Footer />
		</>
	);
};

export default Home;
