import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../screens/home';
// import Notifications from "../../screens/notifications";
import HeaderHome from '../../components/Header/HeaderHome';
import {getHeaderTitle} from '@react-navigation/elements';
import Orders from '../../screens/orders';
import HeaderDefault from '../../components/Header/HeaderDefault';
import PaymentCode from '../../screens/paymentCode';
import TransactionsOrders from '../../screens/TransactionsOrders';
import ReceiveFreemoni from '../../screens/receiveFreemoni';
import SendFreemoniDestinataryCode from '../../screens/sendFreemoniDestinataryCode';
import SelectOriginAccount from '../../screens/selectOriginAccount';
import EnterAmount from '../../screens/enterAmount';
import SelectOriginAccountWallet from '../../screens/selectOriginAccountWallet';
import SelectDestinatary from '../../screens/selectDestinatary';
import EnterAmountWallet from '../../screens/enterAmountWallet';
import PartnerShops from '../../screens/partnerShops';
import CreateOrder from '../../screens/createOrder';
import Transactions from '../../screens/transactions';
import ScanQrReceive from '../../screens/scanQrReceive';
import ScannedQrReceive from '../../screens/scannedQrReceive';
import ScanQrSendFreemoni from '../../screens/scanQrSendFreemoni';
// import Cronipesos from "../../screens/cronipesos";
// import Modal from "../../components/Modal";
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name="Inicio"
          component={Home}
          options={{
            title: 'Mi billetera',
            header: ({navigation, route, options}) => {
              const title = getHeaderTitle(options, route.name);
              return (
                <HeaderHome
                  title={title}
                  style={options.headerStyle}
                  navigation={navigation}
                />
              );
            },
          }}
        />
        <Stack.Screen
          name="ScanQrReceive"
          component={ScanQrReceive}
          options={{
            title: 'Escanear QR',
            header: ({navigation, route, options}) => {
              const title = getHeaderTitle(options, route.name);
              return (
                <HeaderDefault
                  title={title}
                  style={options.headerStyle}
                  navigation={navigation}
                />
              );
            },
          }}
        />
        <Stack.Screen
          name="ScanQrSendFreemoni"
          component={ScanQrSendFreemoni}
          options={{
            title: 'Escanear código QR',
            header: ({navigation, route, options}) => {
              const title = getHeaderTitle(options, route.name);
              return (
                <HeaderDefault
                  title={title}
                  style={options.headerStyle}
                  navigation={navigation}
                />
              );
            },
          }}
        />
        <Stack.Screen
          name="ScannedQrReceive"
          component={ScannedQrReceive}
          options={{
            title: 'Código escaneado',
            header: ({navigation, route, options}) => {
              const title = getHeaderTitle(options, route.name);
              return (
                <HeaderDefault
                  title={title}
                  style={options.headerStyle}
                  navigation={navigation}
                />
              );
            },
          }}
        />
        <Stack.Screen
          name="Ordenes"
          component={Orders}
          options={{
            title: 'Ordenes',
            header: ({navigation, route, options}) => {
              const title = getHeaderTitle(options, route.name);
              return (
                <HeaderDefault
                  title={title}
                  style={options.headerStyle}
                  navigation={navigation}
                />
              );
            },
          }}
        />
        <Stack.Screen
          name="Codigo de pago"
          component={PaymentCode}
          options={{
            title: 'Código de pago',
            header: ({navigation, route, options}) => {
              const title = getHeaderTitle(options, route.name);
              return (
                <HeaderDefault
                  title={title}
                  style={options.headerStyle}
                  navigation={navigation}
                />
              );
            },
          }}
        />
        <Stack.Screen
          name="PartnerShops"
          component={PartnerShops}
          options={{
            title: 'Negocios cercanos',
            header: ({navigation, route, options}) => {
              const title = getHeaderTitle(options, route.name);
              return (
                <HeaderDefault
                  title={title}
                  style={options.headerStyle}
                  navigation={navigation}
                />
              );
            },
          }}
        />
        <Stack.Screen
          name="CreateOrder"
          component={CreateOrder}
          options={{
            title: 'Crear orden',
            header: ({navigation, route, options}) => {
              const title = getHeaderTitle(options, route.name);
              return (
                <HeaderDefault
                  title={title}
                  style={options.headerStyle}
                  navigation={navigation}
                />
              );
            },
          }}
        />
        <Stack.Screen
          name="Transacciones de ordenes"
          component={TransactionsOrders}
          options={{
            title: 'Transacciones',
            header: ({navigation, route, options}) => {
              const title = getHeaderTitle(options, route.name);
              return (
                <HeaderDefault
                  title={title}
                  style={options.headerStyle}
                  navigation={navigation}
                />
              );
            },
          }}
        />
        <Stack.Screen
          name="TransaccionesDeUsuario"
          component={Transactions}
          options={{
            title: 'Transacciones',
            header: ({navigation, route, options}) => {
              const title = getHeaderTitle(options, route.name);
              return (
                <HeaderDefault
                  title={title}
                  style={options.headerStyle}
                  navigation={navigation}
                />
              );
            },
          }}
        />
        <Stack.Screen
          name="SendFreemoniDestinataryCode"
          component={SendFreemoniDestinataryCode}
          options={{
            title: 'Enviar Freemoni',
            header: ({navigation, route, options}) => {
              const title = getHeaderTitle(options, route.name);
              return (
                <HeaderDefault
                  title={title}
                  style={options.headerStyle}
                  navigation={navigation}
                />
              );
            },
          }}
        />
        <Stack.Screen
          name="SelectOriginAccount"
          component={SelectOriginAccountWallet}
          options={{
            title: 'Enviar Freemoni',
            header: ({navigation, route, options}) => {
              const title = getHeaderTitle(options, route.name);
              return (
                <HeaderDefault
                  title={title}
                  style={options.headerStyle}
                  navigation={navigation}
                />
              );
            },
          }}
        />
        <Stack.Screen
          name="SelectDestinatary"
          component={SelectDestinatary}
          options={{
            title: 'Destinatario',
            header: ({navigation, route, options}) => {
              const title = getHeaderTitle(options, route.name);
              return (
                <HeaderDefault
                  title={title}
                  style={options.headerStyle}
                  navigation={navigation}
                />
              );
            },
          }}
        />
        <Stack.Screen
          name="EnterAmount"
          component={EnterAmountWallet}
          options={{
            title: 'Ingresá monto Freemoni',
            header: ({navigation, route, options}) => {
              const title = getHeaderTitle(options, route.name);
              return (
                <HeaderDefault
                  title={title}
                  style={options.headerStyle}
                  navigation={navigation}
                />
              );
            },
          }}
        />
        <Stack.Screen
          name="ReceiveFreemoni"
          component={ReceiveFreemoni}
          options={{
            title: 'Recibir Freemoni',
            header: ({navigation, route, options}) => {
              const title = getHeaderTitle(options, route.name);
              return (
                <HeaderDefault
                  title={title}
                  style={options.headerStyle}
                  navigation={navigation}
                />
              );
            },
          }}
        />
      </Stack.Group>
      {/* <Stack.Group
        screenOptions={{ presentation: "modal", headerShown: false }}
      >
        <Stack.Screen name="Modal" component={Modal} />
      </Stack.Group> */}
    </Stack.Navigator>
  );
};

export default HomeStack;
