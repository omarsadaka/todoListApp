import React, { Switch, useContext , useEffect, useState  } from 'react';
import {useTranslation} from 'react-i18next';
import {
  View,
  ScrollView,
  StyleSheet,
  I18nManager,
  Image
} from 'react-native';
import {DrawerItem, LogOutModel} from '../components/helper';
import {Colors, Dimensions, Fonts} from '../theme';
import AsyncStorage from '@react-native-community/async-storage';
import UserContext from '../hooks/UserContext';
import { WelcomeUser } from '../components/helper';
const DrawerContent = (props) => {
  const {t} = useTranslation();
  const helper = useContext(UserContext);
  const [visible, setVisible] = useState(false);

  useEffect(() =>{
   }, []);

  
  return (
    <View {...props} style={{flex: 1}}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{alignItems:'center'}}>
       <WelcomeUser name={helper.userName}/>
      </View>
      <View style={{height: Dimensions.DEVICE_HEIGHT*0.07}} />
      <DrawerItem
        labal={t('app:add_task')}
        iconName="plus-circle"
        iconType="feather"
        onPress={()=>props.navigation.navigate('AddTask')}
      />
      <DrawerItem
        labal={t('app:tasks')}
        iconName="package"
        iconType="feather"
        onPress={()=>props.navigation.navigate('Tasks')}
      />
      <DrawerItem
        labal={t('app:setting')}
        iconName="settings"
        iconType="feather"
        onPress={()=>props.navigation.navigate('Setting')}
      />
     
      <DrawerItem
        labal={t('app:logout')}
        iconName="ios-home-outline"
        iconType="ionicon"
        isLogout={true}
        onPress={()=> setVisible(true)}
      />
     
      <View style={{marginTop: Dimensions.DEVICE_HEIGHT * 0.03}} />
      </ScrollView>
      <LogOutModel
      logoutModalVisible={visible}
      onCancelPress={()=> setVisible(false)}
      onLogoutPress={()=> helper.setToken('')}/>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  logo:{
    width: Dimensions.DEVICE_WIDTH*0.2,
    height: Dimensions.DEVICE_WIDTH*0.2
  }
 
 
 
});
export default DrawerContent;
// const mapStateToProps = state => ({
//   currentUser: state.auth.currentUser,
// });
// const mapDispatchToProps = dispatch => ({
//   logout: bindActionCreators(logout, dispatch),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(DrawerContent);

