import {View, ScrollView} from 'react-native';
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
  console.log('dfsdf');
  useEffect(() => {
    // Aquí simulamos la llegada de una notificación del backend
    // En una aplicación real, debes implementar la lógica para recibir las notificaciones del backend y actualizar el contador de notificaciones
    const handleBackendNotification = () => {
      // Incrementa el contador de notificaciones cuando llega una notificación
      setNotificationCount(prevCount => prevCount + 1);

      // Refresca los datos de la billetera
      refetchDataWallet();
    };

    // Aquí debes implementar la lógica para recibir notificaciones del backend
    // Puedes usar Firebase Cloud Messaging (FCM) u otro servicio similar
    // Llama a handleBackendNotification() cuando recibas una notificación
    // Por ejemplo:
    // messaging().onMessage(handleBackendNotification);

    return () => {
      // Aquí debes limpiar la suscripción a las notificaciones cuando el componente se desmonte
      // Por ejemplo:
      // messaging().onMessage();
    };
  }, [refetchDataWallet]);

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
