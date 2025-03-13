import { useState } from 'react';
import { dbUsers } from '../data/dbUsers';
import { ContextDataUser } from './ContextDataUser';
import PropTypes from 'prop-types';

export const StateUserContext = ({ children }) => {
	const [addDbUser, setAddDbUser] = useState(dbUsers);

	return (
		<ContextDataUser.Provider
			value={{
				addDbUser,
				setAddDbUser,
			}}
		>
			{children}
		</ContextDataUser.Provider>
	);
};

StateUserContext.propTypes = {
	children: PropTypes.node.isRequired,
};
