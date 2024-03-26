import {View, Text, Image, TextInput, Alert} from 'react-native';
import React, {useState} from 'react';
import userprof from '../../../assets/userprof.jpeg';
import styles from './styles';
import Button from '../../components/Button';
import {createInmediateOrder} from '../../services';
import useAppContext from '../../context/useAppContext';
import Loading from '../../components/Loading';
import PopUp from '../../components/PopUp';
import AlertStatus from '../../components/Alert/AlertStatus';
import freemonipesos from '../../../assets/freemoni-pesos.png';
const EnterAmount = ({navigation, route}) => {
  const {user, dataUser} = useAppContext();
  const {validation, account} = route.params;
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [statusTitle, setStatusTitle] = useState(null);
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
      setLoading(true);
      const createOrder = await createInmediateOrder(body);
      if (createOrder?.state === 2) {
        setLoading(false);
        setStatus('success');
        setStatusTitle('Transferencia exitosa');
      }
    } catch (error) {
      setStatus('error');
      setStatusTitle('Ocurrió un error, vuelva a intentar más tarde');
      setLoading(false);
    }
  };

  const onCancelOrder = () => {
    navigation.navigate('Inicio');
  };

  const onConfirm = () => {
    setStatus(null);
    setStatusTitle(null);
    navigation.navigate('Inicio');
  };

  return (
    <View style={styles.container}>
      {loading && <Loading isVisible={loading} text="Procesando transacción" />}
      {status && (
        <PopUp visible={true}>
          <AlertStatus
            status={status}
            statusTitle={statusTitle}
            statusTextButton="Confirmar"
            onPress={onConfirm}
          />
        </PopUp>
      )}
      <Text style={styles.title}>Ingresa el monto a enviar a:</Text>
      <Image
        source={userprof}
        style={{width: 100, height: 100, borderRadius: 50}}
      />
      <Text style={styles.name}>{validation[0]?.displayName}</Text>
      <View style={styles.availableBalanceContainer}>
        <Text style={styles.availableBalance}>
          Disponible: {'   '}
          <Image source={freemonipesos} style={{width: 13, height: 13}} />{' '}
          {account?.availableBalance}
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
