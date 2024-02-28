import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import Loading from '../Loading';
import {useForm} from 'react-hook-form';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import CustomInput from '../CustomInput';
import {EMAIL_REGEX} from '../../utils/constants/regex';
import {
  createUserSocialAuthFreemoniDb,
  getAccountData,
  getDataUser,
} from '../../services';
import useAppContext from '../../context/useAppContext';

import {LoginManager, AccessToken} from 'react-native-fbsdk-next';
import AlertMaintenance from '../Alert/AlertMaintenance';
import PopUp from '../PopUp';

import RecoverPassword from '../../screens/recover-password';
import {signInWithEmailAndPass} from '../../../Firebase';

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [alertMaintenance, setAlertMaintenance] = useState(false);
  const [loading, setLoading] = useState(false);
  const {setRegister} = useAppContext();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  GoogleSignin.configure({
    webClientId:
      '602566447454-poagc2ico1080hn8kio5hikpj6dn9dnb.apps.googleusercontent.com',
    offlineAccess: false,
  });

  const signInWithGoogleHandle = async () => {
    try {
      setLoading(true);
      setRegister(false);
      const {idToken} = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      console.log('googleCredential ', googleCredential);
      const user_sign_in = await auth().signInWithCredential(googleCredential);
      console.log('user_sign_in ', user_sign_in);
      if (user_sign_in.additionalUserInfo.isNewUser) {
        const dataUser = await createUserSocialAuthFreemoniDb(
          user_sign_in.user,
        );
      }
      setLoading(false);
      setRegister(true);
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  const signInWithFacebookHandle = async () => {
    try {
      const result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
      ]);

      // Verificar si el inicio de sesión fue exitoso
      if (result.isCancelled) {
        throw new Error('Inicio de sesión cancelado');
      }

      // Obtener el token de acceso
      const accessTokenData = await AccessToken.getCurrentAccessToken();

      if (!accessTokenData) {
        throw new Error('No se pudo obtener el token de acceso');
      }
      const facebookCredential = auth.FacebookAuthProvider.credential(
        accessTokenData.accessToken,
      );

      await auth().signInWithCredential(facebookCredential);

      setLoading(false);
      setRegister(true);
    } catch (error) {
      console.log('FACEBOOK ERR: ', error);
      setLoading(false);
      throw error;
    }
  };

  const onSubmitLogin = async data => {
    try {
      setLoading(true);
      setRegister(false);
      //  const user = await signInWithEmailAndPass(data.email, data.password);
      const userCredential = await auth().signInWithEmailAndPassword(
        data.email,
        data.password,
      );
      //   const user_sign_in = await auth().signInWithCredential(user);
      console.log('userCredential____ ', userCredential);
      setLoading(false);
      setRegister(true);
    } catch (error) {
      setLoading(false);
      console.error(error);
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
    }
  };

  return (
    <View style={styles.container}>
      <CustomInput
        name="email"
        placeholder="Ingresá tu email..."
        control={control}
        rules={{
          required: 'Email es requerido',
          pattern: {
            value: EMAIL_REGEX,
            message: 'Introduzca un email válido',
          },
        }}
      />
      <CustomInput
        name="password"
        placeholder="Ingresá tu contraseña..."
        control={control}
        rules={{
          required: 'Contraseña es requerido',
          minLength: {value: 8, message: 'Mínimo 8 caracteres'},
        }}
        secureTextEntry
        showPassword={showPassword}
        setShowPassword={setShowPassword}
        passwordIcon
      />
      <Button
        title="Iniciar Sesión"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        onPress={handleSubmit(onSubmitLogin)}
      />
      <PopUp visible={alertMaintenance}>
        <AlertMaintenance setAlertMaintenance={setAlertMaintenance} />
      </PopUp>
      <Button
        title="Iniciar Sesión con Google"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btnGoogle}
        onPress={signInWithGoogleHandle}
        icon={
          <Icon
            name="google"
            type="material-community"
            marginRight={10}
            style={{width: 20, height: 20}}
          />
        }
      />
      <Button
        title="Iniciar Sesión con Facebook"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btnFb}
        onPress={signInWithFacebookHandle}
        icon={
          <Icon name="facebook" marginRight={10} size={20} color="#385599" />
        }
      />
      <Loading isVisible={loading} text="Iniciando Sesión..." />
    </View>
  );
}

function LoginSeparator() {
  return (
    <View style={styles.loginSeparator}>
      <View style={styles.loginSeparatorLine} />
      <View>
        <Text style={styles.loginSeparatorText}> O Inicia sesion con </Text>
      </View>
      <View style={styles.loginSeparatorLine} />
    </View>
  );
}
