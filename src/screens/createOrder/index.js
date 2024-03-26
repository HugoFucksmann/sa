import {View, Text, TextInput, Image, Alert} from 'react-native';
import React from 'react';
import styles from './styles';
import {useState} from 'react';
import Button from '../../components/Button';
import freemonicircle from '../../../assets/freemoni-circle.png';
import {createOrderSchedule} from '../../services';
import useAppContext from '../../context/useAppContext';
import freemonipesos from '../../../assets/freemoni-pesos.png';
import Loading from '../../components/Loading';
const CreateOrder = ({route, navigation}) => {
  const {user} = useAppContext();
  const {destinatary, id, details, accountFromId} = route.params;
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState('');
  const [concept, setConcept] = useState('');
  const onChangeText = text => {
    setText(text);
  };
  const onChangeConcept = concept => {
    setConcept(concept);
  };

  const onCreateOrder = async () => {
    if (Number(text) <= 0) {
      Alert.alert('Ingrese un monto menor o igual al disponible');
      return;
    }
    if (Number(text) > details?.availableBalance) {
      Alert.alert('Ingrese un monto menor o igual al disponible');
      return;
    }
    try {
      const body = {
        subject: concept,
        accountToId: destinatary.accountId,
        accountFromId,
        amount: text,
      };
      setLoading(true);
      const createOrder = await createOrderSchedule(body);
      setLoading(false);
      if (createOrder.state === 1) {
        navigation.navigate('Codigo de pago', {
          subject: concept,
          name: destinatary.displayName,
          amount: text,
          orderCode: createOrder.orderCode,
          orderId: createOrder.orderId,
          photo: destinatary.imgUrl,
        });
      }
    } catch (error) {
      setLoading(false);
    }
  };

  const onCancelOrder = () => {
    navigation.navigate('Inicio');
  };

  return (
    <View style={styles.container}>
      {loading && <Loading isVisible={loading} text="Creando orden..." />}
      <Text style={styles.title}>Ingresa el monto a enviar a:</Text>
      <Image
        source={
          destinatary?.imgUrl ? {uri: destinatary.imgUrl} : freemonicircle
        }
        style={{width: 100, height: 100, borderRadius: 50}}
      />
      <View style={styles.availableBalanceContainer}>
        <Text style={styles.availableBalance}>
          Disponible:{'   '}
          <Image source={freemonipesos} style={{width: 13, height: 13}} />{' '}
          {details?.availableBalance.toFixed(2)}
        </Text>
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
        onChangeText={onChangeConcept}
        value={concept}
        placeholder="Concepto (opcional)"
      />
      <View style={styles.buttonsContainer}>
        <Button text="Cancelar" onPress={onCancelOrder} />
        <Button text="Confirmar" onPress={onCreateOrder} />
      </View>
    </View>
  );
};

export default CreateOrder;
