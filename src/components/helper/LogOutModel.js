import React from 'react';
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import Modal from 'react-native-modal';
import { DefaultButton, DefaultText } from '../common';
import {useTranslation} from 'react-i18next';
import { Colors, Dimensions, Fonts } from '../../theme';

const LogOutModel=({logoutModalVisible, onCancelPress, onLogoutPress})=>{
    const {t} = useTranslation();
    return(
        <Modal
        style={{ flex: 1 }}
        isVisible={logoutModalVisible}
        animationInTiming={1000}
        animationOutTiming={1000}
        backdropTransitionInTiming={1000}
        backdropTransitionOutTiming={1000}>
        <KeyboardAvoidingView enabled style={styles.container}>
            <View style={{ width: '100%', alignItems: 'center', height: '100%' }}>
                <View style={{ width: '90%', justifyContent: 'space-between', alignItems: 'center' }}>
                    <DefaultText title={t('app:logout')} style={styles.text}/>
                </View>
                <View style={{ width: '90%', justifyContent: 'space-between', alignItems: 'center' }}>
                <DefaultText title={t('app:want_logout')} style={[styles.text,{marginTop: Dimensions.DEVICE_HEIGHT*0.02}]}/>
                </View>
                <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                    <View style={styles.btnContainer}>
                        <DefaultButton title={t('app:cancel')} onClick={()=> onCancelPress()} style={{width:'100%'}}/>
                    </View>
                    <View style={styles.btnContainer}>
                        <DefaultButton title={t('app:confirm')} onClick={()=> onLogoutPress()} style={{width:'100%'}}/>
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    </Modal>
    )
}
const styles = StyleSheet.create({
    container:{
        height: Dimensions.DEVICE_HEIGHT / 4,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        borderRadius: 5,
        paddingVertical:5 
    },
    btnContainer:{
        width: '45%',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 8
    },
      text:{
        color: Colors.black,
        fontSize: Dimensions.DEVICE_WIDTH * 0.04,
        fontFamily: Fonts.font_B,
        fontWeight: 'bold',
        textAlign:'center'
      },
  
  });
export default LogOutModel;
