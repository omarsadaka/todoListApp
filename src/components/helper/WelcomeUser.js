import React, { useState, useContext , useEffect } from 'react';
import {useTranslation} from 'react-i18next';
import {View, Text, StyleSheet} from 'react-native';
import {Avatar, Rating} from 'react-native-elements';
import {Colors, Dimensions, Fonts} from '../../theme';
import { DefaultText } from '../common';

const WelcomeUser = ({name}) => {
  const {t} = useTranslation();  
  return (
    <View style={styles.container}>
      <Avatar
        containerStyle={styles.avatarContainer}
        avatarStyle={styles.avatar}
        source={require('../../assets/images/logo.png')}/>
       <DefaultText title={name} style={styles.username}/>

       
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.DEVICE_WIDTH,
    alignItems: 'center',
    backgroundColor: Colors.grayLight,
    paddingTop: Dimensions.DEVICE_HEIGHT*0.05,
    paddingBottom: Dimensions.DEVICE_HEIGHT*0.02
  },
  avatarContainer: {
    height: Dimensions.DEVICE_WIDTH * 0.18,
    width: Dimensions.DEVICE_WIDTH * 0.18,
    padding: 2,
    borderWidth: 1,
    borderColor: Colors.white,
    borderRadius: Dimensions.DEVICE_WIDTH * 0.05,
  },
  avatar: {
    borderRadius: Dimensions.DEVICE_WIDTH * 0.05,
    borderWidth: 1,
    borderColor: Colors.white,
  },
  username: {
    width:'100%',
    color: Colors.black,
    fontSize: Dimensions.DEVICE_HEIGHT * 0.025,
    fontFamily: Fonts.font_B,
    textAlign:'center'
  },
});

export default WelcomeUser;
