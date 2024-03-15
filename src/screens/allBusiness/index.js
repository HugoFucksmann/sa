import {
  View,
  Text,
  FlatList,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import useAppContext from "../../context/useAppContext";
import { getAllShops } from "../../services";
import { useQuery } from "react-query";
import styles from "./styles";
import AREAS from "../../utils/constants/area";
const RenderItem = ({ navigation, item }) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate("BusinessAllDetails", { data: item })}
    >
      <View style={styles.container}>
        <View style={styles.containerImg}>
          <Image source={{ uri: item.photoUrl }} style={styles.img} />
        </View>
        <View style={styles.containerInfo}>
          <Text style={styles.displayName}>{item.displayName}</Text>
          <Text style={styles.address}>
            {item.street} {item.city} {item.province}
          </Text>
          <Text style={styles.area}>{AREAS[item.area]}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const AllBusiness = ({ navigation }) => {
  const { user, dataUser } = useAppContext();
  const { data: allShops, refetch: refetchAllshops } = useQuery(
    ["getAllShops", user],
    () => getAllShops(dataUser.userId),
    { enabled: !!dataUser }
  );
  console.log(allShops);
  return (
    <View>
      {allShops?.length > 0 && (
        <FlatList
          data={allShops}
          renderItem={({ item }) => (
            <RenderItem item={item} navigation={navigation} />
          )}
        />
      )}
    </View>
  );
};

export default AllBusiness;
