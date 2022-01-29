import React, { useCallback, useEffect, useState } from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import { Colors, Fonts, Dimensions } from "../../theme";
import { TabBarIcon, TabBarIitle } from '../helper';
import {useTranslation} from 'react-i18next';
import {Icon} from 'react-native-elements';


const ButtomTabs = ({navigation, route}) => {
    const {t} = useTranslation();

  const onTapPress=(tab)=>{
        navigation.navigate(tab)
  }  
  return(
         <View style={styles.view}>
           <TouchableOpacity style={{alignItems:'center',flex:1}}
           onPress={()=>onTapPress('Tasks')}>
             <TabBarIcon  name="package" focused={route=='Tasks'? true: false} />
             <TabBarIitle name={t('app:tasks')} focused={route=='Tasks'? true: false} />
           </TouchableOpacity>

           

           <TouchableOpacity
           onPress={()=>{
            navigation.navigate('AddTask')
           }}>
           <Icon name={'plus'} type="feather" style={styles.circle}
            size={Dimensions.DEVICE_HEIGHT*0.03} color={Colors.white}/>
           </TouchableOpacity>

           <TouchableOpacity style={{alignItems:'center',flex:1}}
           onPress={()=>onTapPress('Setting')}>
             <TabBarIcon  name="settings" focused={route=='Setting'? true: false} />
             <TabBarIitle name={t('app:setting')} focused={route=='Setting'? true: false} />
           </TouchableOpacity>

         
        </View>
        )
};

const styles = StyleSheet.create({
  view:{
      height: Dimensions.DEVICE_HEIGHT*0.09,
      width: Dimensions.DEVICE_WIDTH,
      flexDirection:'row',
      alignItems:'center',
      backgroundColor: Colors.white,
      borderTopLeftRadius:Dimensions.DEVICE_HEIGHT*0.025,
      borderTopRightRadius:Dimensions.DEVICE_HEIGHT*0.025,
      borderColor: Colors.white,borderWidth:1,
      shadowOpacity: 0.3,
      shadowRadius: Dimensions.DEVICE_WIDTH*0.06,
      shadowOffset: { width: 0, height: 0 },
      elevation: 10,
  },
  title:{
      flex:1,
      color: Colors.white,
      fontFamily:Fonts.Ubuntu_B,
      fontWeight:'bold',
      fontSize: Dimensions.DEVICE_HEIGHT*0.03,
      textAlign:'center'
  },
  circle:{
    width: Dimensions.DEVICE_WIDTH*0.15,
    height: Dimensions.DEVICE_WIDTH*0.15,
    borderRadius: Dimensions.DEVICE_WIDTH*0.15/2,
    alignItems:'center',justifyContent:'center',
    backgroundColor: Colors.red,
    marginBottom: Dimensions.DEVICE_HEIGHT*0.07,
   

  }
});

export default ButtomTabs;
