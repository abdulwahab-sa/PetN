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
	return (
		<div className="w-full h-nav bg-darkBlue px-24 flex justify-between overflow-hidden">
			<div className="flex items-end">
				<div className="h-36  ">
					<img src={logo} alt="" className="w-36" />
				</div>
			</div>

			<div className="h-full flex items-center space-x-9 text-white text-xl font-semibold ">
				{navLinks.map((Link) => (
					<span key={Link.id}>{Link.title}</span>
				))}
				<button className="bg-lightBlue w-28 h-11 rounded-md text-xl font-semibold text-white">Sign up</button>
			</div>
		</div>
	);
};

export default Navigation;
