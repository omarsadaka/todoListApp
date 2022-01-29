import React from 'react';
import {View} from 'react-native';
import {Icon} from 'react-native-elements';
import {Colors} from '../../theme';

const BurrgerIcon = ({navigation}) => {
  return (
    <View style={{padding: 5}}>
      <Icon
        name="align-center"
        type='feather'
        size={25}
        color={Colors.black}
        onPress={() => navigation.openDrawer()}
      />
    </View>
  );
};

export default BurrgerIcon;
