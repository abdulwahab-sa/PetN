import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import { SidebarProvider } from './context/SidebarContext';
import { AuthContextProvider } from './context/AuthContext';

function App() {
	return (
		<AuthContextProvider>
			<SidebarProvider>
				<RouterProvider router={router} />
			</SidebarProvider>
		</AuthContextProvider>
	);
}

export default App;
