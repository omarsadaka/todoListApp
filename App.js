import React, {useEffect, useState} from 'react';
import {LogBox, View} from 'react-native';
import UserContext from './src/hooks/UserContext';
import useCachedResources from './src/hooks/useCachedResources';
LogBox.ignoreAllLogs()
import Navigation from './src/navigations';
import SplashScreen from 'react-native-splash-screen'

const App = () => {
  const {
    token, setToken,
    userName, setUserName
    } = useCachedResources();
    const [show, setShow] = useState(false);
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  useEffect(() => {
    clearTimeout(timeout);
    let timeout = setTimeout(() => {
    setShow(true)
    }, 300);
  }, []);

  return (
    <View style={{flex: 1}}>
    <UserContext.Provider
				value={{
          token,setToken,
          userName, setUserName
				  }}>
         {show? <Navigation/>:null}
				</UserContext.Provider>
    </View>
  );
};

export default App;
