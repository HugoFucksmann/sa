import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";
import AREAS from "../../utils/constants/area";
import MapPreview from "../../components/MapPreview";

const BusinessAllDetails = ({ navigation, route }) => {
  const { data } = route.params;
  console.log("data", data);
  return (
    <View style={styles.container}>
      <View style={styles.containerImg}>
        <Image source={{ uri: data.photoUrl }} style={styles.img} />
      </View>
      <Text style={styles.displayName}>{data.displayName}</Text>
      <Text style={styles.area}>{AREAS[data.area]}</Text>
      <Text style={styles.address}>
        {data.street} {data.city} {data.province}
      </Text>
      <MapPreview lat={data.latitude} lng={data.longitude}/>
      <Text style={styles.address}>Teléfono: {data.phoneNumber}</Text>
    </View>
  );
};

export default BusinessAllDetails;
