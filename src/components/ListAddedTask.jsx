import { ItemsTaskAdded } from './ItemsTaskAdded';
import { useContext } from 'react';
import { ContextDataTask } from '../context/ContextDataTask';

export const ListAddedTask = () => {
	const { tasks } = useContext(ContextDataTask);

	return tasks.length < 1 ? (
		<p className='text-center font-bold text-3xl'>No Tienes tareas pendientes :0</p>
	) : (
		<div className='flex w-screen justify-center'>
			<div className='bg-[#1a1a2ef3] container flex p-4 rounded-b-xl justify-center'>
				<table className='w-full shadow-lg'>
					<thead className='bg-[#3d2c8d] text-white'>
						<tr>
							<th className="px-4 py-2">Marque</th>
							<th className="px-4 py-2">Actividad</th>
							<th className="px-4 py-2">Estado</th>
							<th className="px-4 py-2">Acciones</th>
						</tr>
					</thead>
					<tbody className="bg-[#1a1a2e] text-pink-300">
						<ItemsTaskAdded />
					</tbody>
				</table>
			</div>
		</div>
	);
};
