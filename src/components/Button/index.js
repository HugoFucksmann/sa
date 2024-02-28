import { View, Text, TouchableWithoutFeedback } from "react-native";
import React from "react";
import styles from "./styles";

const Button = ({ text, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.containerButton}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Button;
