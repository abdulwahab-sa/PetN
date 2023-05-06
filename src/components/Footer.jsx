import logo from './../assets/PawTech.png';

const footerLinks = [
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

const Footer = () => {
	return (
		<div className="w-full h-nav bg-darkBlue px-28  overflow-hidden">
			<div className=" h-full flex items-end justify-between ">
				<div className="flex space-x-8">
					<div className="h-36 ">
						<img src={logo} alt="" className="w-36" />
					</div>
					<div className="h-36 flex items-center ">
						<h4 className="footerheading text-3xl font-bold text-white"> A new way to know what your pet really needs. </h4>
					</div>
				</div>
				<div className="h-36 flex justify-center space-y-5 text-white flex-col w-72 ">
					<div className="flex space-x-7">
						{footerLinks.map((Link) => (
							<span key={Link.id} className="text-base font-medium">
								{Link.title}
							</span>
						))}
					</div>

					<span className=" text-sm font-normal text-center">© 2023 Paw Tech. All Rights Reserved.</span>
				</div>
			</div>
		</div>
	);
};

export default Footer;
