import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import React from "react";
import logo from "../../../assets/cropped-logo-blanco.png";
import styles from "./styles";
import useAppContext from "../../context/useAppContext";
import auth from "@react-native-firebase/auth";
const VerificationScreen = () => {
  const { user } = useAppContext();

  const closeSession = () => {
    auth()
      .signOut()
      .then(() => console.log("User signed out!"));
  };

  const resendEmailVerification = () => {
    auth()
      .currentUser.sendEmailVerification()
      .then(() => {
        Alert.alert(
          "Email reenviado",
          "Se ha reenviado el mail de verificación. Si no aparece en su casilla de correos, por favor verifique en spam.",
          [{ text: "Aceptar", onPress: () => console.log("OK Pressed") }]
        );
      });
  };

  const reloadFirebaseUserData = () => {
    auth()
      .signOut()
      .then(() => console.log("User signed out!"));
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View style={styles.imageContainer}>
          <Image
            source={logo}
            style={[styles.image, { resizeMode: "contain" }]}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.desc}>Hola {user?.displayName},</Text>
          <Text style={styles.desc}>
            Para comenzar a usar Freemoni debes verificar tu correo electrónico.
          </Text>
          <Text style={styles.desc}>¡Es simple!</Text>
          <Text style={styles.desc}>
            Solo tienes que hacer click en el enlace que encontrarás en el
            correo que enviamos a {user?.email} y luego en el siguiente botón
            para iniciar sesión:
          </Text>
          <TouchableOpacity
            onPress={reloadFirebaseUserData}
            activeOpacity={0.8}
          >
            <View style={styles.buttonStartContainer}>
              <Text style={styles.buttonStart}>Iniciar sesión</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.notReceivedContainer}>
            <Text style={styles.descNotReceived}>¿No lo has recibido?</Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={resendEmailVerification}
            >
              <View style={styles.buttonNotReceivedContainer}>
                <Text style={styles.buttonNotReceived}>Reenviar correo</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ margin: 10 }}>
        <Text style={styles.descRegister}>
          Si has escrito mal tu correo, regístrate nuevamente.
        </Text>
        <TouchableOpacity activeOpacity={0.8} onPress={closeSession}>
          <View style={styles.buttonRegisterContainer}>
            <Text style={styles.buttonRegister}>Regístrate nuevamente</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VerificationScreen;
