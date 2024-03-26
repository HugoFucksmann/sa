import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import LoginForm from '../../components/Account/LoginForm';
import logo from '../../../assets/cropped-logo-blanco.png';
import styles from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function Login() {
  return (
    <SafeAreaView edges={['top', 'bottom']}>
      <KeyboardAwareScrollView>
        <View style={styles.containerScreen}>
          <View style={styles.imageContainer}>
            <Image
              source={logo}
              style={[styles.image, {resizeMode: 'contain'}]}
            />
          </View>
          <View style={styles.container}>
            <LoginForm />
            <CreateAccount />
            <RecoverPassword />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

export function RecoverPassword() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Recover-password')}
      activeOpacity={0.8}>
      <View style={[styles.redirectContainers, {paddingVertical: 5}]}>
        <Text style={styles.register}>¿Olvidaste tu contraseña?</Text>
      </View>
    </TouchableOpacity>
  );
}

function CreateAccount(props) {
  const navigation = useNavigation();

  return (
    <View style={[styles.redirectContainers, {paddingBottom: 20}]}>
      <Text
        style={styles.register}
        onPress={() => navigation.navigate('Signup')}>
        ¿Aún no tienes una cuenta?{' '}
        <Text style={styles.btnRegister}>Regístrate</Text>
      </Text>
    </View>
  );
}
