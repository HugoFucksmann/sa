import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { getTransactionsByShop } from "../../services";
import { useQuery } from "react-query";
import useAppContext from "../../context/useAppContext";
import Card from "../../components/Card";
import BoxActivity from "../../components/Boxes/BoxActivity";
import styles from "./styles";
import Button from "../../components/Button";
import freemonicircle from "../../../assets/freemoni-circle.png";
import freemonipesos from "../../../assets/freemoni-pesos.png";
import parseAmounts from "../../utils/functions/parseAmounts";
const BusinessDetails = ({ navigation, route }) => {
  const { user } = useAppContext();
  const { id, details } = route.params;
  const { data: dataTransactions } = useQuery(
    ["dataTransactions", id],
    () => getTransactionsByShop(user, id),
    { enabled: !!user }
  );
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.businessContainer}>
          <View style={styles.avatarContainer}>
            <View>
              <Image
                source={
                  !details.photo ? freemonicircle : { uri: details.photo }
                }
                style={{ width: 60, height: 60, borderRadius: 50 }}
              />
            </View>
            <View>
              <Text style={styles.avatarText}>{details.name}</Text>
            </View>
          </View>
          <View style={styles.balanceContainer}>
            <View style={{ alignItems: "center" }}>
              <Text style={styles.availableText}>DISPONIBLES</Text>
              <Text style={styles.availableAmount}>
                {" "}
                <Image
                  source={freemonipesos}
                  style={{
                    width: 20,
                    height: 20,
                  }}
                />{" "}
                {parseAmounts(details.balance)}
              </Text>
            </View>
            <View>
              <Button text="Enviar" />
            </View>
          </View>
          {!details?.enabled && (
            <View>
              <Text style={styles.notEnabledBusiness}>
                Negocio no habilitado.
              </Text>
            </View>
          )}
        </View>
        <Card>
          <BoxActivity dataActivity={dataTransactions} />
        </Card>
      </View>
    </ScrollView>
  );
};

export default BusinessDetails;
