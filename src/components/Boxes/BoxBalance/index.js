import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import React from "react";
import styles from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import THEME from "../../../utils/constants/theme";
import freemonipesos from "../../../../assets/freemoni-pesos-trimmed.png";
import parseAmounts from "../../../utils/functions/parseAmounts";
import useAppContext from "../../../context/useAppContext";
const BoxBalance = ({ balance, navigation, send, receive, transactions, partnerShops }) => {
  const { dataUser } = useAppContext();

  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Hola, {dataUser?.displayName}</Text>
        <Text style={[styles.accountBalanceTitle, {marginTop: 20}]}>Saldo Freemoni:</Text>
      </View>
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          marginStart: 20
        }}
      >
        <Image source={freemonipesos} style={{ width: 25, height: 25, resizeMode: 'contain', tintColor: 'white' }} />
        <Text style={styles.accountBalance}>
          {balance && parseAmounts(balance)}
        </Text>
        <View style={styles.eye}>
          <Ionicons name="eye-outline" size={28} color={THEME.colors.blue} />
        </View>
      </View>
      <View style={styles.containerButtons}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate(receive)}>
          <View style={{ alignItems: "center" }}>
            <View style={styles.containerButton}>
              <Ionicons name="qr-code-outline" size={28} color="#fff" />
            </View>
            <Text style={styles.textButtons}>Recibir</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => navigation.navigate(send)}>
          <View style={{ alignItems: "center" }}>
            <View style={styles.containerButtonAlt}>
              <Ionicons name="arrow-up" size={28} color={THEME.colors.lightblue} />
            </View>
            <Text style={styles.textButtons}>Enviar</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => navigation.navigate(transactions)}>
          <View style={{ alignItems: "center" }}>
            <View style={styles.containerButton}>
              <Ionicons name="swap-horizontal" size={28} color="#fff" />
            </View>
            <Text style={styles.textButtons}>Historial</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => navigation.navigate(partnerShops, { balance })}>
          <View style={{ alignItems: "center" }}>
            <View style={styles.containerButtonAlt}>
              <Ionicons name="location-outline" size={28} color={THEME.colors.lightblue} />
            </View>
            <Text style={styles.textButtons}>Negocios</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default BoxBalance;
