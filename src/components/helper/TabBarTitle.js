import { Text , StyleSheet , } from 'react-native';
import * as React from 'react';
import { Colors, Dimensions, Fonts } from '../../theme';
const TabBarIitle= ({name,focused})=> {

    return (
      <Text style={[styles.tabBarLabel,{color: focused?Colors.red:Colors.grayLight}]}>
        {name}</Text>
    );
  }
  
  const styles = StyleSheet.create({
    tabBarLabel: {
      fontSize: Dimensions.DEVICE_HEIGHT*0.022,
      textAlign: 'center',
      fontFamily: Fonts.font_B,
      fontWeight:'bold',
    },
  });

  export default TabBarIitle;
