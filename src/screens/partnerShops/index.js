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
    <View style={styles.renderItemContainer}>
      <Image
        source={item.imgUrl ? {uri: item.imgUrl} : freemonicircle}
        style={styles.image}
      />
      <Text style={styles.textItem}>{item.displayName}</Text>
    </View>
  </TouchableWithoutFeedback>
);

const PartnerShops = ({route, navigation}) => {
  console.log('PartnerShops_____');
  const {user} = useAppContext();
  const {id, details} = route.params;
  const d = route.params;

  const {data: partnerShops} = useQuery(
    ['user', user],
    async () => {
      try {
        const result = await getAllShops(user);
        return result;
      } catch (error) {
        throw new Error('Error fetching shops: ' + error.message);
      }
    },
    {enabled: !!user},
  );
  /*  console.log(' partnerShops__ ', partnerShops); */
  const onRedirectEnterAmount = destinatary => {
    navigation.navigate('CreateOrder', {
      details,
      accountFromId: id,
      destinatary,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecciona el negocio</Text>
      {partnerShops?.length > 0 && (
        <View>
          <FlatList
            data={partnerShops}
            renderItem={({item}) => (
              <RenderItem
                item={item}
                onRedirectEnterAmount={onRedirectEnterAmount}
              />
            )}
            keyExtractor={item => item.accountId}
            horizontal={true}
          />
        </View>
      )}
    </View>
  );
};

export default PartnerShops;
