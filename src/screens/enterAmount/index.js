import {View, Text, Image, TextInput, Alert} from 'react-native';
import React, {useState} from 'react';
import userprof from '../../../assets/userprof.jpeg';
import styles from './styles';
import Button from '../../components/Button';
import {createInmediateOrder} from '../../services';
import useAppContext from '../../context/useAppContext';
const EnterAmount = ({navigation, route}) => {
  const {user, dataUser} = useAppContext();
  const {validation, account} = route.params;
  const [text, setText] = useState('');
  const onChangeText = text => {
    setText(text);
  };

  const onCreateOrder = async () => {
    if (Number(text) > account?.availableBalance) {
      Alert.alert('Ingrese un monto menor al disponible');
      return;
    }
    const body = {
      salePointId: null,
      subject: '',
      amount: text,
      accountFromId: account.accountId,
      shopToId: null,
      userToId: validation[0].userId,
    };
    try {
      const createOrder = await createInmediateOrder(user, body);
      if (createOrder?.state === 2) {
        Alert.alert(
          'Transferencia exitosa',
          'La transfrencia fue enviada con exito al destinatario',
          [{text: 'OK', onPress: () => navigation.navigate('Inicio')}],
        );
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Error en el envio de freemonis');
    }
  };

  const onCancelOrder = () => {
    navigation.navigate('Inicio');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ingresa el monto a enviar a:</Text>
      <Image
        source={userprof}
        style={{width: 100, height: 100, borderRadius: 50}}
      />
      <Text style={styles.name}>{validation[0]?.displayName}</Text>
      <View style={styles.availableBalanceContainer}>
        <Text style={styles.availableBalance}>
          Disponible: {account?.availableBalance}
        </Text>
      </View>
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

export default EnterAmount;
