import React, { useCallback, useEffect, useState } from 'react';
import { View, StyleSheet , I18nManager } from "react-native";
import { Dimensions, Fonts, Colors } from '../../theme';
import { DefaultText, DefaultButton } from '../../components/common';
import {useTranslation} from 'react-i18next';
import {Input} from 'react-native-elements';

const RenderForm=({
  handleChange,
  handleBlur,
  handleSubmit,
  values, errors,
  isValid, touched,
  loading
  })=>{
    const {t} = useTranslation();

    return(
      <View style={{marginTop: Dimensions.DEVICE_HEIGHT*0.03}}>
        <View style={styles.input}>
           <Input
            placeholder={t('app:description')}
            underlineColorAndroid="transparent"
            inputContainerStyle={{borderBottomWidth:0}}
            multiline
            defaultValue={values.description}
            style={[styles.label_style,{height: Dimensions.DEVICE_HEIGHT*0.35,textAlignVertical:'top'}]}
            onChangeText={handleChange('description')}/>
          </View>
         {(errors.description && touched.description) &&
           <DefaultText title={errors.description} style={styles.errorText}/>
         }
        <DefaultButton title={t('app:add')} onClick={handleSubmit} loading={loading} style={{marginTop: Dimensions.DEVICE_HEIGHT*0.1}}/>
    </View>
    )
}
const styles = StyleSheet.create({
    errorText:{
        fontSize: Dimensions.DEVICE_WIDTH*0.026,
        fontFamily: Fonts.font_LI,
        textAlign:'left',
        color: Colors.red
      },
      input:{
        width:Dimensions.DEVICE_WIDTH*0.9,
        height:Dimensions.DEVICE_HEIGHT*0.35,
        backgroundColor:Colors.white,
        borderRadius:Dimensions.DEVICE_HEIGHT*0.02,
        alignItems:'center',
        elevation:2,
        shadowOpacity: 0.2,
        marginTop: Dimensions.DEVICE_HEIGHT*0.02,
        marginBottom: Dimensions.DEVICE_HEIGHT*0.02
      },
      label_style:{
        color: Colors.black,
        fontSize: Dimensions.DEVICE_HEIGHT * 0.02,
        fontFamily: Fonts.Ubuntu_LI,
        fontWeight: '200',
        textAlign: I18nManager.isRTL?'right':'left',
      },
  });
export default RenderForm;