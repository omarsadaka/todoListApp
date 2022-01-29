
import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, I18nManager } from "react-native";
import {DefaultHeader} from "../../components/common";
import {useTranslation} from 'react-i18next';
import { Dimensions, Fonts, Colors } from "../../theme";
import {DefaultText} from '../../components/common';
import UserContext from '../../hooks/UserContext';
import { Loading, WelcomeUser } from '../../components/helper';
import { User } from '../../api/UserUtilities';

const Profile = ({navigation}) => {
  const {t} = useTranslation();
  const helper = useContext(UserContext); 
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    loadData()
   }, []);
  
  const loadData=()=>{
    setLoading(true)
    User.userInfo().then(res=>{
      setLoading(false)
      console.log({res})
      setData(res)
   })
  } 
  

    return (
     <View style={styles.container}>
       <DefaultHeader navigation={navigation} 
       title={t('app:user_info')} 
       leftIcon='menu' onLeftPress={()=> navigation.openDrawer()}
       rightIcon={I18nManager.isRTL?'arrow-left':'arrow-right'} onRightPress={()=> navigation.goBack()}/>
       {loading? <Loading/>:
       <View style={styles.view}>
       <WelcomeUser name={helper.userName}/>
       <View style={{marginTop: Dimensions.DEVICE_HEIGHT*0.03}}>
       <DefaultText title={t('app:name')} style={styles.label}/>
       <DefaultText title={data.name} style={styles.text}/>
       <DefaultText title={t('app:email')} style={styles.label}/>
       <DefaultText title={data.email} style={styles.text}/>
       <DefaultText title={t('app:age')} style={styles.label}/>
       <DefaultText title={data.age} style={styles.text}/>
       </View>

       </View>
       }
     </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
    },
    view: {
        flex: 1,
        alignItems: "center",
      },
    text:{
        width: Dimensions.DEVICE_WIDTH*0.93,
        backgroundColor: Colors.white,
        elevation:2, shadowOpacity:0.2,
        borderRadius: Dimensions.DEVICE_WIDTH*0.02,
        marginVertical:5, 
        paddingHorizontal:Dimensions.DEVICE_WIDTH*0.02,
        paddingVertical: Dimensions.DEVICE_HEIGHT*0.02,
        color: Colors.black,
        fontFamily: Fonts.font_B,
        fontWeight:'bold',
        fontSize: Dimensions.DEVICE_WIDTH*0.035,
        marginHorizontal: 3,
        textAlign:'left'
    },
    label:{
        width: Dimensions.DEVICE_WIDTH*0.93,
        color: Colors.black,
        fontFamily: Fonts.font_B,
        fontSize: Dimensions.DEVICE_WIDTH*0.035,
        marginHorizontal: 3,
        textAlign:'left'
    }
  });
  
  export default Profile;