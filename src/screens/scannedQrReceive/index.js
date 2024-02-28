import { View, Text, Image, Alert } from "react-native";
import React from "react";
import { executeOrder, getDataSender, getOrder } from "../../services";
import useAppContext from "../../context/useAppContext";
import userprof from "../../../assets/userprof.jpeg";
import freemonipesos from "../../../assets/freemoni-pesos.png";
import { useQuery } from "react-query";
import styles from "./styles";
import Button from "../../components/Button";
const ScannedQrReceive = ({ route, navigation }) => {
  const { orderId } = route.params;
  const { user } = useAppContext();
  const {
    data: order,
    refetch: refetchOrder,
    isLoading: isLoadingOrder,
  } = useQuery(["getOrder", orderId], () => getOrder(user, orderId), {
    enabled: !!user,
  });
  const {
    data: dataSender,
    refetch: refetchDataSender,
    isLoading: isLoadingDataSender,
  } = useQuery(
    ["dataSender", orderId],
    () => getDataSender(user, order.userId),
    {
      enabled: !!order,
    }
  );

  const onConfirmOder = async () => {
    try {
      const sendOrder = await executeOrder(user, orderId);
      if (!sendOrder?.state) {
        throw { message: "Ocurrió un error" };
      }
      if (sendOrder.state === 2) {
        Alert.alert("Transferencia exitosa", "", [
          { text: "OK", onPress: () => navigation.navigate("ReceiveFreemoni") },
        ]);
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Ocurrio un error");
    }
  };

  return (
    <View style={styles.container}>
      {order && dataSender && (
        <View style={styles.containerInfo}>
          <View>
            <Text style={styles.confirmTitle}>¿Confirma la información?</Text>
          </View>
          <Image source={userprof} style={styles.image} />
          <Text style={styles.displayName}>{dataSender?.displayName}</Text>
          <Text style={styles.amount}>
            <Image source={freemonipesos} style={{ width: 30, height: 30 }} />
            {order.amount}
          </Text>
          <View style={styles.containerButtons}>
            <Button
              text="Cancelar"
              onPress={() => navigation.navigate("ReceiveFreemoni")}
            />
            <Button text="Confirmar" onPress={onConfirmOder} />
          </View>
        </View>
      )}
    </View>
  );
};

export default ScannedQrReceive;
