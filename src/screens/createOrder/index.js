import {View, Text, TextInput, Image, Alert} from 'react-native';
import React from 'react';
import styles from './styles';
import {useState} from 'react';
import Button from '../../components/Button';
import freemonicircle from '../../../assets/freemoni-circle.png';
import {createOrderSchedule} from '../../services';
import useAppContext from '../../context/useAppContext';
const CreateOrder = ({route, navigation}) => {
  const {user} = useAppContext();
  const {details} = route.params;
  const [text, setText] = useState('');
  const onChangeText = text => {
    setText(text);
  };
  console.log('user ', user);
  const onCreateOrder = async () => {
    /*  if (Number(text) > details.availableBalance) {
      Alert.alert('Ingrese un monto menor o igual al disponible');
      return;
    } */
    try {
      const body = {
        subject: '',
        accountToId: details.id,
        accountFromId: '1455', //!
        amount: text,
      };
      const createOrder = await createOrderSchedule(user, body);
      console.log('createOrder___ ', createOrder);
      if (createOrder.errorKey === typeof String) throw Error;
      if (createOrder.state === 1) {
        navigation.navigate('Codigo de pago', {
          subject: '',
          name: user.displayName ? user.displayName : '',
          amount: text,
          orderCode: createOrder.orderCode,
          orderId: createOrder.orderId,
          photo: details.photo,
        });
      }
    } catch (error) {
      console.log('error:: ', error);
    }
  };

  const onCancelOrder = () => {
    navigation.navigate('Inicio');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ingresa el monto a enviar a:</Text>
      <Image
        source={details?.photo ? {uri: details.photo} : freemonicircle}
        style={{width: 100, height: 100, borderRadius: 50}}
      />
      <View style={styles.availableBalanceContainer}>
        <Text style={styles.availableBalance}>Disponible: {details.id}</Text>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        keyboardType="numeric"
        placeholder="Ingresá el monto a transferir"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        keyboardType="numeric"
        placeholder="Ingresá el monto a transferir"
      />
      <View style={styles.buttonsContainer}>
        <Button text="Cancelar" onPress={onCancelOrder} />
        <Button text="Confirmar" onPress={onCreateOrder} />
      </View>
    </View>
  );
};

export default CreateOrder;
