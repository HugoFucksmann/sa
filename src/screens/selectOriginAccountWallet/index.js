import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import {
  getAccountsByUser,
  validateDestinatary,
} from "../../services";
import useAppContext from "../../context/useAppContext";
import { useQuery } from "react-query";
import styles from "./styles";
import Button from "../../components/Button";
import FooterFixed from "../../components/FooterFixed";
import PopUp from "../../components/PopUp";
import AlertStatus from "../../components/Alert/AlertStatus";
const SelectOriginAccountWallet = ({ navigation, route }) => {
  const { data } = route.params;
  const { dataUser } = useAppContext();
  const [visible, setVisible] = useState(false);
  const [status, setStatus] = useState(null);
  const [statusTitle, setStatusTitle] = useState(null);
  const { data: accountsByUser, refetch: refetchAccountsByUser } = useQuery(
    ["accountsByUser", data.userData.id],
    () => getAccountsByUser(user, dataUser.userId, data.userData.id),
    { enabled: !!dataUser }
  );

  const onValidateDestinatary = async (item) => {
    try {
      const validation = await validateDestinatary(
        user,
        item.accountId,
        dataUser.userId,
        data.userData.id
      );
      if (validation?.length > 0) {
        navigation.navigate("SelectDestinatary", {
          userToId: data.userData.id,
          validation,
          dataUser,
          account: item,
        });
      }
      if (validation?.length === 0) {
        setStatus("error");
        setStatusTitle("¡No se encontraron destinatarios!");
        setVisible(true);
        return;
      }
    } catch (error) {
      setStatus("error");
      setStatusTitle("¡Ocurrió un error!");
      setVisible(true);
      return;
    }
  };

  const onClosePopUp = () => {
    setStatus(null);
    setStatusTitle(null);
    setVisible(false);
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          {accountsByUser?.length === 0 && (
            <Text style={styles.title}>
              No hay cuentas habilitadas para enviar Freemoni
            </Text>
          )}

          {accountsByUser?.length > 0 && (
            <Text style={styles.title}>Seleccioná la cuenta de origen</Text>
          )}

          <View style={styles.containerAuthAccounts}>
            {accountsByUser?.length > 0 &&
              accountsByUser.map((item, idx) => (
                <TouchableWithoutFeedback
                  key={idx}
                  onPress={() => onValidateDestinatary(item)}
                >
                  <View style={styles.authAccountsContainer}>
                    <View style={styles.authAccountsImage}>
                      <Image
                        source={
                          !item.fmTypeData?.shopPhoto
                            ? freemonicircle
                            : { uri: item.fmTypeData.shopPhoto }
                        }
                        style={{ width: 30, height: 30, borderRadius: 50 }}
                      />
                    </View>
                    <View style={styles.authAccountsName}>
                      <Text style={{ textAlign: "left" }}>
                        {item.fmTypeData.shopName}
                      </Text>
                    </View>
                    <View style={styles.authAccountsBalance}>
                      <Text style={{ textAlign: "right" }}>
                        {item.availableBalance}
                      </Text>
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              ))}
          </View>
        </View>
      </ScrollView>
      <FooterFixed>
        <View style={{ width: "90%", alignSelf: "center" }}>
          <Button
            text="Cancelar"
            onPress={() => navigation.navigate("Inicio")}
          />
        </View>
      </FooterFixed>
      <PopUp visible={visible}>
        <AlertStatus
          statusTitle={statusTitle}
          status={status}
          statusTextButton="Aceptar"
          onPress={onClosePopUp}
        />
      </PopUp>
    </View>
  );
};

export default SelectOriginAccountWallet;
