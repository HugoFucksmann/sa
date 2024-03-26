import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import styles from './styles';
import QRCode from 'react-native-qrcode-svg';
import THEME from '../../utils/constants/theme';
import freemonipesos from '../../../assets/freemoni-pesos.png';
import freemonicircle from '../../../assets/freemoni-circle.png';
import ClipboardButton from '../../components/ClipboardButton';
import Loading from '../../components/Loading';
import PopUp from '../../components/PopUp';
import AlertStatus from '../../components/Alert/AlertStatus';
import {deleteOrder} from '../../services';
import {useState} from 'react';
const PaymentCode = ({route, navigation}) => {
  const {amount, name, orderCode, orderId, photo, subject} = route.params;
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);
  const [statusTitle, setStatusTitle] = useState(null);

  const onDeleteOrder = async () => {
    try {
      setLoading(true);
      const createOrder = await deleteOrder(orderId);
      setLoading(false);
      setStatus('success');
      setStatusTitle('Orden eliminada exitosamente');
    } catch (error) {
      setStatus('error');
      setStatusTitle('Ocurrió un error, vuelva a intentar más tarde');
      setLoading(false);
    }
  };

  const onConfirm = () => {
    setStatus(null);
    setStatusTitle(null);
    navigation.navigate('Inicio');
  };
  return (
    <View>
      {loading && <Loading isVisible={loading} text="Eliminando orden" />}
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
      <View style={styles.avatarContainer}>
        <View>
          <Image
            source={photo ? {uri: photo} : freemonicircle}
            style={{width: 60, height: 60, borderRadius: 50}}
          />
        </View>
        <View>
          <Text style={styles.nameText}>{name}</Text>
        </View>
      </View>
      <View style={styles.containerQR}>
        <QRCode
          value={orderId}
          size={200}
          backgroundColor={THEME.colors.creamwhite}
        />
      </View>
      <View style={styles.orderDataContainer}>
        <View style={{flexDirection: 'column', alignItems: 'center'}}>
          <Text style={styles.orderCode}>{orderCode}</Text>
          <ClipboardButton couponData={orderCode} />
        </View>
        <View>
          <Text style={styles.amount}>
            Utiliza este código para enviar{' '}
            <Image source={freemonipesos} style={{width: 15, height: 15}} />{' '}
            {amount}
          </Text>
        </View>
        <View>
          <Text style={styles.subject}>Concepto: {subject}</Text>
        </View>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Inicio')}>
          <View style={styles.btnReturnContainer}>
            <Text style={styles.btnReturn}>Volver a billetera</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={onDeleteOrder}>
          <View style={styles.btnReturnContainerDelete}>
            <Text style={styles.btnReturn}>Eliminar código</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default PaymentCode;
