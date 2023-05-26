/* eslint-disable react/prop-types */
import { useState } from 'react';
import userIcon from '../assets/userIcon.png';
import messageIcon from '../assets/messageIcon.png';
import settingIcon from '../assets/settingIcon.png';
import { MdCancelPresentation } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { useSidebar } from '../context/SidebarContext';

const navLinks = [
	{
		id: 1,
		title: 'My Account',
		icon: userIcon,
		path: 'petaccount',
	},
	{
		id: 2,
		title: 'My Pets',
		icon: userIcon,
		path: 'mypets',
	},
	{
		id: 3,
		title: 'Reminders',
		icon: messageIcon,
		path: 'myreminders',
	},
	{
		id: 4,
		title: 'Settings',
		icon: settingIcon,
		path: 'settings',
	},
];

const Sidebar = () => {
	const { openSidebar, setOpenSidebar } = useSidebar();

	return (
		<div
			className={`absolute ${
				openSidebar ? 'left-0' : '-left-full'
			}  top-40 h-64 w-full justify-center lg:justify-normal lg:sidebar bg-darkBlue shadow-xl lg:shadow-none p-4 lg:p-28 flex flex-col items-center space-y-4 lg:space-y-2 z-50 lg:static  transition-all`}
		>
			<span onClick={() => setOpenSidebar(!openSidebar)} className="lg:hidden text-white text-3xl absolute right-4 top-0">
				{<MdCancelPresentation />}
			</span>
			{navLinks.map((link) => (
				<NavLink
					key={link.id}
					to={link.path}
					onClick={() => setOpenSidebar(!openSidebar)}
					className={({ isActive }) => (isActive ? 'bg-lightBlue' : '')}
				>
					<div className="cursor-pointer relative flex items-center space-x-4 px-10 lg:px-3 h-9 w-60 lg:w-60  rounded ">
						<img src={link.icon} alt="" className="w-4" />
						<span className="text-base font-medium text-white  flex items-center">{link.title}</span>
						{/*
						<span
							className={`${
								link.title === 'Reminders' ? 'flex' : 'hidden'
							} items-center justify-center h-6 w-6  rounded-md text-sm text-white p-1 font-medium absolute right-2 `}
						>
							5
						</span>
*/}
					</div>
				</NavLink>
			))}
		</div>
	);
};

export default Sidebar;
