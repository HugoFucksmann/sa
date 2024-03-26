import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import useAppContext from "../../context/useAppContext";
import { useQuery } from "react-query";
import { getAuthAccounts, validateDestinatary } from "../../services";
import styles from "./styles";
import freemonicircle from "../../../assets/freemoni-circle.png";
import FooterFixed from "../../components/FooterFixed";
import Button from "../../components/Button";
import parseAmounts from "../../utils/functions/parseAmounts";
import freemonipesos from "../../../assets/freemoni-pesos.png";
const SelectOriginAccount = ({ route, navigation }) => {
  const { data } = route.params;
  const { dataUser } = useAppContext();
  const { data: authAccounts, refetch: refetchAuthAccounts } = useQuery(
    ["authAccounts", dataUser],
    () => getAuthAccounts(dataUser.userId),
    { enabled: !!dataUser }
  );
  
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
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Seleccioná la cuenta de origen</Text>
          <View style={styles.containerAuthAccounts}>
            {authAccounts?.length > 0 &&
              authAccounts.map((item, idx) => (
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
                        <Image
                          source={freemonipesos}
                          style={{ width: 15, height: 15 }}
                        />{" "}
                        {parseAmounts(item.availableBalance.toFixed(2))}
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
    </View>
  );
};

export default SelectOriginAccount;
