import { useContext } from 'react';
import { ContextDataTask } from '../context/ContextDataTask';
import PropTypes from 'prop-types';

export const ItemsTaskAdded = () => {
	const { tasks, deleteTask, editTask, addTaskDoned } =
		useContext(ContextDataTask);

	return (
		<>
			{tasks.map(({ id, task, done }) => {
				return (
					<tr key={id}>
						<td>
							<label>
								<input
									type="checkbox"
									onChange={() => addTaskDoned(id)}
									checked={done}
								/>
							</label>
						</td>
						<td>
							<p style={{ margin: '0 10px' }}>{task}</p>
						</td>
						<td>
							<p style={{ margin: '0 10px' }}>
								{done ? 'Realizado' : 'pendiente'}
							</p>
						</td>
						<td>
							<button
								style={{ margin: '0 10px' }}
								onClick={() => editTask(id)}
							>
								Editar
							</button>
							<button
								style={{ margin: '0 10px' }}
								onClick={() => deleteTask(id)}
							>
								Eliminar
							</button>
						</td>
					</tr>
				);
			})}
		</>
	);
};

ItemsTaskAdded.propTypes = {
	deleteTask: PropTypes.func.isRequired,
	editTask: PropTypes.func.isRequired,
	addTaskDoned: PropTypes.func.isRequired,
};
