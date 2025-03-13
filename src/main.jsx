import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { StateUserContext } from './context/StateUserContext.jsx';
import { App } from './App.jsx';
import { StateTaskContext } from './context/StateTaskContext.jsx';
import "./styles/styles.css"
import "./styles/fonts.css"

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<StateUserContext>
			<StateTaskContext>
				<App />
			</StateTaskContext>
		</StateUserContext>
	</StrictMode>
);
