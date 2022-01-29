import React from 'react';
import {StyleSheet} from 'react-native';
import { Dimensions } from '../../../theme';
import { DefaultList } from '../../common';
import Item from './Item';

const List = ({data, onEndReach, loadingMore, onRefresh, refreshing, loadData}) => {
  const renderItem = ({item}) => {
    return (
      <Item
        {...item} loadData={loadData}
      />
    );
  };

  return (
    <DefaultList
    style={{marginTop: Dimensions.DEVICE_HEIGHT*0.01}}
      data={data}
      numColumns={1}
      renderItem={renderItem}
      onEndReach={()=>onEndReach()}
      loadingMore={loadingMore}
      onRefresh={()=> onRefresh()}
      refreshing={refreshing}
      horizontal={false}
    />
  );
};

const styles = StyleSheet.create({
 
});

export default List;
