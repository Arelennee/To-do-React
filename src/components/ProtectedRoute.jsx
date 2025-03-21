import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';

export const ProtectedRoute = ({ children }) => {
	const navigate = useNavigate();

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			if (!user) {
				navigate('/');
			}
		});

		return () => unsubscribe();
	}, [navigate]);

	return children;
};
