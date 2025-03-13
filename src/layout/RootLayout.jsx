import { Outlet } from 'react-router-dom';
import { NavBar } from '../components/NavBar';

export const RootLayout = () => {
	return (
		<div>
			<NavBar />
			<Outlet />
		</div>
	);
};
