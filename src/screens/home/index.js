import {View, ScrollView, useFocusEffect} from 'react-native';
import React, {useEffect, useState} from 'react';
import Card from '../../components/Card';
import BoxBalance from '../../components/Boxes/BoxBalance';
import BoxTransactions from '../../components/Boxes/BoxTransactions';
import {useQuery} from 'react-query';
import {getWalletAccounts} from '../../services';
import useAppContext from '../../context/useAppContext';

import {SafeAreaView} from 'react-native-safe-area-context';

const Home = ({navigation}) => {
  const {user, dataUser} = useAppContext();
  const {notificationCount, setNotificationCount} = useState(0);
  const {data: dataWallet, refetch: refetchDataWallet} = useQuery(
    ['dataWallet', user],
    () => getWalletAccounts(user),
    {enabled: !!user, refetchOnWindowFocus: true},
  );

  /*  useEffect(() => {
   
    const handleBackendNotification = () => {
      
      setNotificationCount(prevCount => prevCount + 1);

   
      refetchDataWallet();
    };



    return () => {
      
    };
  }, [refetchDataWallet]); */

  return (
    <SafeAreaView edges={['bottom']}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Card>
            <BoxBalance
              balance={dataWallet?.totalAmount}
              navigation={navigation}
              send="SendFreemoniDestinataryCode"
              receive="ReceiveFreemoni"
              transactions="TransaccionesDeUsuario"
              partnerShops="PartnerShops"
            />
          </Card>
          <Card>
            <BoxTransactions dataWallet={dataWallet} navigation={navigation} />
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
