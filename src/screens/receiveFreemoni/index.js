import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import useAppContext from "../../context/useAppContext";
import styles from "./styles";
import GenerateQR from "../../components/GenerateQR";
import ClipboardButton from "../../components/ClipboardButton";
import THEME from "../../utils/constants/theme";
import Ionicons from "react-native-vector-icons/Ionicons";

const ReceiveFreemoni = ({ navigation }) => {
  const { dataUser } = useAppContext();
  return (
    <View style={styles.container}>
      {dataUser?.userId &&
        <View style={styles.qrOuterContainer}>
          <View style={styles.qrContainer}>
            <GenerateQR value={dataUser.userId} />
          </View>
        </View>
      }
      <Text style={styles.title}>
        Muestra este código para recibir Freemoni
      </Text>
      {dataUser?.freemoniCode && (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
        </View>
      )}
      <View style={styles.containerScanButtonContainer}>
        <TouchableOpacity
          style={[styles.containerButton, styles.containerScanButton]}
          onPress={() => navigation.navigate("ScanQrReceive")}
        >
          <Ionicons color={THEME.colors.white} name='scan' />
          <Text style={{ color: THEME.colors.white, marginStart: 8 }}>Escanear un QR</Text>
        </TouchableOpacity>

        <ClipboardButton
          couponData={dataUser.freemoniCode}
          styles={[styles.containerButton, styles.containerCopyButton]}
          onPress={() => navigation.navigate("ScanQrReceive")}
        />
      </View>
    </View>
  );
};

export default ReceiveFreemoni;
