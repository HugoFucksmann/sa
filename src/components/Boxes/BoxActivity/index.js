import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import THEME from "../../../utils/constants/theme";
import freemonipesos from "../../../../assets/freemoni-pesos.png";
import moment from "moment";
import "moment/locale/es";
import parseAmounts from "../../../utils/functions/parseAmounts";
const BoxActivity = ({ dataActivity }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Actividad</Text>
      </View>
      <View>
        {dataActivity?.length > 0 &&
          dataActivity.map((item, idx) => (
            <View style={styles.containerWalletItem} key={idx}>
              <View
                style={{
                  width: "100%",
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: 8,
                  borderBottomColor: THEME.colors.lightgray,
                  borderBottomWidth: 0.5,
                }}
              >
                <View style={styles.containerWalletItemTitle}>
                  <Text
                    style={[
                      styles.containerWalletItemTitleText,
                      {
                        color:
                          item.amount >= 0
                            ? THEME.colors.green
                            : THEME.colors.lightblue,
                      },
                    ]}
                  >
                    {item.intermediary.displayName}
                    {item.amount >= 0 ? " recibió de " : " envió a "}
                    {item.counterparty.displayName}
                  </Text>
                  <Text style={styles.date}>
                    {moment(item.createdAt)
                      .locale("es")
                      .startOf("hora")
                      .fromNow()}
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
          ))}
        {!dataActivity?.length && (
          <Text style={{ textAlign: "center" }}>
            No hay transacciones para mostrar
          </Text>
        )}
      </View>
    </View>
  );
};

export default BoxActivity;
