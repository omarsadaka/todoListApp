import React, { useEffect, useContext, useState } from 'react';
import { NavigationContainer  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import '../i18n';
import Login from '../screens/Auth/Login/Login';
import SignUp from '../screens/Auth/SignUp/SignUp';
import DrawerNavigator from "./DrawerNavigator";
import UserContext from '../hooks/UserContext';


export default  function  Navigation() {
	const helper = useContext(UserContext);
	 useEffect(() =>{
	}, []);

	//check token from asyncStorage to open AuthNavigator or RootNavigator
	return (
		<NavigationContainer> 
			{helper.token?<RootNavigator/>:<AuthNavigator />}
		</NavigationContainer>
	);
}

const Stack = createStackNavigator();

function RootNavigator() {
	return (
		<Stack.Navigator 
		  screenOptions={{
			headerShown: false
		  }}>
			<Stack.Screen name="Root" component={DrawerNavigator}/>
		</Stack.Navigator>
	);
}

function AuthNavigator() {
	return (
		<Stack.Navigator 
		  screenOptions={{
			headerShown: false
		  }}>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="SignUp" component={SignUp}/>
		</Stack.Navigator>
	);
}

