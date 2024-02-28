import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import Button from "../../components/Button";
import styles from "./styles";
import useAppContext from "../../context/useAppContext";
import userprof from "../../../assets/userprof.jpeg";
import ClipboardButton from "../../components/ClipboardButton";
const Profile = () => {
  const { dataUser } = useAppContext();

  return (
    <View style={styles.container}>
      <View style={styles.containerUserData}>
        <Image
          source={userprof}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
        <View style={{ paddingVertical: 20 }}>
          <Text style={[styles.userDataTextName]}>{dataUser?.displayName}</Text>
          <Text style={[styles.userDataText]}>{dataUser?.email}</Text>
        </View>
      </View>
      <View style={styles.containerUserCode}>
        <Text style={styles.userCodeTitle}>Código de usuario</Text>
        <View style={styles.codeContainer}>
          <Text style={styles.codeText}>{dataUser?.freemoniCode}</Text>
          <ClipboardButton couponData={dataUser?.freemoniCode} />
        </View>
      </View>
    </View>
  );
};

export default Profile;
