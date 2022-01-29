
import React, { useCallback, useEffect, useState, useContext } from 'react';
import { View, Image, StyleSheet , TouchableOpacity, TextInput } from "react-native";
import {useTranslation} from 'react-i18next';
import { ContainerView } from '../../../components/common';
import { DefaultText } from '../../../components/common';
import { Dimensions, Fonts, Colors } from '../../../theme';
import  {loginValidationSchema} from './validationLogin';
import { Formik } from 'formik';
import RenderForm from './RenderForm';
import { showSuccess } from '../../../components/helper/LocalAlerts';
import AsyncStorage from '@react-native-community/async-storage';
import UserContext from '../../../hooks/UserContext';
import { User } from '../../../api/UserUtilities';

 const Login = ({navigation}) => {
  const helper = useContext(UserContext);
  const {t} = useTranslation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
   }, []);


  const onSubmit = useCallback((values, action) => {
    console.log('values', JSON.stringify(values))
    setLoading(true)
    User.login(values).then(res=>{
      setLoading(false)
      console.log('resLogin',JSON.stringify(res))
      if(res){
       showSuccess(t('app:login_success'))
       action.resetForm()
       AsyncStorage.setItem('@user_token',res.token)
       AsyncStorage.setItem('@user_name',res.user.name)
       helper.setToken(res.token)
       helper.setUserName(res.user.name)
      }
   })
  }, []);


 const renderHeader=()=>{
   return(
     <View style={{alignItems:'center',marginTop: Dimensions.DEVICE_HEIGHT*0.1}}>
       <Image source={require('../../../assets/images/logo.png')} style={styles.logo}/>
       <DefaultText title={t('app:wellcome')} style={styles.welcome}/>
    </View>
   )
 }

    return (
     <ContainerView style={styles.container}>
       {renderHeader()}
       <View style={{}}>
        <Formik
				initialValues={{ email: '', password: '' }}
				onSubmit={(values, action) => {
          onSubmit(values, action)
        }}
        validationSchema={loginValidationSchema}>
				{({handleChange, handleBlur, handleSubmit, values, errors, isValid, touched}) => (
				 <RenderForm
         handleChange={handleChange}
         handleBlur={handleBlur}
         handleSubmit={handleSubmit}
         values={values}
         errors={errors}
         isValid={isValid}
         touched={touched}
         loading={loading}
        />
				)}
			</Formik>
       </View>
       <View style={[styles.row_contaier,{marginTop: Dimensions.DEVICE_HEIGHT*0.05,}]}>
         <DefaultText title={t('app:no_account')} style={[styles.text,{color:Colors.grayColorText}]}/>
         <TouchableOpacity onPress={()=> navigation.navigate('SignUp')}>
           <DefaultText title={t('app:create_account')} style={[styles.text,{color:Colors.red}]}/>
         </TouchableOpacity>
       </View>
     </ContainerView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      paddingHorizontal: Dimensions.DEVICE_WIDTH*0.03
    },
    welcome:{
      fontSize: Dimensions.DEVICE_WIDTH*0.04,
      fontFamily: Fonts.font_LI,
      color: Colors.red,
      marginTop: Dimensions.DEVICE_HEIGHT*0.01
    },
    row_contaier:{
      alignItems:'center',
      flexDirection:'row',
      paddingHorizontal: Dimensions.DEVICE_WIDTH*0.02
    },
    text:{
      fontSize: Dimensions.DEVICE_WIDTH*0.033,
      fontFamily: Fonts.font_LI,
      textAlign:'center',
    },
    logo:{
      width: Dimensions.DEVICE_WIDTH*0.15,
      height: Dimensions.DEVICE_WIDTH*0.15
    }
  });
  export default Login