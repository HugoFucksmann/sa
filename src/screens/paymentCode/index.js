import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import QRCode from 'react-native-qrcode-svg';
import THEME from '../../utils/constants/theme';
import freemonipesos from '../../../assets/freemoni-pesos.png';
import freemonicircle from '../../../assets/freemoni-circle.png';
import ClipboardButton from '../../components/ClipboardButton';
const PaymentCode = ({route}) => {
  console.log('___PaymentCode____');
  const {amount, name, orderCode, orderId, photo, subject} = route.params;
  return (
    <View>
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
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
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
      </View>
    </View>
  );
};

export default PaymentCode;
