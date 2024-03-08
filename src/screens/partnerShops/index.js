import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import useAppContext from '../../context/useAppContext';
import {getAllShops, getPartnerShops} from '../../services/index';
import styles from './styles';
import freemonicircle from '../../../assets/freemoni-circle.png';
import {useQuery} from 'react-query';

const RenderItem = ({item, onRedirectEnterAmount}) => (
  <TouchableWithoutFeedback onPress={() => onRedirectEnterAmount(item)}>
    <View
      style={{
        ...styles.renderItemContainer,
        height: 100,
        width: '50%',
        marginVertical: 10,
      }}>
      <Image
        source={item.photoUrl ? {uri: item.photoUrl} : freemonicircle}
        style={{resizeMode: 'contain', height: '50%', width: '80%'}}
      />
      <Text style={{...styles.textItem, fontSize: 18, marginTop: 5}}>
        {item.displayName}
      </Text>
    </View>
  </TouchableWithoutFeedback>
);

const PartnerShops = ({route, navigation}) => {
  const {user} = useAppContext();
  const {balance, id, details} = route.params;
  const [partnerShopss, setPartnerShops] = useState([]);
  const [shopsReady, setShopsReady] = useState(false);

  const {data: partnerShops} = useQuery(
    ['partnerShops', details.shopId],
    () => getPartnerShops(user, details.shopId),
    {enabled: !!user},
  );
  console.log('partnerShops ', partnerShops);
  const getShops = async () => {
    try {
      let result = await getAllShops(user);
      setPartnerShops(result);
      setShopsReady(true);
    } catch (err) {
      console.log(err);
    }
  };

  const onRedirectEnterAmount = destinatary => {
    navigation.navigate('CreateOrder', {
      balance,
      //  accountFromId: id,
      destinatary,
    });
  };

  useEffect(() => {
    getShops();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecciona el negocio</Text>
      {shopsReady ? (
        partnerShops?.length > 0 && (
          <FlatList
            data={partnerShops}
            renderItem={({item}) => (
              <RenderItem
                item={item}
                onRedirectEnterAmount={onRedirectEnterAmount}
              />
            )}
            keyExtractor={item => item.accountId}
            numColumns={2}
          />
        )
      ) : (
        <ActivityIndicator size="large" color="#213257" />
      )}
    </View>
  );
};

export default PartnerShops;
