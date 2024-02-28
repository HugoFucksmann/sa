import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import React from "react";
import styles from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import freemonipesos from "../../../../assets/freemoni-pesos-trimmed.png";
import THEME from "../../../utils/constants/theme";
import parseAmounts from "../../../utils/functions/parseAmounts";
const BoxTransactions = ({ dataWallet, navigation }) => {
  return (
    <View>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Mi billetera</Text>
      </View>
      <View>
        <View>
          {dataWallet?.accounts?.length > 0 &&
            dataWallet.accounts.map((item, idx) => (
              <TouchableWithoutFeedback
                onPress={() =>
                  navigation.navigate("Ordenes", {
                    id: item.accountId,
                    details: {
                      photo: item.fmTypeData?.shopPhoto,
                      shopId: item.fmTypeData?.shopId,
                      totalBalance: item.totalBalance,
                      availableBalance: item.availableBalance,
                    },
                  })
                }
                key={idx}
              >
                <View style={styles.container} key={idx}>
                  <View
                    style={{
                      width: "90%",
                      flexDirection: "row",
                      alignItems: "center",
                      paddingVertical: 8,
                    }}
                  >
                    <View style={styles.containerWalletItemImg}>
                      <Image
                        source={{ uri: item.fmTypeData?.shopPhoto }}
                        style={{ width: 40, height: 40,
                          resizeMode: 'contain', borderRadius: 5 }}
                      />
                    </View>
                    <View style={styles.containerWalletItemTitle}>
                      <Text style={styles.containerWalletItemTitleText}>
                        {item.fmTypeData?.shopName}
                      </Text>
                    </View>
                    <View style={styles.containerWalletItemAccount}>
                      <Image
                        source={freemonipesos}
                        style={{ resizeMode: 'contain', height: 15, width: 15 }}
                      />
                      <Text style={styles.containerWalletItemAccountText}>
                        {parseAmounts(item.totalBalance)}
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            ))}
        </View>
      </View>
    </View>
  );
};

export default BoxTransactions;
