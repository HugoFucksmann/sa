import {View, Text, ScrollView, RefreshControl} from 'react-native';
import React, {useState} from 'react';
import Card from '../../components/Card';
import BoxBalance from '../../components/Boxes/BoxBalance';
import useAppContext from '../../context/useAppContext';
import {useQuery} from 'react-query';
import {getAuthorizedWallets, getWalletAccounts} from '../../services';
import BoxBusiness from '../../components/Boxes/BoxBusiness';
import {useRefreshOnFocus} from '../../hooks/useRefreshOnFocus';
import THEME from '../../utils/constants/theme';

const MyBusiness = ({navigation}) => {
  const {user, dataUser} = useAppContext();
  const [refreshing, setRefreshing] = useState(false);
  const {data: authorizedWallets, refetch: refetchDataWallets} = useQuery(
    ['authorizedWallet'],
    () => getAuthorizedWallets(dataUser),
    {enabled: !!dataUser},
  );

  useRefreshOnFocus(refetchDataWallets);
  const handleRefresh = () => {
    setRefreshing(true);
    refetchDataWallets();
    setRefreshing(false);
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={handleRefresh}
          colors={[THEME.colors.blue]}
          tintColor={THEME.colors.blue}
        />
      }>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: 20,
        }}>
        <Card>
          <BoxBalance
            balance={authorizedWallets?.availableBalance}
            navigation={navigation}
            send="SendFreemoniDestinataryCode"
            receive="ReceiveFreemoni"
            transactions="TransaccionesDeUsuario"
          />
        </Card>
        <Card>
          <BoxBusiness
            dataBusiness={authorizedWallets}
            navigation={navigation}
          />
        </Card>
      </View>
    </ScrollView>
  );
};

export default MyBusiness;
