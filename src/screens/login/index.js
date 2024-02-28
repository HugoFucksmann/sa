import React from "react";
import { Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import LoginForm from "../../components/Account/LoginForm";
import logo from "../../../assets/cropped-logo-blanco.png";
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  return (
    <SafeAreaView edges={['top', 'bottom']}>
      <KeyboardAwareScrollView>
        <View style={styles.containerScreen}>
          <View style={styles.imageContainer}>
            <Image source={logo} style={[styles.image, { resizeMode: 'contain' }]} />
          </View>
          <View style={styles.container}>
            <LoginForm />
            <CreateAccount />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

export function RecoverPassword() {
  const navigation = useNavigation();

  return (
    <View style={styles.forgotPasswordContainer}>
      <Text
        style={styles.forgotPassword}
        onPress={() => navigation.navigate("Recover-password")}
      >
        ¿Olvidaste tu contraseña?
      </Text>
    </View>
  );
}

function CreateAccount(props) {
  const navigation = useNavigation();

  return (
    <View style={[styles.redirectContainers, { paddingBottom: 20 }]}>
      <Text
        style={styles.register}
        onPress={() => navigation.navigate("Signup")}
      >
        ¿Aún no tienes una cuenta?{" "}
        <Text style={styles.btnRegister}>Regístrate</Text>
      </Text>
    </View>
  );
}
