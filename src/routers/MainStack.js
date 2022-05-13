import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Oauth/Login/Login';
import OauthGoogle from '../screens/Oauth/OauthGoogle/OauthGoogle';
import OauthFacebook from '../screens/Oauth/OauthFacebook/OauthFacebook';
import Register from '../screens/Oauth/Register/Register';
import BottomTab from './BottomTab';

const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="OauthGoogle" component={OauthGoogle} />
      <Stack.Screen name="OauthFacebook" component={OauthFacebook} />
      <Stack.Screen name="Main" component={BottomTab} />
    </Stack.Navigator>
  );
}
