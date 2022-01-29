import * as React from 'react';
import  AsyncStorage from '@react-native-community/async-storage';


export default function useCachedResources() {
	const [token , setToken] = React.useState();
	const [userName , setUserName] = React.useState();

	// Load any resources or data that we need prior to rendering the app
	React.useEffect(() => {
		async function loadResourcesAndDataAsync() {
			try {
				const token = await AsyncStorage.getItem('@user_token');
				setToken(token);
				const userName = await AsyncStorage.getItem('@user_name');;
				setUserName(userName);
				
			} catch (e) {
				// We might want to provide this error information to an error reporting service
				console.warn(e);
			} finally {
				
			}
		}

		loadResourcesAndDataAsync();
	}, []);

	return {
		token, setToken,
		userName, setUserName
	};
}
