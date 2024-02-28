import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import RegisterForm from "../../components/Account/RegisterForm";
import logo from "../../../assets/cropped-logo-blanco.png";
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Register() {
  return (
    <SafeAreaView edges={['top', 'bottom']}>
      <KeyboardAwareScrollView>
        <View style={styles.containerScreen}>
          <View style={styles.imageContainer}>
            <Image source={logo} style={[styles.image, { resizeMode: 'contain' }]} />
          </View>
          <RegisterForm />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
