import { View, Text } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import styles from "./styles";
import Button from "../../Button";
const AlertStatus = ({
  status,
  statusTextButton,
  statusParagraph,
  statusTitle,
  onPress
}) => {
  return (
    <View style={styles.container}>
      {status === "success" && (
        <AntDesign name="checkcircle" size={90} color="green" />
      )}
      {status === "error" && (
        <Entypo name="circle-with-cross" size={90} color="red" />
      )}
      {status === "pending" && (
        <AntDesign name="clockcircle" size={90} color="yellow" />
      )}
      <Text style={styles.title}>{statusTitle}</Text>
      {statusParagraph && (
        <Text style={styles.paragraph}>{statusParagraph}</Text>
      )}
      <View style={styles.buttonContainer}>
        <Button
          text={statusTextButton}
          onPress={onPress}
        />
      </View>
    </View>
  );
};

export default AlertStatus;
