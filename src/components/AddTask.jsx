import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import { ContextDataTask } from '../context/ContextDataTask';
import { VideoBackground } from './video-Background/video-Background';

const dataTaskInitial = {
	id: null,
	task: '',
	done: false,
};

export const AddTask = () => {
	const {
		tasks,
		setTasks,
		addTask,
		dataToEdit,
		setdataToEdit,
		confirmDataToEdit,
		setConfirmDataToEdit,
	} = useContext(ContextDataTask);

	const [dataTask, setDataTask] = useState(dataTaskInitial);

	useEffect(() => {
		if (confirmDataToEdit) {
			setDataTask(dataToEdit);
		} else {
			setDataTask(dataTaskInitial);
		}
	}, [dataToEdit, confirmDataToEdit]);

	const _handleOnChange = (e) => {
		const { name, value } = e.target;
		setDataTask({ ...dataTask, [name]: value });
	};
	const _handleOnSubmit = (e) => {
		e.preventDefault();

		if (!dataTask.task || dataTask.task === '') {
			alert('debes ingresar algun dato');
			return;
		}

		if (confirmDataToEdit) {
			const updataData = tasks.map((task) =>
				task.id === dataToEdit.id
					? { ...task, task: dataTask.task }
					: task
			);
			setTasks(updataData);
			setConfirmDataToEdit(false);
			setdataToEdit({});
		} else {
			// Elimina el ID generado con uuidv4()
			const newTask = {
				task: dataTask.task,
				done: dataTask.done,
			};
			addTask(newTask); // Pasa solo los datos necesarios
		}

		_handleReset();
	};

	const _handleReset = () => {
		setDataTask(dataTaskInitial);
	};

	return (
		<>
		<VideoBackground/>
		<div className='flex w-screen justify-center'>	
			<div className="container bg-[#1a1a2ef3] p-4 rounded-t-xl">
			<form onSubmit={_handleOnSubmit} className='flex space-x-1.5 items-center justify-center'>
				<label className='font-bold p-1 text-[#ff77a9] max-sm:text-center md:text-left'>
					Agregar tarea:
				</label>
					<input
						type="text"
						name="task"
						value={dataTask.task}
						onChange={_handleOnChange}
						className='outline-0 font-light p-4 w-md rounded-lg text-[#ff77a9] hover:bg-[#3e2c8d5b] hover:animated duration-200'
					/>
				<button type="submit" className='p-2.5 bg-[#9d4eddc4] rounded-tr-lg rounded-bl-lg w-2xs'>Agregar</button>
			</form>
			</div>
		</div>
		</>
	);
};
AddTask.propTypes = {
	addTask: PropTypes.func.isRequired,
	confirmDataToEdit: PropTypes.bool.isRequired,
	setConfirmDataToEdit: PropTypes.func.isRequired,
	dataToEdit: PropTypes.object.isRequired,
	setdataToEdit: PropTypes.func.isRequired,
};
