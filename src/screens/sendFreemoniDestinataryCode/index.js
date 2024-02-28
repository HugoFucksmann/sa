import { View, Text, TextInput, Alert } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import Button from "../../components/Button";
import useAppContext from "../../context/useAppContext";
import { checkIfUserExist } from "../../services";
import Loader from "../../components/Loader";
import PopUp from "../../components/PopUp";
import AlertStatus from "../../components/Alert/AlertStatus";
import ERRORS from "../../utils/constants/errors";

const SendFreemoniDestinataryCode = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [status, setStatus] = useState(null);
  const [statusTitle, setStatusTitle] = useState(null);
  const { dataUser } = useAppContext();
  const [text, setText] = useState("");
  const onChangeText = (text) => {
    setText(text);
  };
  const onSubmit = async () => {
    try {
      setLoading(true);
      const data = await checkIfUserExist(user, { freemoniCode: text });
      setLoading(false);
      navigation.navigate("SelectOriginAccount", { data });
    } catch (error) {
      setLoading(false);
      if (error.data?.moreInfo?.errors[0]?.msg in ERRORS) {
        setStatus("error");
        setStatusTitle(ERRORS[error.data.moreInfo.errors[0].msg]);
        setVisible(true);
        return;
      }
      setStatus("error");
      setStatusTitle("¡Ocurrió un error!");
      setVisible(true);
      return;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Ingresá el código Freemoni del destinatario
      </Text>

      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <View style={{ width: "90%" }}>
        <Button text="Continuar" onPress={onSubmit} />
      </View>
      <View style={{ width: "90%", paddingVertical: 10 }}>
        <Button
          text="Escanear QR"
          onPress={() => navigation.navigate("ScanQrSendFreemoni")}
        />
      </View>
      <PopUp visible={visible}>
        <AlertStatus
          statusTitle={statusTitle}
          status={status}
          statusTextButton="Aceptar"
          onPress={() => setVisible(false)}
        />
      </PopUp>
      {loading && <Loader />}
    </View>
  );
};

export default SendFreemoniDestinataryCode;
