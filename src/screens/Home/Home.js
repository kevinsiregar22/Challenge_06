import {View, Text, StatusBar} from 'react-native';
import React, {useEffect, useState} from 'react';
import {check, PERMISSIONS, RESULTS, request} from 'react-native-permissions';

import Geolocation from '@react-native-community/geolocation';
import MapView, {
  PROVIDER_GOOGLE,
  Polyline,
  Marker,
  Heatmap,
  Polygon,
} from 'react-native-maps';
import {LocationMarker} from '../../components/Maps/LocationMarker';
import CustomMarker from '../../components/Maps/CostumMarkers';

// import analytics from '@react-native-firebase/analytics';

Geolocation.setRNConfiguration({
  enableHighAccuracy: false,
  timeout: 5000,
  maximumAge: 10000,
});

export default function Home({navigation}) {
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
      {/* <Text style={{justifyContent: 'center', textAlign: 'center'}}>Maps</Text> */}
      <MapView
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: position.latitude ?? 3.587665,
          longitude: position.longitude ?? 98.67092,
          latitudeDelta: 0.0522,
          longitudeDelta: 0.0121,
        }}
        style={{
          width: 400,
          height: 400,
        }}>
        <Heatmap points={LocationMarker} />
        {LocationMarker.map(markers => (
          <Marker
            coordinate={{
              latitude: markers.latitude,
              longitude: markers.longitude,
            }}
            pinColor={markers.markerImage} // any color
            title={markers.title}
            description={markers.note}>
            <CustomMarker item={markers} />
          </Marker>
        ))}
        {LocationMarker.map(Polyline => (
          <Polygon
            coordinates={LocationMarker}
            strokeWidth={5}
            strokeColor="#379999"
            // strokeColor={Poly.colorPick}
            // fillColor={7}
            // lineCap="round"
          />
        ))}
      </MapView>
    </View>
  );
}
