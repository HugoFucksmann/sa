import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import {getOrdersByAccount} from '../../services';
import {useQuery} from 'react-query';
import useAppContext from '../../context/useAppContext';
import styles from './styles';
import freemonicircle from '../../../assets/freemoni-circle.png';
import freemonipesos from '../../../assets/freemoni-pesos.png';
import parseAmounts from '../../utils/functions/parseAmounts';
import FooterFixed from '../../components/FooterFixed';
const Orders = ({navigation, route}) => {
  const {user, dataUser} = useAppContext();
  const {id, details} = route.params;
  const {data: dataOrdersByAccount} = useQuery(
    ['dataOrdersByAccount', id],
    () => getOrdersByAccount(user, id),
    {enabled: !!user},
  );

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.businessContainer}>
            <View style={styles.avatarContainer}>
              <View>
                <Image
                  source={
                    !details.photo ? freemonicircle : {uri: details.photo}
                  }
                  style={{width: 60, height: 60, borderRadius: 50}}
                />
              </View>
              <View>
                <Text style={styles.balanceText}>
                  {' '}
                  <Image
                    source={freemonipesos}
                    style={{width: 20, height: 20}}
                  />
                  {parseAmounts(details?.totalBalance)}
                </Text>
              </View>
            </View>
            <View style={styles.paymentCodeContainer}>
              <Text style={styles.paymentCode}>CÓDIGOS DE PAGO</Text>
            </View>
          </View>
          <View style={styles.ordersContainer}>
            {dataOrdersByAccount?.length > 0 &&
              dataOrdersByAccount.map((item, idx) => (
                <TouchableWithoutFeedback
                  key={idx}
                  onPress={() =>
                    navigation.navigate('Codigo de pago', {
                      amount: item.amount,
                      orderCode: item.orderCode,
                      photo: item.fmTypeData?.shopPhoto,
                      name: item.fmTypeData?.shopName,
                      orderId: item.orderId,
                      subject: item.subject,
                    })
                  }>
                  <View style={styles.orderItemContainer}>
                    <Text>{item.orderCode}</Text>
                    <Text>{item.amount}</Text>
                  </View>
                </TouchableWithoutFeedback>
              ))}
          </View>
        </View>
      </ScrollView>
      <FooterFixed>
        <View style={styles.containerFooterButtons}>
          <TouchableWithoutFeedback
            onPress={() =>
              navigation.navigate('Transacciones de ordenes', {
                userId: dataUser.userId,
                accountId: id,
              })
            }>
            <View>
              <Text style={styles.textFooterButton}>Transacciones</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() =>
              navigation.navigate('PartnerShops', {
                id,
                details,
              })
            }>
            <View>
              <Text style={styles.textFooterButton}>Crear</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </FooterFixed>
    </View>
  );
};

export default Orders;
