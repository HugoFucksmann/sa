import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import Ionicon from "react-native-vector-icons/Ionicons";
import THEME from "../../utils/constants/theme";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";
import useAppContext from "../../context/useAppContext";
import { useQuery } from "react-query";
import { useRefreshOnFocus } from "../../hooks/useRefreshOnFocus";
import profileImage from "../../../assets/userprof.png";
import { getDataUser, getAccountData } from "../../services";
const HeaderHome = ({ title, navigation, route }) => {
  const insets = useSafeAreaInsets();
  const { colors } = useTheme();
  const { dataUser } = useAppContext();

  const { data: dataAccount, refetch: refetchDataAccount } = useQuery(
    ["dataAccount", dataUser],
    () => getAccountData(dataUser),
    { enabled: !!dataUser }
  );
  useRefreshOnFocus(refetchDataAccount);

  return (
    <SafeAreaView
    style={{
        backgroundColor: colors.card,
        paddingLeft: 12
      }}
    >
      <View style={styles.containerAppHeader}>
        <View style={styles.containerWelcomeHeader}>
          <Ionicon
            name="menu"
            size={32}
            color={THEME.colors.white}
            onPress={() => navigation.openDrawer()}
          />
          <Text style={styles.textWelcomeHeader}>{title}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HeaderHome;
