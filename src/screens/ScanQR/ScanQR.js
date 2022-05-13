import {View, Alert} from 'react-native';
import React from 'react';
import {CameraScreen, CameraType} from 'react-native-camera-kit';
import {useIsFocused} from '@react-navigation/native';
// import {ms} from 'react-native-size-matters';

const ScanQR = props => {
  const isFocussed = useIsFocused();
  // const onReadCode = e => {
  //   Alert.alert(e.event.nativeEvent.codeStringValue);
  // };

  return isFocussed ? (
    <CameraScreen
      // Barcode props
      cameraType={CameraType.Back}
      scanBarcode={true}
      onReadCode={event => Alert.alert(event.nativeEvent.codeStringValue)} // optional
      showFrame={true} // (default false) optional, show frame with transparent layer (qr code or barcode will be read on this area ONLY), start animation for scanner,that stoped when find any code. Frame always at center of the screen
      laserColor="aqua" // (default red) optional, color of laser in scanner frame
      frameColor="white" // (default white) optional, color of border of scanner frame
      torchMode="on"
      surfaceColor="red"
    />
  ) : null;
};

export default ScanQR;

// export const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     flex: 1,
//   },
//   button: {
//     borderRadius: ms(8),
//     marginTop: ms(500),
//     backgroundColor: 'aqua',
//     padding: 10,
//     width: 200,
//     left: 100,
//   },
//   buttonScanText: {
//     fontWeight: 'bold',
//     color: 'white',
//     textAlign: 'center',
//   },
// });
// const cameraScan = props => {
//   const isFocussed = useIsFocused();
//   const onReadCode = (data) => {
//     Alert.alert(data.nativeEvent.codeStringValue)
//   }
// };
