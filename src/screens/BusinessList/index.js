import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import {View} from 'react-native';
import {getAllShops} from '../../services';
import useAppContext from '../../context/useAppContext';
import freemonicircle from '../../../assets/freemoni-circle.png';
import styles from './styles';
const BusinessList = ({route, navigation}) => {
  const {user} = useAppContext();
  const [partnerShops, setPartnerShops] = useState([]);
  const [shopsReady, setShopsReady] = useState(false);
  const {balance} = route.params;
  const getShops = async () => {
    try {
      let result = await getAllShops(user);
      setPartnerShops(result);
      setShopsReady(true);
    } catch (err) {
      console.log('getShops err: ', err);
    }
  };

  const onRedirectEnterAmount = destinatary => {
    navigation.navigate('InfoBusiness', {
      balance,
      destinatary,
    });
  };

  useEffect(() => {
    getShops();
  }, []);
  return (
    <View>
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

const RenderItem = ({item, onRedirectEnterAmount}) => {
  return (
    <TouchableWithoutFeedback onPress={() => onRedirectEnterAmount(item)}>
      <View
        style={{
          height: 100,
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          marginTop: 10,
        }}>
        <View
          style={{
            resizeMode: 'cover',
            height: '100%',
            width: '24%',
            borderRadius: 1000,
            alignSelf: 'center',
          }}>
          <Image
            source={item.photoUrl ? {uri: item.photoUrl} : freemonicircle}
            style={{
              resizeMode: 'cover',
              height: 64,
              width: 64,
              borderRadius: 1000,
              alignSelf: 'center',
            }}
          />
        </View>
        <View>
          <Text style={{fontWeight: 'bold', color: 'black'}}>
            {item.displayName}
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginTop: 3,
              marginBottom: 3,
            }}>
            <Text>{item.province} </Text>
            <Text>{item.city}</Text>
          </View>
          <Text>{item.area}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default BusinessList;
