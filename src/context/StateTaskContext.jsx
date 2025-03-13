import { useEffect, useState } from 'react';
import { ContextDataTask } from './ContextDataTask';
import PropTypes from 'prop-types';
import { db, auth } from '../firebaseConfig';
import {
	collection,
	addDoc,
	getDocs,
	getDoc,
	deleteDoc,
	doc,
	updateDoc,
	query,
	where,
} from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

export const StateTaskContext = ({ children }) => {
	const [tasks, setTasks] = useState([]);
	const [dataToEdit, setdataToEdit] = useState({});
	const [confirmDataToEdit, setConfirmDataToEdit] = useState(false);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				
				const fetchTasks = async () => {
					const userId = user.uid; 

				
					const q = query(
						collection(db, 'tasks'),
						where('userId', '==', userId)
					);
					const querySnapshot = await getDocs(q);

					const tasksData = querySnapshot.docs.map((doc) => ({
						id: doc.id,
						...doc.data(),
					}));
					setTasks(tasksData);
				};

				fetchTasks();
			} else {
				setTasks([]);
			}
		});

		return () => unsubscribe();
	}, []);

	const addTask = async (task) => {
		const user = auth.currentUser;
		if (!user) {
			console.error('Usuario no autenticado');
			return;
		}

		const userId = user.uid;

		const docRef = await addDoc(collection(db, 'tasks'), {
			...task,
			userId,
		});

		setTasks((prevTask) => [...prevTask, { id: docRef.id, ...task }]);
	};

	const deleteTask = async (id) => {
		const user = auth.currentUser; 
		if (!user) {
			console.error('Usuario no autenticado');
			return;
		}

		const taskRef = doc(db, 'tasks', id);
		const taskDoc = await getDoc(taskRef);

		if (taskDoc.data().userId === user.uid) {
			await deleteDoc(taskRef);
			setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
		} else {
			console.error('No tienes permiso para eliminar esta tarea');
		}
	};

	const editTask = (id) => {
		const updateTaskEdit = tasks.find((task) => task.id === id);
		if (updateTaskEdit) {
			setdataToEdit(updateTaskEdit);
			setConfirmDataToEdit(true);
		}
	};

	const addTaskDoned = async (id) => {
		const task = tasks.find((task) => task.id === id);
		if (!task) {
			console.error('Documento no encontrado en el estado local');
			return;
		}

		const taskRef = doc(db, 'tasks', id);
		try {
			await updateDoc(taskRef, { done: !task.done });
			setTasks((prevTask) =>
				prevTask.map((task) =>
					task.id === id ? { ...task, done: !task.done } : task
				)
			);
		} catch (error) {
			console.error('Error al actualizar el documento:', error);
		}
	};

	return (
		<ContextDataTask.Provider
			value={{
				tasks,
				setTasks,
				dataToEdit,
				setdataToEdit,
				confirmDataToEdit,
				setConfirmDataToEdit,
				addTask,
				deleteTask,
				editTask,
				addTaskDoned,
			}}
		>
			{children}
		</ContextDataTask.Provider>
	);
};

StateTaskContext.propTypes = {
	children: PropTypes.node.isRequired,
};
