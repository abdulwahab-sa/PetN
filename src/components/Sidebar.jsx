import userIcon from '../assets/userIcon.png';
import messageIcon from '../assets/messageIcon.png';
import settingIcon from '../assets/settingIcon.png';

const navLinks = [
	{
		id: 1,
		title: 'My Account',
		icon: userIcon,
	},
	{
		id: 2,
		title: 'My Pets',
		icon: userIcon,
	},
	{
		id: 3,
		title: 'Reminders',
		icon: messageIcon,
	},
	{
		id: 4,
		title: 'Settings',
		icon: settingIcon,
	},
];

const Sidebar = () => {
	return (
		<div className="sidebar  bg-darkBlue p-28 flex flex-col items-center space-y-2">
			{navLinks.map((link) => (
				<div
					key={link.id}
					className={` cursor-pointer relative flex items-center space-x-4 px-3 h-9 w-60 rounded ${
						link.title === 'My Pets' ? 'bg-lightBlue' : ''
					}`}
				>
					<img src={link.icon} alt="" className="w-4" />
					<span className="text-base font-medium text-white  flex items-center">{link.title}</span>
					<span
						className={`${
							link.title === 'Reminders' ? 'flex' : 'hidden'
						} items-center justify-center h-6 w-6 bg-lightBlue rounded-md text-sm text-white p-1 font-medium absolute right-2 `}
					>
						5
					</span>
				</div>
			))}
		</div>
	);
};

export default Sidebar;
