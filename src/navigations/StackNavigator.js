import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Tasks from "../screens/Tasks/Tasks";
import ChangeLanguage from "../screens/ChangeLanguage/ChangeLanguage";
import AddTask from "../screens/AddTask/AddTask";
import EditTask from "../screens/EditTask/EditTask";
import Setting from "../screens/Setting/Setting";
import Profile from "../screens/Profile/Profile";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

  const HomeStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="AddTask" component={AddTask} options={{headerShown: false}}/>
        <Stack.Screen name="Tasks" component={Tasks} options={{headerShown: false}}/>
        <Stack.Screen name="EditTask" component={EditTask} options={{headerShown: false}}/>
        <Stack.Screen name="Setting" component={Setting} options={{headerShown: false}}/>
        <Stack.Screen name="ChangeLanguage" component={ChangeLanguage} options={{headerShown: false}}/>
        <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
      </Stack.Navigator>
    );
  }

export { 
    HomeStackNavigator
  };