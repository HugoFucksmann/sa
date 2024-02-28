import { View, Text } from "react-native";
import React from "react";
import THEME from "../../utils/constants/theme";
import QRCode from "react-native-qrcode-svg";
const GenerateQR = ({ value }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <QRCode
        value={value}
        size={150}
        backgroundColor={THEME.colors.creamwhite}
      />
    </View>
  );
};

export default GenerateQR;
