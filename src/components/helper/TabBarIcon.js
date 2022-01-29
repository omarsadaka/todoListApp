import {Icon} from 'react-native-elements';
import * as React from 'react';
import { Colors, Dimensions } from '../../theme';
const TabBarIcon=({name , focused})=> {
  return (
    <Icon
      name={name}
      type={'feather'}
      size={Dimensions.DEVICE_WIDTH*0.07}
      color={focused ? Colors.red : Colors.grayLight}
    />
  );
}
export default TabBarIcon;

