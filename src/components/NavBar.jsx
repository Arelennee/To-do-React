import { Link } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export const NavBar = () => {
	const navigate = useNavigate();

	const handleLogout = async () => {
		try {
			await signOut(auth);
			navigate('/');
		} catch (error) {
			console.error('Error al cerrar sesión:', error);
		}
	};

	return (
		<nav className=''>
			<div className="p-5">
			<ul className='flex sm:space-x-0 max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:gap-1.5 md:space-x-2.5 md:items-center md:justify-center md:flex-row'>
				<Link to="/all-task">
					<button type='button' className='p-2.5 bg-[#9d4eddc4] rounded-tr-lg rounded-bl-lg w-3xs'>Todas las Tareas</button>
				</Link>
				<Link to="/doned-task">
					<button type='button' className='p-2.5 bg-[#00ff9dbb] rounded-tr-lg rounded-bl-lg w-3xs'>Realizadas</button>
				</Link>
				<button onClick={handleLogout} className='p-2.5 bg-[#ff0000] rounded-tr-lg rounded-bl-lg w-3xs'>Cerrar Sesión</button>
			</ul>
			</div>
		</nav>
	);
};
