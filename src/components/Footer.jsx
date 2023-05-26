import logo from './../assets/PawTech.png';
import { NavLink } from 'react-router-dom';

const footerLinks = [
	{
		id: 1,
		title: 'Home',
		path: '/',
	},
	{
		id: 2,
		title: 'About',
		path: 'about',
	},

	{
		id: 3,
		title: 'Log In',
		path: 'login',
	},
];

const Footer = () => {
	return (
		<div className="w-full md:h-nav h-full bg-darkBlue md:px-28 md:py-0 py-8 px-5 overflow-hidden ">
			<div className=" h-full flex flex-col md:flex-row md:items-end md:justify-between  ">
				<div className="flex flex-col md:flex-row md:space-x-8">
					<div className="h-36 ">
						<img src={logo} alt="" className="w-36" />
					</div>
					<div className="h-36 flex items-center ">
						<h4 className="footerheading text-xl md:text-3xl font-bold text-white"> A new way to know what your pet really needs. </h4>
					</div>
				</div>
				<div className="h-36 md:h-full mt-8 md:mt-0 flex justify-center space-y-5 text-white flex-col md:w-72 w-full">
					<div className="flex flex-col space-y-3 md:space-y-0 md:flex-row md:space-x-7">
						{footerLinks.map((Link) => (
							<NavLink to={Link.path} key={Link.id} className="text-base font-medium">
								{Link.title}
							</NavLink>
						))}
					</div>

					<span className="mx-auto md:mx-0 text-sm font-normal text-center">© 2023 Paw Tech. All Rights Reserved.</span>
				</div>
			</div>
		</div>
	);
};

export default Footer;
