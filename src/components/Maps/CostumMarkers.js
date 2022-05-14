import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const CustomMarker = ({item}) => {
  return (
    <View style={styles.containerMarker}>
      <Image style={styles.iconMarker} source={{uri: item.markerImage}} />
    </View>
  );
};

const styles = StyleSheet.create({
  containerMarker: {
    // height: 30,
    // width: 30,
    backgroundColor: 'red',
    // borderRadius: 30,
  },
  iconMarker: {
    height: 30,
    width: 30,
    backgroundColor: 'none',
    // borderRadius: 25,
  },
});

export default CustomMarker;
