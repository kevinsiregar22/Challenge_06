import React, {useEffect} from 'react';
import {View, Button, Text, TouchableOpacity} from 'react-native';
import analytics from '@react-native-firebase/analytics';
import crashlytics from '@react-native-firebase/crashlytics';

export default function Analic01() {
  useEffect(() => {
    crashlytics().log('App mounted.');
  }, []);
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          crashlytics().log('klik me');
          crashlytics().crash();
        }}>
        <Text>Klik to crash</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={async () => {
          await analytics().logEvent('tokeen', {
            tokeenss: 'gettoken',
          });
          // console.log(await messaging().getToken());
        }}>
        <Text>gettokenn</Text>
      </TouchableOpacity>

      <Button
        title="Add To Ring"
        onPress={async () =>
          await analytics().logEvent('basket', {
            id: 3745092,
            item: 'mens grey t-shirt',
            description: ['round neck', 'long sleeved'],
            size: 'L',
          })
        }
      />
    </View>
  );
}
