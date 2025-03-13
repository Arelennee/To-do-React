import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { VideoBackground } from '../components/video-Background/video-Background';

export const Register = () => {
	const [dataRegister, setDataRegister] = useState({
		nombre: '',
		correo: '',
		contra: '',
	});
	const navigate = useNavigate();

	const _handleOnChange = (e) => {
		const { name, value } = e.target;
		setDataRegister((prevData) => ({ ...prevData, [name]: value }));
	};

	const _handleOnSubmit = async (e) => {
		e.preventDefault();

		try {
			await createUserWithEmailAndPassword(
				auth,
				dataRegister.correo,
				dataRegister.contra
			);
			alert('Usuario registrado con éxito');
			navigate('/');
		} catch (error) {
			alert(`Error al registrarse: ${error.message}`);
		}
	};

	return (
		<>
		<VideoBackground/>
		<div className='flex justify-center items-center h-screen w-screen'>
			<div className="container flex flex-row mx-auto rounded-lg w-4xl bg-[#1a1a2ef3]">
				<div className="flex flex-col flex-3/5 p-9">
					<div>
						<h1 className='font-extrabold text-4xl text-[#ff007f]'>Registrarse</h1>
					</div>
					<form onSubmit={_handleOnSubmit} className='mt-5'>
						<div>
						<label className='font-bold p-1 text-[#ff77a9]'>Ingresa tus Nombres y Apellidos: <br /></label>
							<input
								type="text"
								placeholder="Nombre"
								name="nombre"
								value={dataRegister.nombre}
								onChange={_handleOnChange}
								className='outline-0 font-light p-4 w-md rounded-lg text-[#ff77a9] mt-3 mb-4 hover:bg-[#3e2c8d5b] hover:animated duration-200'
							/>
						</div>
						<div>
						<label className='font-bold p-1 text-[#ff77a9]'>Ingresa tu Correo Electronico <br /></label>
							<input
								type="email"
								placeholder="Correo"
								name="correo"
								value={dataRegister.correo}
								onChange={_handleOnChange}
								className='outline-0 font-light p-4 w-md rounded-lg text-[#ff77a9] mt-3 mb-4 hover:bg-[#3e2c8d5b] hover:animated duration-200'
							/>
						</div>
						<div>
						<label className='font-bold p-1 text-[#ff77a9]'>Crea tu Contraseña <br /></label>
							<input
								type="password"
								placeholder="Contraseña"
								name="contra"
								value={dataRegister.contra}
								onChange={_handleOnChange}
								className='outline-0 font-light p-4 w-md rounded-lg text-[#ff77a9] mt-3 mb-4 hover:bg-[#3e2c8d5b] hover:animated duration-200'
							/>
						</div>
						<button type="submit" className='block p-2.5 bg-[#9d4eddc4] rounded-tr-lg rounded-bl-lg w-md mb-5'>Registrarse</button>
					</form>
					<button type="button" onClick={() => navigate('/')} className='block p-2.5 bg-[#ff00ff] rounded-tl-lg rounded-br-lg w-md font-medium'>
						Volver
					</button>
				</div>
				<div className="flex flex-2/4 justify-end sm:hidden md:flex">
					<img src="https://i.pinimg.com/736x/97/92/23/97922361952f54ef5d0c0a6a53cdff9d.jpg" alt="" className='w-xs rounded-r-lg'/>
				</div>
			</div>
		</div>
		</>
	);
};
