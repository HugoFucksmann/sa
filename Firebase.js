import {initializeApp} from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  getReactNativePersistence,
  initializeAuth,
  browserLocalPersistence,
} from 'firebase/auth';

import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
const firebaseConfig = {
  apiKey: 'AIzaSyCAESV4cn1RJqyDUGxyZtdeAWGud2KaOio',
  authDomain: 'freemoni-b03fc.firebaseapp.com',
  databaseURL: 'https://freemoni-b03fc.firebaseio.com',
  projectId: 'freemoni-b03fc',
  storageBucket: 'freemoni-b03fc.appspot.com',
  messagingSenderId: '602566447454',
  appId: '1:602566447454:android:9273fa849ace0a89',
};

export const app = initializeApp(firebaseConfig);
//export const auth = getAuth(app);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
  // No popupRedirectResolver defined
});

export const signInWithEmailAndPass = async (email, password) => {
  try {
    const user = await signInWithEmailAndPassword(email, password);
    console.log('user___ ', user);
    return user;
  } catch (error) {
    throw error;
  }
};
