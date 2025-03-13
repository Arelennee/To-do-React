import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';
import { Login } from './pages/Login';
import { RootLayout } from './layout/RootLayout';
import { Register } from './pages/Register';
import { IndexTask } from './pages/IndexTask';
import { DonedTask } from './pages/DonedTask';
import { ProtectedRoute } from './components/ProtectedRoute';

export const App = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<>
				<Route path="/" element={<Login />} />
				<Route path="/register" element={<Register />} />

				<Route element={<RootLayout />}>
					<Route
						path="/all-task"
						element={
							<ProtectedRoute>
								<IndexTask />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/doned-task"
						element={
							<ProtectedRoute>
								<DonedTask />
							</ProtectedRoute>
						}
					/>
				</Route>
			</>
		)
	);

	return <RouterProvider router={router} />;
};
