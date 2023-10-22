/* eslint-disable react/prop-types */
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { SidebarProvider } from './context/SidebarContext';
import { Suspense } from 'react';
import RootLayout from './layout/RootLayout';
import AccountLayout from './layout/AccountLayout';
import MyPets from './components/MyPets';

import MyReminders from './components/MyReminders';
import NewReminder from './components/NewReminder';
import ViewPet from './components/ViewPet';
import { lazy } from 'react';
import AddPet from './components/AddPet';
import { useSelector } from 'react-redux';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Login = lazy(() => import('./pages/Login'));
const SignUp = lazy(() => import('./pages/SignUp'));

function App() {
	return (
		<BrowserRouter>
			<SidebarProvider>
				<Suspense
					fallback={
						<div id="loading">
							<div className="loader"></div>
						</div>
					}
				>
					<Routes>
						<Route path="/" element={<RootLayout />}>
							<Route path="/" element={<Home />} />
							<Route path="about" element={<About />} />
							<Route path="login" element={<Login />} />
							<Route path="signup" element={<SignUp />} />
						</Route>
						<Route
							path="/"
							element={
								<PrivateRoute>
									<AccountLayout />
								</PrivateRoute>
							}
						>
							<Route path="mypets" element={<MyPets />} />
							<Route path="petaccount" element={<AddPet />} />
							<Route path="viewpet/:id" element={<ViewPet />} />
							<Route path="myreminders" element={<MyReminders />} />
							<Route path="newreminder" element={<NewReminder />} />
						</Route>
					</Routes>
				</Suspense>
			</SidebarProvider>
		</BrowserRouter>
	);
}

const PrivateRoute = ({ children }) => {
	const { userInfo } = useSelector((state) => state.auth);

	return userInfo ? children : <Navigate to="/login" replace />;
};

export default App;
