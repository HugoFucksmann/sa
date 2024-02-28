import { View, Text, ScrollView } from "react-native";
import React from "react";
import Card from "../../components/Card";
import BoxBalance from "../../components/Boxes/BoxBalance";
import useAppContext from "../../context/useAppContext";
import { useQuery } from "react-query";
import {
  getAuthorizedWallets,
  getWalletAccounts,
} from "../../services";
import BoxBusiness from "../../components/Boxes/BoxBusiness";

const MyBusiness = ({ navigation }) => {
  const { user, dataUser } = useAppContext();


  const { data: authorizedWallets } = useQuery(
    ["authorizedWallet"],
    () => getAuthorizedWallets(user, dataUser),
    { enabled: !!dataUser }
  );

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 20,
        }}
      >
        <Card>
          <BoxBalance
            balance={authorizedWallets?.availableBalance}
            navigation={navigation}
            send="SendFreemoniDestinataryCode"
            receive="ReceiveFreemoni"
          />
        </Card>
        <Card>
          <BoxBusiness
            dataBusiness={authorizedWallets}
            navigation={navigation}
          />
        </Card>
      </View>
    </ScrollView>
  );
};

export default MyBusiness;
