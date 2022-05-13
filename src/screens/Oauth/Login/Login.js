import {View, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {ms} from 'react-native-size-matters';
import {Input, Button} from '@rneui/base';
import {colors} from '../../../utils';
import Poppins from '../../../components/Poppins';
import LogoHeader from '../../../components/LogoHeader';
import OauthGoogle from '../OauthGoogle/OauthGoogle';
import analytics from '@react-native-firebase/analytics';
import crashlytics from '@react-native-firebase/crashlytics';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const LoginAccount = async () => {
    try {
      await analytics().logEvent('LoginAccount', {
        name: 'login',
      });
      navigation.navigate('Main');
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    crashlytics().log('App mounted.');
  }, []);

  return (
    <View style={styles.container}>
      <LogoHeader />
      <OauthGoogle />
      <Input
        inputStyle={{fontSize: 18, paddingVertical: 15}}
        inputContainerStyle={{
          borderTopWidth: 2,
          borderBottomWidth: 2,
          borderLeftWidth: 2,
          borderRightWidth: 2,
          borderColor: colors.border.color,
          borderRadius: 10,
        }}
        containerStyle={{paddingTop: 20, marginTop: 20}}
        leftIconContainerStyle={{
          marginRight: 8,
          marginLeft: 10,
        }}
        placeholder="Email"
        leftIcon={{
          type: 'material-icons',
          name: 'email',
          size: 30,
          color: colors.icon.color,
        }}
        onChangeText={text => setEmail(text)}
      />

      <Input
        inputStyle={{
          fontSize: 18,
          paddingVertical: 15,
          alignContent: 'center',
          justifyContent: 'center',
        }}
        inputContainerStyle={{
          borderTopWidth: 1,
          borderBottomWidth: 1,
          borderLeftWidth: 1,
          borderRightWidth: 1,
          borderColor: colors.border.color,
          borderRadius: 10,
        }}
        containerStyle={{
          marginTop: 7,
        }}
        leftIconContainerStyle={{
          marginRight: 8,
          marginLeft: 10,
        }}
        placeholder="Password"
        leftIcon={{
          type: 'font-awesome-5',
          name: 'key',
          size: 30,
          color: colors.icon.color,
        }}
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
      />
      <Button
        onPress={LoginAccount}
        buttonStyle={{
          padding: 15,
          borderRadius: 10,
          backgroundColor: colors.button.background,
        }}
        containerStyle={{
          paddingHorizontal: 10,
          marginTop: 25,
          marginBottom: 10,
        }}
        titleStyle={{
          fontSize: 24,
          letterSpacing: 5,
          alignContent: 'center',
          justifyContent: 'center',
        }}
        title="LOGIN"
      />

      <Poppins size={16}>Don't have an account?</Poppins>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Register');
          crashlytics().log('button clicked');
          crashlytics().crash();
        }}>
        <Poppins type="Bold" size={18}>
          REGISTER
        </Poppins>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundPage,
    flex: 1,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: ms(160),
    height: ms(160),
  },
});
