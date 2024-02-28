import { View, Text } from "react-native";
import React from "react";
import useAppContext from "../../context/useAppContext";
import { getTransactionsByUser } from "../../services";
import { useQuery } from "react-query";
import Card from "../../components/Card";
import BoxActivity from "../../components/Boxes/BoxActivity";
import styles from "./styles";
const TransactionsOrders = ({ route }) => {
  const { user } = useAppContext();
  const { accountId, userId } = route.params;
  const { data: dataOrdersByAccount } = useQuery(
    ["transactionsOrders", accountId],
    () => getTransactionsByUser(user, userId, accountId),
    { enabled: !!user }
  );
  return (
    <View style={styles.container}>
      <Card>
        <BoxActivity dataActivity={dataOrdersByAccount} />
      </Card>
    </View>
  );
};

export default TransactionsOrders;
