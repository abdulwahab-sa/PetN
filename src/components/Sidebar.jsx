/* eslint-disable react/prop-types */
import { useState } from 'react';
import userIcon from '../assets/userIcon.png';
import messageIcon from '../assets/messageIcon.png';
import settingIcon from '../assets/settingIcon.png';
import { MdCancelPresentation } from 'react-icons/md';

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

const Sidebar = ({ openSidebar, setOpenSidebar }) => {
	const [menuToggle, setMenuToggle] = useState(true);

	return (
		<div
			className={`absolute ${
				openSidebar ? 'left-0' : '-left-full'
			}  top-40 h-64 w-full justify-center md:justify-normal md:sidebar bg-darkBlue shadow-xl md:shadow-none p-4 md:p-28 flex flex-col items-center space-y-4 md:space-y-2 z-50 md:static  transition-all`}
		>
			<span onClick={() => setOpenSidebar(!openSidebar)} className="md:hidden text-white text-3xl absolute right-4 top-0">
				{<MdCancelPresentation />}
			</span>
			{navLinks.map((link) => (
				<div
					key={link.id}
					className={` cursor-pointer relative flex items-center space-x-4 px-3 h-9 w-4/5 md:w-60  rounded ${
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
