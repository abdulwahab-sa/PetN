import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import AccountLayout from './layout/AccountLayout';
import PetAccount from './components/PetAccount';
import MyPets from './components/MyPets';
import About from './pages/About';
import MyReminders from './components/MyReminders';
import NewReminder from './components/NewReminder';

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path="/" element={<RootLayout />}>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="login" element={<Login />} />
				<Route path="signup" element={<SignUp />} />
			</Route>

			<Route path="/" element={<AccountLayout />}>
				<Route path="mypets" element={<MyPets />} />
				<Route path="petaccount" element={<PetAccount />} />
				<Route path="myreminders" element={<MyReminders />} />
				<Route path="newreminder" element={<NewReminder />} />
			</Route>
		</>
	)
);

export default router;
