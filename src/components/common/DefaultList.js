import React from 'react';
import {FlatList, StyleSheet, View, Text, RefreshControl} from 'react-native';
import {useTranslation} from 'react-i18next';
import { Fonts, Dimensions, Colors } from '../../theme';
import { Loading } from '../../components/helper';

const DefaultList = ({
    data,
    renderItem, 
    style,
    numColumns,
    onEndReach,
    loadingMore,
    onRefresh,
    refreshing,
    horizontal
      }) => {
  const {t} = useTranslation();

  return  <FlatList
  style={style}
  data={data}
  nestedScrollEnabled
  horizontal={horizontal}
  numColumns={numColumns}
  showsVerticalScrollIndicator={false}
  showsHorizontalScrollIndicator={false}
  keyExtractor={(item, index) => item.id}
  renderItem={renderItem}
  onEndReachedThreshold={0.3}
  onEndReached={()=> onEndReach()}
  onEndReachedThreshold={0}
  ListFooterComponent={loadingMore?<Loading/>:null }
  ListFooterComponentStyle={{marginVertical: Dimensions.DEVICE_HEIGHT*0.03}}
  refreshControl={
    <RefreshControl
      colors={[Colors.blueColor, Colors.skyColor]}
      refreshing={refreshing}
      onRefresh={()=> onRefresh()} />
    }
  ListEmptyComponent={() => (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={styles.text}>
        {t('app:no_tasks')}
      </Text>
    </View>
  )}
/>
};

const styles = StyleSheet.create({
  text:{
    fontFamily: Fonts.font_B,
    color: Colors.grayColorText,
    fontWeight:'bold',
    fontSize: Dimensions.DEVICE_HEIGHT*0.025,
    marginVertical: Dimensions.DEVICE_HEIGHT*0.1
  }
});

export default DefaultList;
