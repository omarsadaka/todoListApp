import React,{useState, useCallback} from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet,TouchableOpacity, View} from 'react-native';
import { Colors, Dimensions, Fonts } from '../../../theme';
import DefaultText from '../../common/DefaultText';
import { useNavigation } from '@react-navigation/native';
import {Icon, Button} from 'react-native-elements';
import { User } from '../../../api/UserUtilities';
import { showSuccess } from '../../helper/LocalAlerts';

const Item = ({
  _id,
  description,
  completed,
  loadData
}) => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const deleteTask = useCallback((id) => {
    setLoading(true)
    User.deleteTask(id).then(res=>{
      setLoading(false)
      console.log({res})
      if(res.success){
        showSuccess(t('app:delete_success'))
        loadData()
      }
   })
  }, []);

  const deleteBtn=()=>{
    return(
      <Button
         buttonStyle={styles.btn_style}
         loading={loading}
         loadingProps={{ color: Colors.red}}
         icon={
           <Icon name={"trash-2"} 
                type='feather'
                size={Dimensions.DEVICE_WIDTH*0.04}/>}
                onPress={()=> deleteTask(_id)}/>
    )
  }

  const editBtn=()=>{
    return(
      <Button
         buttonStyle={styles.btn_style}
         loadingProps={{ color: Colors.red}}
         icon={
           <Icon name={"edit"} 
                type='feather'
                size={Dimensions.DEVICE_WIDTH*0.04}/>}
                onPress={()=> navigation.navigate('EditTask',{ID: _id, Value: description})}/>
    )
  }

  return (
    <TouchableOpacity style={styles.container}
    onPress={()=> {}}>
      <View style={{alignContent:'flex-start',alignItems:'center', flexDirection:'row'}}>
      <DefaultText title={completed?t('app:completed'):t('app:unCompleted')} style={styles.status}/>
       {deleteBtn()}
       {editBtn()}
      </View>
      <DefaultText title={description} style={styles.content}/>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.DEVICE_WIDTH*0.95,
    backgroundColor: Colors.white,
    paddingVertical: Dimensions.DEVICE_HEIGHT*0.015,
    marginHorizontal:3,
    borderRadius: Dimensions.DEVICE_WIDTH*0.02,
    elevation:2, shadowOpacity:0.2,
    paddingHorizontal: Dimensions.DEVICE_WIDTH*0.03,
    marginVertical: Dimensions.DEVICE_HEIGHT*0.01
  },
  content:{
    width:'100%',
    fontFamily: Fonts.font_B,
    fontSize: Dimensions.DEVICE_HEIGHT*0.023,
    color: Colors.textSubtitle,
    textAlign:'left',
  },
  btn_style:{
    width:Dimensions.DEVICE_WIDTH*0.08,
    height:Dimensions.DEVICE_WIDTH*0.08,
    borderRadius:Dimensions.DEVICE_WIDTH*0.08/2,
    backgroundColor: Colors.grayLight,
    alignItems:'center',justifyContent:'center',
    marginHorizontal:2
  },
  status:{
    flex:1,
    fontFamily: Fonts.font_B,
    fontSize: Dimensions.DEVICE_WIDTH*0.035,
    color: Colors.red,
    textAlign:'left',
  }

});

export default Item;
