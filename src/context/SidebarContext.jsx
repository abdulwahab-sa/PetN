/* eslint-disable react/prop-types */
import { useState, useContext, createContext } from 'react';
const SidebarContext = createContext(null);

export const SidebarProvider = ({ children }) => {
	const [openSidebar, setOpenSidebar] = useState(false);

	return <SidebarContext.Provider value={{ openSidebar, setOpenSidebar }}>{children}</SidebarContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSidebar = () => useContext(SidebarContext);
