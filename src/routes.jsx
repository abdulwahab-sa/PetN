/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter, createRoutesFromElements, Route, redirect, Navigate } from 'react-router-dom';
import RootLayout from './layout/RootLayout';

import AccountLayout from './layout/AccountLayout';
import MyPets from './components/MyPets';
import PetAccount from './components/PetAccount';
import MyReminders from './components/MyReminders';
import NewReminder from './components/NewReminder';
import { lazy } from 'react';
import { useAuthContext } from './context/AuthContext';
import AddPet from './components/AddPet';
const user = localStorage.getItem('user');

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Login = lazy(() => import('./pages/Login'));
const SignUp = lazy(() => import('./pages/SignUp'));

const ProtectedRoute = ({ children }) => {
	const { user } = useAuthContext;
	if (!user) {
		return <Navigate to="/login" replace />;
	}
	return children;
};

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path="/" element={<RootLayout />}>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route
					path="login"
					element={<Login />}
					loader={async () => {
						if (!user) {
							return <Login />;
						} else {
							throw redirect('/mypets');
						}
					}}
				/>
				<Route
					path="signup"
					element={<SignUp />}
					loader={async () => {
						if (user) {
							return <MyPets />;
						} else {
							throw redirect('/login');
						}
					}}
				/>
			</Route>

			<Route path="/" element={<AccountLayout />}>
				<Route
					path="mypets"
					element={
						<ProtectedRoute>
							<MyPets />
						</ProtectedRoute>
					}
				/>
				<Route
					path="petaccount"
					element={
						<ProtectedRoute>
							<PetAccount />
						</ProtectedRoute>
					}
				/>

				<Route
					path="myreminders"
					element={
						<ProtectedRoute>
							<MyReminders />
						</ProtectedRoute>
					}
				/>
				<Route
					path="addpet"
					element={
						<ProtectedRoute>
							<AddPet />
						</ProtectedRoute>
					}
				/>
				<Route
					path="newreminder"
					element={
						<ProtectedRoute>
							<NewReminder />
						</ProtectedRoute>
					}
				/>
			</Route>
		</>
	)
);

export default router;
