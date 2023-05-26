/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { MdNotes, MdDehaze } from 'react-icons/md';
import logo from './../assets/PawTech.png';
import { NavLink, Link, useNavigate } from 'react-router-dom';

const navLinks = [
	{
		id: 1,
		title: 'Home',
		path: '/',
	},
	{
		id: 2,
		title: 'About',
		path: '/about',
	},
];

const Navigation = () => {
	const user = localStorage.getItem('user');

	const [loggedIn, setLoggedIn] = useState([navLinks]);
	const navigate = useNavigate();
	if (!user) {
		loggedIn.push({
			id: 3,
			title: 'Log In',
			path: '/login',
		});
	}

	const [mobileToggle, setMobileToggle] = useState(false);

	const handleLogout = () => {
		localStorage.removeItem('user');

		navigate('login');
	};

	return (
		<div className="w-full lg:h-nav h-40 bg-darkBlue lg:px-24 px-8 flex justify-between overflow-hidden">
			<div className="flex items-end">
				<div className="h-36  ">
					<img src={logo} alt="" className="w-36" />
				</div>
			</div>
			<div className="lg:hidden flex items-center h-full justify-center px-3 text-3xl text-white">
				<span className="text-4xl" onClick={() => setMobileToggle(!mobileToggle)}>
					{mobileToggle ? <MdNotes /> : <MdDehaze />}
				</span>
			</div>

			<div
				className={`absolute ${
					mobileToggle ? 'left-0' : '-left-full'
				}  top-40 h-64 w-full bg-darkBlue shadow-xl lg:shadow-none  lg:h-full flex flex-col z-50 lg:static lg:flex-row lg:w-4/6 lg:justify-end lg:space-x-8 justify-center items-center space-y-4 lg:space-y-0 lg:items-center text-md lg:text-xl font-semibold text-white transition-all`}
			>
				{navLinks.map((Link) => (
					<NavLink to={Link.path} key={Link.id}>
						{Link.title}
					</NavLink>
				))}
				{!user && (
					<>
						<Link to="/login">
							<button className="p-2 lg:p-0  lg:h-11 rounded-md lg:text-xl font-semibold text-white">Log In</button>
						</Link>
						<Link to="/signup">
							<button className="bg-lightBlue p-2 lg:p-0  lg:w-28 lg:h-11 rounded-md lg:text-xl font-semibold text-white">Sign up</button>
						</Link>
					</>
				)}
				{user && (
					<button
						onClick={handleLogout}
						className="bg-orange-500 p-2 lg:p-0  lg:w-28 lg:h-11 rounded-md lg:text-xl font-semibold text-white"
					>
						Log Out
					</button>
				)}
			</div>
		</div>
	);
};

export default Navigation;

//"h-full items-center space-x-9 text-white text-xl font-semibold "
