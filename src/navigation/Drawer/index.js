import React from 'react';
import {Dimensions} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Ionicon from 'react-native-vector-icons/Ionicons';
import CustomDrawerContent from '../../components/DrawerContent';
import THEME from '../../utils/constants/theme';
import {useTheme} from '@react-navigation/native';
import {
  BusinessStack,
  HomeStack,
  ProfileStack,
  TransactionStack,
} from '../Stacks';
import useAppContext from '../../context/useAppContext';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  const {colors} = useTheme();
  const {dataUser} = useAppContext();

  return (
    <Drawer.Navigator
      //useLegacyImplementation={true}
      initialRouteName="Home"
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: THEME.colors.blue,
        drawerActiveTintColor: THEME.colors.white,
        drawerInactiveTintColor: THEME.colors.white,
        drawerInactiveBackgroundColor: THEME.colors.blue,
        drawerStyle: {
          width: Dimensions.get('window').width * 0.78,
          backgroundColor: THEME.colors.blue,
        },
        drawerLabelStyle: {
          fontSize: THEME.fontSize.subheading,
        },
        headerShown: false,
      }}>
      {dataUser?.shopsIOwn?.length > 0 && (
        <Drawer.Screen
          name="My Business"
          component={BusinessStack}
          options={{
            title: 'Mi negocio',
            drawerIcon: ({focused, size}) => (
              <Ionicon name="card" size={28} color={THEME.colors.white} />
            ),
          }}
        />
      )}
      <Drawer.Screen
        name="Home"
        component={HomeStack}
        options={{
          title: 'Mi billetera',
          drawerIcon: ({focused, size}) => (
            <Ionicon
              name="wallet-outline"
              size={28}
              color={THEME.colors.white}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          title: 'Perfil',
          drawerIcon: ({focused, size}) => (
            <Ionicon
              name="person-outline"
              size={28}
              color={THEME.colors.white}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Freemoni"
        component={ProfileStack}
        options={{
          title: 'Recibir Freemoni',
          drawerIcon: ({focused, size}) => (
            <Ionicon name="scan-outline" size={28} color={THEME.colors.white} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
