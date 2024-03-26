import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar, SafeAreaView} from 'react-native';
import THEME, {
  APP_THEME_CLASSIC,
  APP_THEME_BLUE,
} from '../utils/constants/theme';
import MyDrawer from './Drawer';
import {AuthStack} from './Stacks';
import useAppContext from '../context/useAppContext';
import VerificationStack from './Stacks/VerificationStack';
// import useGetUserRole from "../hooks/useGetUserRole";

const Navigator = () => {
  const [isLogged, setIsLogged] = useState(false);
  //   const role = useGetUserRole();
  const {user, register, dataUser, getUserData} = useAppContext();
  // if (!user || !register) {

  useEffect(() => {
    if (user) {
      getUserData();
    }
  }, [user]);

  if (!user || !register) {
    return (
      <>
        <StatusBar backgroundColor={THEME.colors.black} />
        <NavigationContainer theme={APP_THEME_BLUE}>
          <AuthStack />
        </NavigationContainer>
      </>
    );
  }
  console.log('useeeer', user);
  if (!user.emailVerified) {
    return (
      <>
        <StatusBar backgroundColor={THEME.colors.black} />
        <NavigationContainer theme={APP_THEME_BLUE}>
          <VerificationStack />
        </NavigationContainer>
      </>
    );
  }
  return (
    <>
      {/* <StatusBar backgroundColor={THEME.colors.black} /> */}
      <NavigationContainer theme={APP_THEME_CLASSIC}>
        <MyDrawer />
      </NavigationContainer>
    </>
  );
};

export default Navigator;
