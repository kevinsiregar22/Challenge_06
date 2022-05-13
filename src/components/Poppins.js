import React from 'react';
import {Text, StyleSheet} from 'react-native';

const Poppins = ({
  type = 'Regular',
  children,
  color = 'black',
  size = 17,
  textAlign = 'center',
  marginLeft = 15,
  marginBottom = 0,
  marginTop = 0,
  marginRight = 5,
}) => {
  //styled
  const style = StyleSheet.create({
    text: {
      fontFamily: `Poppins-${type}`,
      color: color,
      fontSize: size,
      textAlign: textAlign,
      marginLeft: marginLeft,
      marginBottom: marginBottom,
      marginTop: marginTop,
      marginRight: marginRight,
      ...style,
    },
  });
  return (
    <Text testID="text component" style={style.text}>
      {children}
    </Text>
  );
};

export default Poppins;
