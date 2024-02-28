import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import React from "react";
import styles from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import THEME from "../../../utils/constants/theme";
import freemonipesos from "../../../../assets/freemoni-pesos.png";
import freemonicircle from "../../../../assets/freemoni-circle.png";
import parseAmounts from "../../../utils/functions/parseAmounts";
const BoxBusiness = ({ dataBusiness, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Mi negocio</Text>
      </View>
      <View>
        {dataBusiness?.accounts?.length > 0 &&
          dataBusiness.accounts.map((item, idx) => (
            <TouchableWithoutFeedback
              onPress={() =>
                navigation.navigate("BusinessDetails", {
                  id: item?.shopId,
                  details: {
                    balance: item?.amount,
                    photo: item?.photoUrl,
                    name: item?.displayName,
                    enabled: item?.enabled,
                  },
                })
              }
              key={idx}
            >
              <View style={styles.containerWalletItem}>
                <View
                  style={{
                    width: "90%",
                    flexDirection: "row",
                    alignItems: "center",
                    paddingVertical: 8,
                    borderBottomColor: THEME.colors.lightgray,
                    borderBottomWidth: 0.5,
                  }}
                >
                  <View style={styles.containerWalletItemImg}>
                    <Image
                      source={
                        !item.photoUrl ? freemonicircle : { uri: item.photoUrl }
                      }
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 50,
                        borderWidth: 1,
                        borderColor: !item?.enabled && THEME.colors.red,
                      }}
                    />
                  </View>
                  <View style={styles.containerWalletItemTitle}>
                    <Text
                      style={[
                        styles.containerWalletItemTitleText,
                        { color: !item?.enabled && THEME.colors.red },
                      ]}
                    >
                      {item.displayName}
                    </Text>
                    <Text
                      style={[
                        styles.containerWalletItemTitleTextEnabled,
                        { color: !item?.enabled && THEME.colors.red },
                      ]}
                    >
                      {item?.enabled
                        ? "Cuenta de negocio"
                        : "Negocio no habilitado"}
                    </Text>
                  </View>
                  <View style={styles.containerWalletItemAccount}>
                    <Text style={styles.containerWalletItemAccountText}>
                      <Image
                        source={freemonipesos}
                        style={{ width: 15, height: 15 }}
                      />
                      {parseAmounts(item.amount)}
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          ))}
      </View>
    </View>
  );
};

export default BoxBusiness;
