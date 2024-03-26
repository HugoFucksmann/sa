import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";
import MAP_API_KEY from "../../utils/constants/map";
const MapPreview = ({ lat, lng }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=13&size=600x300&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${MAP_API_KEY}`,
        }}
        style={styles.img}
      />
    </View>
  );
};

export default MapPreview;
