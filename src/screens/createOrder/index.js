import { View, Text, TextInput, Image, Alert } from "react-native";
import React from "react";
import styles from "./styles";
import { useState } from "react";
import Button from "../../components/Button";
import freemonicircle from "../../../assets/freemoni-circle.png";
import { createOrderSchedule } from "../../services";
import useAppContext from "../../context/useAppContext";
const CreateOrder = ({ route, navigation }) => {

  const { user } = useAppContext();
  const { destinatary, id, balance, accountFromId } = route.params;
  const [text, setText] = useState("");
  const onChangeText = (text) => {
    setText(text);
  };

  const onCreateOrder = async () => {
    if (Number(text) > balance) {
      Alert.alert("Ingrese un monto menor o igual al disponible");
      return;
    }
    try {
      const body = {
        subject: "",
        accountToId: destinatary.accountId,
        accountFromId: '1455',
        amount: text,
      };
      const createOrder = await createOrderSchedule(user, body);
      if (createOrder.state === 1) {
        navigation.navigate("Codigo de pago", {
          subject: "",
          name: destinatary.displayName,
          amount: text,
          orderCode: createOrder.orderCode,
          orderId: createOrder.orderId,
          photo: destinatary.imgUrl,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onCancelOrder = () => {
    navigation.navigate("Inicio");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ingresa el monto a enviar a:</Text>
      <Image
        source={
          destinatary?.photoUrl ? { uri: destinatary.photoUrl } : freemonicircle
        }
        style={{ width: 100, height: 100, borderRadius: 50 }}
      />
      <View style={styles.availableBalanceContainer}>
        <Text style={styles.availableBalance}>
          Disponible: {balance}
        </Text>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        keyboardType="numeric"
        placeholder="Ingresá el monto a transferir"
      />
      <View style={styles.buttonsContainer}>
        <Button text="Cancelar" onPress={onCancelOrder} />
        <Button text="Confirmar" onPress={onCreateOrder} />
      </View>
    </View>
  );
};

export default CreateOrder;
