/* eslint-disable react/prop-types */
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { SidebarProvider } from './context/SidebarContext';
import { AuthContextProvider, useAuthContext } from './context/AuthContext';
import { Suspense } from 'react';
import RootLayout from './layout/RootLayout';
import AccountLayout from './layout/AccountLayout';
import MyPets from './components/MyPets';

import MyReminders from './components/MyReminders';
import NewReminder from './components/NewReminder';
import ViewPet from './components/ViewPet';
import { lazy } from 'react';
import AddPet from './components/AddPet';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Login = lazy(() => import('./pages/Login'));
const SignUp = lazy(() => import('./pages/SignUp'));

function App() {
	return (
		<BrowserRouter>
			<AuthContextProvider>
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
							<Route path="/" element={<AccountLayout />}>
								<Route
									path="mypets"
									element={
										<PrivateRoute>
											<MyPets />
										</PrivateRoute>
									}
								/>
								<Route
									path="petaccount"
									element={
										<PrivateRoute>
											<AddPet />
										</PrivateRoute>
									}
								/>
								<Route
									path="viewpet/:id"
									element={
										<PrivateRoute>
											<ViewPet />
										</PrivateRoute>
									}
								/>
								<Route
									path="myreminders"
									element={
										<PrivateRoute>
											<MyReminders />
										</PrivateRoute>
									}
								/>
								<Route
									path="newreminder"
									element={
										<PrivateRoute>
											<NewReminder />
										</PrivateRoute>
									}
								/>
							</Route>
						</Routes>
					</Suspense>
				</SidebarProvider>
			</AuthContextProvider>
		</BrowserRouter>
	);
}

const PrivateRoute = ({ children }) => {
	const { user } = useAuthContext();

	return user ? children : <Navigate to="/login" />;
};

export default App;
