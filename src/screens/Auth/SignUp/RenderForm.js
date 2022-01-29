import React, { useCallback, useEffect, useState } from 'react';
import { View, Image, StyleSheet , TouchableOpacity } from "react-native";
import { Dimensions, Fonts, Colors } from '../../../theme';
import { DefaultText, DefaultInput, DefaultButton } from '../../../components/common';
import {useTranslation} from 'react-i18next';

const RenderForm=({
  handleChange,
  handleBlur,
  handleSubmit,
  values, errors,
  isValid,
  touched,loading
})=>{
    const {t} = useTranslation();
    const [secure, setSecure] = useState(true);
    const [secure2, setSecure2] = useState(true);


    return(
      <View style={{marginTop: Dimensions.DEVICE_HEIGHT*0.06}}>
      <DefaultInput
      hint={t('app:name')}
      value={values.name}
      isLeftIcon={false}
      isRightIcon={false}
      secure={false}
      editable={true}
      onChange={handleChange('name')}
      />
      {(errors.name && touched.name) &&
          <DefaultText title={errors.name} style={styles.errorText}/>
      }
      <DefaultInput
      hint={t('app:email')}
      value={values.email}
      isLeftIcon={false}
      isRightIcon={false}
      isphone={false}
      secure={false}
      editable={true}
      onChange={handleChange('email')}
      />
      {(errors.email && touched.email) &&
          <DefaultText title={errors.email} style={styles.errorText}/>
      }
      <DefaultInput
      hint={t('app:age')}
      value={values.age}
      keyboardType='phone-pad'
      isLeftIcon={false}
      isRightIcon={false}
      secure={false}
      editable={true}
      onChange={handleChange('age')}
     />
     {(errors.age && touched.age) &&
        <DefaultText title={errors.age} style={styles.errorText}/>
     }
      <DefaultInput
      hint={t('app:password')}
      value={values.password}
      rightIconName={secure?'eye-off-outline':'eye-outline'}
      isLeftIcon={false}
      isRightIcon={true}
      secure={secure}
      editable={true}
      onChange={handleChange('password')}
      onSecure={()=> setSecure(!secure)}
     />
     {(errors.password && touched.password) &&
        <DefaultText title={errors.password} style={styles.errorText}/>
     }
     <DefaultInput
      hint={t('app:confirm_password')}
      value={values.confirmPassword}
      rightIconName={secure2?'eye-off-outline':'eye-outline'}
      isLeftIcon={false}
      isRightIcon={true}
      secure={secure2}
      editable={true}
      onChange={handleChange('confirmPassword')}
      onSecure={()=> setSecure2(!secure2)}
     />
     {(errors.confirmPassword && touched.confirmPassword) &&
        <DefaultText title={errors.confirmPassword} style={styles.errorText}/>
     }
    <DefaultButton title={t('app:register')} onClick={handleSubmit} loading={loading}/>
  </View>
    )
}
const styles = StyleSheet.create({
    errorText:{
        fontSize: Dimensions.DEVICE_WIDTH*0.026,
        fontFamily: Fonts.font_LI,
        textAlign:'left',
        color: Colors.red
      }
  });
export default RenderForm;