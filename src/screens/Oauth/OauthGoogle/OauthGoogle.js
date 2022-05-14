import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {colors} from '../../../utils';
import Poppins from '../../../components/Poppins';
import {ms} from 'react-native-size-matters';

GoogleSignin.configure({
  webClientId:
    '434977868258-agqe0f8b0l6e06bk7aaj5jp0dkb232oa.apps.googleusercontent.com',
});

export default function OauthGoogle({navigation}) {
  const _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      navigation.navigate('Main');
      console.log(userInfo);
    } catch (error) {
      console.log(error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.OauthGoogle}>
        <Image
          style={styles.cover}
          source={require('../../../assets/icons/google2.png')}
        />
        <Poppins size={20} color="white" type="SemiBold">
          Google
        </Poppins>
      </TouchableOpacity>
      {/* <TouchableOpacity style={styles.Oauthfacebook}>
        <Image
          style={styles.cover}
          source={require('../../../assets/icons/facebook4.png')}
        />
        <Poppins size={20} color="white" type="SemiBold">
          Facebook
        </Poppins>
      </TouchableOpacity> */}

      <GoogleSigninButton
        style={{width: 172, height: 58, marginRight: 15}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={_signIn}
        // disabled={this.state.isSigninInProgress}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    // backgroundColor: 'aqua',
  },
  // Oauthfacebook: {
  //   width: 170,
  //   height: 50,
  //   borderRadius: 5,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   backgroundColor: colors.aouth.facebook,
  //   flexDirection: 'row',
  // },
  OauthGoogle: {
    width: ms(172),
    height: ms(50),
    borderRadius: ms(5),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.aouth.google,
    flexDirection: 'row',
    marginLeft: 25,
    marginRight: 15,
  },
  cover: {
    width: ms(25),
    height: ms(25),
    resizeMode: 'cover',
  },
  Poppins: {},
});
