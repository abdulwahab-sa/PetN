import { useState } from 'react';
import { MdNotes, MdDehaze } from 'react-icons/md';
import logo from './../assets/PawTech.png';

const navLinks = [
	{
		id: 1,
		title: 'Home',
	},
	{
		id: 2,
		title: 'About',
	},
	{
		id: 3,
		title: 'Contact',
	},
	{
		id: 4,
		title: 'Log In',
	},
];

const Navigation = () => {
	const [mobileToggle, setMobileToggle] = useState(false);
	return (
		<div className="w-full md:h-nav h-40 bg-darkBlue md:px-24 px-8 flex justify-between overflow-hidden">
			<div className="flex items-end">
				<div className="h-36  ">
					<img src={logo} alt="" className="w-36" />
				</div>
			</div>
			<div className="md:hidden flex items-center h-full justify-center px-3 text-3xl text-white">
				<span className="text-4xl" onClick={() => setMobileToggle(!mobileToggle)}>
					{mobileToggle ? <MdNotes /> : <MdDehaze />}
				</span>
			</div>

			<div
				className={`absolute ${
					mobileToggle ? 'left-0' : '-left-full'
				}  top-40 h-64 w-full bg-darkBlue shadow-xl md:shadow-none  md:h-full flex flex-col z-50 md:static md:flex-row md:w-4/6 md:justify-end md:space-x-8 justify-center items-center space-y-4 md:space-y-0 md:items-center text-md md:text-xl font-semibold text-white transition-all`}
			>
				{navLinks.map((Link) => (
					<span key={Link.id}>{Link.title}</span>
				))}
				<button className="bg-lightBlue p-2 md:p-0  md:w-28 md:h-11 rounded-md md:text-xl font-semibold text-white">Sign up</button>
			</div>
		</div>
	);
};

export default Navigation;

//"h-full items-center space-x-9 text-white text-xl font-semibold "
