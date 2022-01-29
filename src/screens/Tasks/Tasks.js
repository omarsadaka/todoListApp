
import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from "react-native";
import {useTranslation} from 'react-i18next';
import ButtomTabs from '../../components/common/ButtomTabs';
import {ContainerView} from '../../components/common'
import { DefaultHeader, DefaultText } from '../../components/common';
import { Colors, Dimensions, Fonts } from '../../theme';
import { TaskList } from '../../components/cardItem/tasks';
import { User } from '../../api/UserUtilities';
import { Loading } from '../../components/helper';

 const Tasks = ({navigation}) => {
  const {t} = useTranslation(); 
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks()
   }, []);
  
  const loadTasks=()=>{
    setLoading(true)
    User.tasks().then(res=>{
      setLoading(false)
      console.log('tasks',JSON.stringify(res))
      setTasks(res.data)
   })
  } 
  
    return (
     <ContainerView style={styles.container}>
      <DefaultHeader navigation={navigation} title={t('app:tasks')} 
       leftIcon='menu' onLeftPress={()=> navigation.openDrawer()}/>
      <View style={styles.container}> 
       {loading? <Loading/>:
        <TaskList data={tasks} onEndReach={()=>{}} onRefresh={()=>{}} refreshing={false} loadingMore={false} loadData={()=> loadTasks()}/>
       }
      </View>
       <ButtomTabs navigation={navigation} route={'Tasks'}/>
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
  export default Tasks