import React, {useState} from 'react';
import {Alert, StyleSheet, View, TextInput, Text, Image} from 'react-native';
import {Button, Icon, Input} from 'react-native-elements';
import styles from './styles';
// import { sendEmailResetPassword } from "../../utils/actions";
// import { validateEmail } from "../../utils/helpers";
import logo from '../../../assets/cropped-logo-blanco.png';
// import Loading from "../../components/Loading";
import PopUp from '../../components/PopUp';
import AlertMaintenance from '../../components/Alert/AlertMaintenance';
import auth from '@react-native-firebase/auth';
export default function RecoverPassword({navigation}) {
  const [alertMaintenance, setAlertMaintenance] = useState(false);
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState(null);
  const [loading, setLoading] = useState(false);

  const recoverPassword = () => {
    if (email.trim() === '') {
      Alert.alert(
        'Introduzca un usuario',
        'Por favor, introduzca un usuario válido para continuar el proceso de recupero de contraseña.',
        [{text: 'Aceptar', onPress: () => console.log('OK Pressed')}],
      );
      return;
    }
    auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        Alert.alert(
          'Confirmación',
          'Se ha enviado un email con las instrucciones necesarias para recuperar la contraseña.',
          [{text: 'Aceptar', onPress: () => console.log('OK Pressed')}],
        );
      })
      .catch(() => {
        Alert.alert(
          'Ocurrió un error',
          'Verifique que el usuario introducido es correcto.',
          [{text: 'Aceptar', onPress: () => console.log('OK Pressed')}],
        );
      });
  };

  // const onSubmit = async () => {
  //   if (!validateData()) {
  //     return;
  //   }

  //   setLoading(true);
  //   const result = await sendEmailResetPassword(email);
  //   setLoading(false);

  //   if (!result.statusResponse) {
  //     Alert.alert("Error", "Este correo no está relacionado a ningún usuario.");
  //     return;
  //   }

  //   Alert.alert(
  //     "Confirmación",
  //     "Se le ha enviado un email con las instrucciones para cambiar la contraseña."
  //   );
  //   navigation.navigate("Login");
  // };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={logo} style={[styles.image, {resizeMode: 'contain'}]} />
      </View>
      <View style={styles.inputComponent}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Ingresa tu email..."
            onChange={e => setEmail(e.nativeEvent.text)}
            keyboardType="email-address"
            value={email}
          />
        </View>
        <View style={styles.errorContainer}>
          <Text style={styles.textError}>{errorEmail}</Text>
        </View>
      </View>
      <Button
        title="Recuperar Contraseña"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        onPress={recoverPassword}
      />
      <PopUp visible={alertMaintenance}>
        <AlertMaintenance setAlertMaintenance={setAlertMaintenance} />
      </PopUp>
      <View style={styles.accountExistContainer}>
        <Text style={styles.accountExistText}>
          ¿Ya tienes cuenta?{' '}
          <Text
            onPress={() => navigation.navigate('Login')}
            style={styles.accountExistTextHighlighted}>
            Iniciar sesión
          </Text>
        </Text>
      </View>
    </View>
  );
}
