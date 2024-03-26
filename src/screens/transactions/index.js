import {View, Text} from 'react-native';
import React from 'react';
import useAppContext from '../../context/useAppContext';
import {useQuery} from 'react-query';
import {getDataUser, getTransactionsByTimestamp} from '../../services';
import BoxActivity from '../../components/Boxes/BoxActivity';
import BoxTransactionByTimestamp from '../../components/Boxes/BoxTransactionByTimestamp';
import {useRefreshOnFocus} from '../../hooks/useRefreshOnFocus';

const Transactions = () => {
  const {user, dataUser} = useAppContext();
  const {data: transactionByTimestamp, refetch: refetchTransactions} = useQuery(
    ['transactionsByTimestamp', user],
    () => getTransactionsByTimestamp(dataUser.userId),
    {enabled: !!dataUser},
  );

  return (
    <View style={{alignItems: 'center'}}>
      {transactionByTimestamp?.length > 0 && (
        <BoxTransactionByTimestamp dataActivity={transactionByTimestamp} />
      )}
      {transactionByTimestamp?.length <= 0 && (
        <Text style={{paddingVertical: 20}}>
          No hay transacciones recientes
        </Text>
      )}
    </View>
  );
};

export default Transactions;
