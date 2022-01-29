import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import {Colors, Dimensions, Fonts} from '../../theme';

const DrawerItem = ({labal, iconName, iconType, onPress,isLogout}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.8}>
      <Icon
        name={iconName}
        type={iconType}
        size={Dimensions.DEVICE_WIDTH * 0.05}
        color={Colors.red}
      />
      <Text style={[styles.labal,{color: isLogout?Colors.red: Colors.black,}]}>{labal}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginStart: Dimensions.DEVICE_WIDTH * 0.05,
    marginBottom: Dimensions.DEVICE_HEIGHT * 0.03,
  },
  labal: {
    fontFamily: Fonts.font_B,
    fontWeight:'200',
    marginStart: Dimensions.DEVICE_WIDTH * 0.03,
    fontSize: Dimensions.DEVICE_WIDTH * 0.04,
  },
});

export default DrawerItem;
