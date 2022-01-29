
import React, { useCallback, useEffect, useState } from 'react';
import { View, StyleSheet } from "react-native";
import {useTranslation} from 'react-i18next';
import ButtomTabs from '../../components/common/ButtomTabs';
import {ContainerView} from '../../components/common'
import { showSuccess } from '../../components/helper/LocalAlerts';
import { DefaultHeader } from '../../components/common';
import { Colors, Dimensions, Fonts } from '../../theme';
import { Formik } from 'formik';
import RenderForm from './RenderForm';
import { addTaskValidationSchema } from './validationAddTask';
import { User } from '../../api/UserUtilities';

 const AddTask = ({navigation}) => {
  const {t} = useTranslation();
  const [loading, setLoading] = useState(false);
 
  useEffect(() => {
   }, []);

  const onSubmit = useCallback((values, action) => {
    console.log('values', JSON.stringify(values))
    setLoading(true)
    User.addTask(values).then(res=>{
      setLoading(false)
      console.log('addTask',JSON.stringify(res))
      if(res.success){
       showSuccess(t('app:add_success'))
       action.resetForm()
       navigation.push('Tasks')
      }
   })
  }, []);

    return (
     <ContainerView style={styles.container}>
      <DefaultHeader navigation={navigation} 
       isSearch={true}
       title={t('app:add_task')} 
       leftIcon='menu' onLeftPress={()=> navigation.openDrawer()}/>
      <View style={styles.container}> 
      <View style={{}}>
        <Formik
		  initialValues={{ description: ''}}
		  onSubmit={(values, action) => {
          onSubmit(values, action)
        }}
        validationSchema={addTaskValidationSchema}>
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
      </View>
       <ButtomTabs navigation={navigation}/>
     </ContainerView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
    },
    sectionsView:{
      backgroundColor: Colors.grayLight,
      height: Dimensions.DEVICE_HEIGHT*0.06,
      alignItems:'center'
    },
    subSectionsView:{
      flexDirection:'row',
      alignItems:'center',
      marginTop: Dimensions.DEVICE_HEIGHT*0.02
    },
    all:{
      fontFamily: Fonts.font_B,
      fontSize: Dimensions.DEVICE_HEIGHT*0.02,
      color: Colors.white,
      textAlign:'center',
    },
    allContainer: {
      alignItems:'center',
      width:Dimensions.DEVICE_WIDTH*0.2,
      height: Dimensions.DEVICE_HEIGHT*0.055,
      paddingVertical: Dimensions.DEVICE_HEIGHT*0.015,
      marginHorizontal: Dimensions.DEVICE_WIDTH*0.01,
      backgroundColor: Colors.red,
      borderRadius: Dimensions.DEVICE_WIDTH*0.02
    },
    row:{
      width:Dimensions.DEVICE_WIDTH*0.95,
      marginTop: Dimensions.DEVICE_HEIGHT*0.02,
      alignItems:'center',flexDirection:'row',
    },
    result:{
      flex:1,
      fontFamily: Fonts.font_B,
      fontSize: Dimensions.DEVICE_WIDTH*0.04,
      color: Colors.black,
      textAlign:'left',
    },
    clickedIcon:{
      width: Dimensions.DEVICE_WIDTH*0.08,
      height: Dimensions.DEVICE_WIDTH*0.08,
      alignItems:'center',justifyContent:'center',
      borderRadius: Dimensions.DEVICE_WIDTH*0.01,
      backgroundColor: Colors.white,
      borderColor: Colors.red,borderWidth:1
    },
    unClickedIcon:{
        width: Dimensions.DEVICE_WIDTH*0.08,
        height: Dimensions.DEVICE_WIDTH*0.08,
        alignItems:'center',justifyContent:'center',
        borderRadius: Dimensions.DEVICE_WIDTH*0.01,
        backgroundColor: Colors.grayLight,
    }
  });
  export default AddTask