import {
  View,
  Text,
  FlatList,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import freemonicircle from "../../../assets/freemoni-circle.png";
import styles from "./styles";
import Entypo from "react-native-vector-icons/Entypo";
import PopUp from "../../components/PopUp";
import AlertStatus from "../../components/Alert/AlertStatus";

const RenderItem = ({ item, onRedirectEnterAmount }) => (
  <TouchableWithoutFeedback onPress={() => onRedirectEnterAmount(item)}>
    <View style={styles.renderItemContainer}>
      <View
        style={{
          alignItems: "center",
          position: "relative",
        }}
      >
        <Image
          source={item.imgUrl ? { uri: item.imgUrl } : freemonicircle}
          style={styles.image}
        />
        {!item?.enabled && (
          <Entypo
            name="circle-with-cross"
            size={30}
            color="red"
            style={{ position: "absolute", bottom: 10, right: 20 }}
          />
        )}
      </View>
      <Text style={styles.textItem}>{item.displayName}</Text>
    </View>
  </TouchableWithoutFeedback>
);

const SelectDestinatary = ({ route, navigation }) => {
  const { validation, dataUser, account, userToId } = route.params;
  const [visible, setVisible] = useState(false);
  const [status, setStatus] = useState(null);
  const [statusTitle, setStatusTitle] = useState(null);
  const [statusParagraph, setStatusParagraph] = useState(null);
  const onRedirectEnterAmount = (destinatary) => {
    if (!destinatary.enabled) {
      setStatus("error");
      setStatusTitle("Negocio inhabilitado");
      setStatusParagraph(
        "Este negocio se encuentra temporalmente inhabilitado y, por el momento, no puede recibir pagos"
      );
      setVisible(true);
      return;
    }
    navigation.navigate("EnterAmount", {
      userToId,
      dataUser,
      account,
      destinatary,
    });
  };

  const onClosePopUp = () => {
    setStatus(null);
    setStatusTitle(null);
    setStatusParagraph(null);
    setVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enviar tus freemonis a:</Text>
      <View>
        <FlatList
          data={validation}
          renderItem={({ item }) => (
            <RenderItem
              item={item}
              onRedirectEnterAmount={onRedirectEnterAmount}
            />
          )}
          keyExtractor={(item) => item.accountId}
          horizontal={true}
        />
      </View>
      <PopUp visible={visible}>
        <AlertStatus
          statusTitle={statusTitle}
          statusParagraph={statusParagraph}
          status={status}
          statusTextButton="Aceptar"
          onPress={onClosePopUp}
        />
      </PopUp>
    </View>
  );
};

export default SelectDestinatary;
