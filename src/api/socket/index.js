import {getUserToken} from "../auth";
import {createContext, useContext} from 'react';
import {API_URL} from '../index';

const SocketContext = createContext(null);

const token = getUserToken();

//TODO: devfine socket instance using API_URL and token for auth.

export const SocketContextProvider = ({children}) => {
		
	const value = {
		//pass functions to subscribe socket events
	}

	return (<SocketContext.Provider value={value} >
		{children}
	</SocketContext.Provider>)
}
export const useSocket = () => {
	return useContext(SocketContext);
};

export const withSocket = Component => props => (<SocketContextProvider>
	<Component {...props}/>
</SocketContextProvider>);






