import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback, Share} from 'react-native';
import freemoni from '../../../assets/logomenufreemoni.png';
import freemoniLogo from '../../../assets/logo-home-2.png';
import Ionicon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import {
  DrawerItemList,
  DrawerItem,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import Button from '../Button';
// import useGetUserRole from "../../hooks/useGetUserRole";
import Ionicons from 'react-native-vector-icons/Ionicons';
import THEME from '../../utils/constants/theme';

import {auth} from '../../../Firebase';
import {signOut} from 'firebase/auth';
const CustomDrawerContent = props => {
  //   const role = useGetUserRole();
  const handleLink = url => {
    //! Linking.openURL(url);
  };
  const onShareApp = () => {
    Share.share({
      message:
        'https://play.google.com/store/apps/details?id=com.freemoni.clubcronicaapp&hl=es_AR&gl=US',
    })
      .then(result => console.log(result))
      .catch(error => console.log(error));
  };

  const closeSession = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      throw error;
    }
  };

  return (
    /*  <DrawerContentScrollView {...props} contentContainerStyle={{paddingTop: 0}}> */
    <View style={styles.container}>
      <View>
        <Image source={freemoni} style={styles.img} />
        {/*  <DrawerItemList {...props} /> */}
        {/*   <DrawerItem
            labelStyle={{
              fontSize: 16,
              color: THEME.colors.white,
            }}
            label="Términos y condiciones"
            icon={({focused, size}) => (
              <Ionicon
                name="newspaper-outline"
                size={28}
                color={THEME.colors.white}
              />
            )}
            onPress={() => handleLink('https://freemoni.com/legales/')}
          /> */}
        {/*  <DrawerItem
            labelStyle={{
              fontSize: 16,
              color: THEME.colors.white,
            }}
            label="Ayuda"
            icon={({focused, size}) => (
              <Ionicon name="help" size={28} color={THEME.colors.white} />
            )}
            onPress={() => handleLink('https://freemoni.com/ayuda/')}
          /> */}
      </View>
      <View>
        <View style={styles.footerItemContainer}>
          <TouchableWithoutFeedback onPress={onShareApp}>
            <View style={styles.shareButton}>
              <Ionicons
                name="share-social-outline"
                size={28}
                color={THEME.colors.white}
              />
              <Text style={styles.shareButtonText}>Compartir App</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View style={[styles.footerItemContainer, styles.powerBy]}>
          <Text style={styles.footerItem}>Powered by</Text>
          <Image source={freemoniLogo} />
        </View>
        <View style={styles.footerItemContainer}>
          <Text style={styles.footerItem}>Version 1.2.9</Text>
        </View>
        <View style={styles.footerItemContainer}>
          <Button
            text="Cerrar sesión"
            color={role === 'classic' ? 'red' : 'blackCronica'}
            onPress={() => closeSession()}
          />
          <TouchableWithoutFeedback onPress={closeSession}>
            <View style={styles.closeSesionContainer}>
              <Text style={styles.closeSesionText}>Cerrar sesión</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
    /*  </DrawerContentScrollView> */
  );
};

/* 




*/

export default CustomDrawerContent;
