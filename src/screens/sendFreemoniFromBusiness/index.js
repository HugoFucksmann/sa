import { View, Text, TextInput, Alert } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import Button from "../../components/Button";
import useAppContext from "../../context/useAppContext";
import { checkIfUserExist, validateDestinatary } from "../../services";
import Loader from "../../components/Loader";
import PopUp from "../../components/PopUp";
import AlertStatus from "../../components/Alert/AlertStatus";
import ERRORS from "../../utils/constants/errors";

const SendFreemoniFromBusiness = ({ navigation, route }) => {
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [status, setStatus] = useState(null);
  const [statusTitle, setStatusTitle] = useState(null);
  const { id, details } = route.params;
  const { dataUser } = useAppContext();
  const [text, setText] = useState("");
  console.log(id, details);
  const onChangeText = (text) => {
    setText(text);
  };
  const onSubmit = async () => {
    try {
      setLoading(true);
      const data = await checkIfUserExist({ freemoniCode: text });
      console.log("data", data);
      const validation = await validateDestinatary(
        details.accountId,
        dataUser.userId,
        data.userData.id
      );

      if (validation?.length > 0) {
        navigation.navigate("EnterAmount", {
          validation,
          dataUser,
          account: {
            availableBalance: details.balance,
            accountId: details.accountId,
          },
        });
      }
      setLoading(false);
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

  const onValidateDestinatary = async (item) => {
    try {
      const validation = await validateDestinatary(
        item.accountId,
        dataUser.userId,
        data.userData.id
      );
      if (validation?.length > 0) {
        navigation.navigate("EnterAmount", {
          validation,
          dataUser,
          account: item,
        });
      }
    } catch (error) {
      console.log(error);
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

export default SendFreemoniFromBusiness;
