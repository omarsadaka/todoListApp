
import React, { useEffect, useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, I18nManager } from "react-native";
import {useTranslation} from 'react-i18next';
import ButtomTabs from '../../components/common/ButtomTabs';
import {ContainerView} from '../../components/common'
import { DefaultHeader } from '../../components/common';
import { Colors, Dimensions, Fonts } from '../../theme';
import { LogOutModel, WelcomeUser } from '../../components/helper';
import UserContext from '../../hooks/UserContext';
import {Icon} from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';

 const Setting = ({navigation}) => {
  const {t} = useTranslation();
  const helper = useContext(UserContext); 
  const [visible, setVisible] = useState(false);
  useEffect(() => {
   }, []);

  
   const row=(name , route , icon)=>{
    return(
    <TouchableOpacity style={styles.view}
       onPress={()=> {
           if(route=='LogOut') setVisible(true)
           else navigation.navigate(route)
           }}>
        <View style={styles.view_icon}>
         <Icon
           name={icon}
           type="feather"
           size={Dimensions.DEVICE_HEIGHT * 0.02}
           color={Colors.white}/>
        </View>
        <Text style={styles.title}>{name}</Text>
        <Icon
           name={I18nManager.isRTL?'chevron-left':"chevron-right"}
           type="feather"
           size={Dimensions.DEVICE_HEIGHT * 0.02}/>
     </TouchableOpacity>
    )
  }
    return (
     <ContainerView style={styles.container}>
      <DefaultHeader navigation={navigation} 
       isSearch={true}
       title={t('app:setting')} 
       leftIcon='menu' onLeftPress={()=> navigation.openDrawer()}/>
      <View style={styles.container}> 
       <WelcomeUser name={helper.userName}/>
       <View style={{marginTop: Dimensions.DEVICE_HEIGHT*0.07}}>
       {row(t('app:user_info'),'Profile' , 'user')}
       {row(t('app:change_language'),'ChangeLanguage' , 'globe')}
       {row(t('app:logout'),'LogOut' , 'log-out')}
       </View>
      </View>
       <ButtomTabs navigation={navigation} route={'Setting'}/>
       <LogOutModel 
       logoutModalVisible={visible}
       onCancelPress={()=> setVisible(false)}
       onLogoutPress={()=> {
         AsyncStorage.removeItem('@user_token')
         helper.setToken('')
        }}
       />
     </ContainerView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    view:{
        width: Dimensions.DEVICE_WIDTH*0.9,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: Colors.white,
        borderRadius: Dimensions.DEVICE_WIDTH*0.02,
        elevation: 2,
        flexDirection:'row',
        paddingHorizontal:Dimensions.DEVICE_WIDTH*0.02,
        paddingVertical: Dimensions.DEVICE_HEIGHT*0.01,
        marginVertical: Dimensions.DEVICE_HEIGHT*0.015
      },
      title:{
        flex:1,
        color: Colors.black,
        fontSize: Dimensions.DEVICE_WIDTH * 0.035,
        fontFamily: Fonts.font_B,
        fontWeight: '200',
        marginHorizontal:Dimensions.DEVICE_WIDTH*0.03,
        textAlign:'left'
      },
      view_icon:{
        width:Dimensions.DEVICE_WIDTH*0.09,
        height:Dimensions.DEVICE_HEIGHT*0.05,
        backgroundColor: Colors.red,
        borderRadius: Dimensions.DEVICE_WIDTH*0.01,
        alignItems:'center',
        justifyContent:'center',
      },
  });
  export default Setting