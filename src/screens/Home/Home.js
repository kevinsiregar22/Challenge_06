import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {check, PERMISSIONS, RESULTS, request} from 'react-native-permissions';

import Geolocation from '@react-native-community/geolocation';
import MapView, {PROVIDER_GOOGLE, Polyline} from 'react-native-maps';

Geolocation.setRNConfiguration({
  enableHighAccuracy: false,
  timeout: 5000,
  maximumAge: 10000,
});

export default function Home() {
  const [position, setPosition] = useState({});
  const requestPermissions = React.useCallback(async () => {
    const result = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    console.log(result);
    switch (result) {
      case RESULTS.UNAVAILABLE:
        console.log(
          'This feature is not available (on this device / in this context)',
        );
        break;
      case RESULTS.DENIED:
        const resRequest = await request(
          PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        );
        console.log(resRequest);
        console.log(
          'The permission has not been requested / is denied but requestable',
        );
        break;
      case RESULTS.LIMITED:
        console.log('The permission is limited: some actions are possible');
        break;
      case RESULTS.GRANTED:
        console.log('The permission is granted');
        break;
      case RESULTS.BLOCKED:
        console.log('The permission is denied and not requestable anymore');
        break;
    }
  }, []);

  useEffect(() => {
    requestPermissions();
  });

  Geolocation.getCurrentPosition(info => {
    console.log(info);
    setPosition({
      lat: info.coords.latitude,
      long: info.coords.longitude,
    });
  });

  return (
    <View>
      <Text style={{justifyContent: 'center', textAlign: 'center'}}>Maps</Text>
      <MapView
        initialRegion={{
          latitude: position.lat ? position.lat : 3.595196,
          longitude: position.long ?? 98.672226,
          latitudeDelta: 0.0921,
          longitudeDelta: 0.042,
        }}
        style={{width: 400, height: 400}}
        provider={PROVIDER_GOOGLE}
      />
      {/* <MapView style={{width: 400, height: 400}}>
        <Polyline
          coordinates={[
            {latitude: 3.595196, longitude: 98.672226},
            {latitude: 3.595096, longitude: 98.671026},
            {latitude: 3.594596, longitude: 98.671226},
            {latitude: 3.594196, longitude: 98.671116},
            {latitude: 3.593196, longitude: 98.670126},
            {latitude: 3.595196, longitude: 98.670226},
          ]}
          strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
          strokeColors={[
            '#7F0000',
            '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
            '#B24112',
            '#E5845C',
            '#238C23',
            '#7F0000',
          ]}
          strokeWidth={6}
        />
      </MapView> */}
    </View>
  );
}
