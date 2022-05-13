// import crashlytics from '@react-native-firebase/crashlytics';
import analytics from '@react-native-firebase/analytics';

export const LoginAccount = async () => {
  try {
    await analytics().LogScreenView('LoginAccount', {
      screen_name: 'Email/Password',
    });
  } catch (error) {
    console.log('error', error);
  }
};

// export const LoginGoogle = async () => {
//   try {
//     await analytics().LogScreenView('LoginGoogle', {
//       screen_name: 'Email/Password',
//     });
//   } catch (error) {
//     console.log('error', error);
//   }
// };
