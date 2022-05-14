import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from '../screens/Profile/Profile';
import Home from '../screens/Home/Home';
import ScanQR from '../screens/ScanQR/ScanQR';

//icon bottom tab
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';

const Tab = createBottomTabNavigator();

export default function BottomTab({navigation}) {
  // useEffect(() => {
  //   const unsubscribe = navigation.addListener('tabPress', e => {

  //     // Prevent default behavior
  //     try {
  //       await analytics().logEvent('Home', {
  //         name: 'Home',
  //       });
  //     } catch (error) {

  //     }
  //     e.preventDefault();

  //     alert('Default behavior prevented');
  //     // Do something manually
  //     // ...
  //   });

  //   return unsubscribe;
  // }, [navigation]);

  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => <Feather name="home" color="black" size={25} />,
        }}
      />

      <Tab.Screen
        name="ScanQR"
        component={ScanQR}
        options={{
          tabBarIcon: () => <AntDesign name="qrcode" color="black" size={25} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => <Octicons name="person" color="black" size={25} />,
        }}
      />
    </Tab.Navigator>
  );
}
