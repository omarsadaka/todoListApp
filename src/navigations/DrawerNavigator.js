import React from "react";
import {Colors, Dimensions} from '../theme';
import DrawerContent from './DrawerContent';
import {I18nManager} from 'react-native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeStackNavigator } from "./StackNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
     initialRouteName="Home"
      drawerType='front'
      drawerPosition={I18nManager.isRTL ? 'right' : 'left'}
      drawerStyle={{
        backgroundColor: Colors.white,
        width: Dimensions.DEVICE_WIDTH * 0.7,
      }}
      drawerContent={(props) => <DrawerContent {...props}/>}>
      <Drawer.Screen name="Home" component={HomeStackNavigator}/>
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;