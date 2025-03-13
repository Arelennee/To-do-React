import { useContext } from 'react';
import { ContextDataTask } from '../context/ContextDataTask';

export const TaskMarkedDoned = () => {
	const { tasks, addTaskDoned, deleteTask } = useContext(ContextDataTask);
	const doned = tasks.filter((task) => task.done);
	return doned.length < 1 ? (
		<>
		<p className='text-center font-bold text-3xl'>No hay ninguna tarea Terminada</p>
		<div className='flex w-screen items-center justify-center mt-5'>
			<img src="https://i.pinimg.com/736x/ce/14/06/ce140686a62374acfa388c185bd351f6.jpg" alt="" className='w-md'/>
		</div>
		</>
	) : (
		<>
		<div className='flex w-screen justify-center'>
			<div className='bg-[#1a1a2ef3] container flex p-4 rounded-b-xl justify-center'>
		<table className='w-full shadow-lg'>
			<thead className='bg-[#3d2c8d] text-white'>
				<tr>
					<th className="px-4 py-2">Marcar</th>
					<th className="px-4 py-2">Tarea</th>
					<th className="px-4 py-2">Estado</th>
					<th className="px-4 py-2">Acciones</th>
				</tr>
			</thead>
			<tbody className="bg-[#1a1a2e] text-pink-300 font-medium">
				{doned.map(({ id, task, done }) => {
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
								<p style={{ margin: '0 10px'}}>{task}</p>
							</td>
							<td>
								<p style={{ margin: '0 10px' }}>
									{done ? 'Realizado' : 'pendiente'}
								</p>
							</td>
							<td>
								<button
									style={{ margin: '0 10px'}}
									onClick={() => deleteTask(id)}
								>
									Eliminar
								</button>
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
			</div>

		</div>
		</>
	);
};
