import {View, Image, StyleSheet} from 'react-native';
import React from 'react';
import {ms} from 'react-native-size-matters';
import logo from '../assets/icons/user.png';

export default function LogoHeader() {
  return (
    <View style={styles.logoContainer}>
      <Image
        source={logo}
        style={styles.logo}
        resizeMode="contain"
        // backgroundColor="red"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    marginTop: 10,
    width: ms(100),
    height: ms(100),
  },
});
