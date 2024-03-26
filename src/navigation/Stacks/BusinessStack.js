import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../screens/home";
// import Notifications from "../../screens/notifications";
import HeaderHome from "../../components/Header/HeaderHome";
import { getHeaderTitle } from "@react-navigation/elements";
import HeaderDefault from "../../components/Header/HeaderDefault";
import MyBusiness from "../../screens/my-business";
import BusinessDetails from "../../screens/businessDetails";
import SendFreemoniDestinataryCode from "../../screens/sendFreemoniDestinataryCode";
import SelectOriginAccount from "../../screens/selectOriginAccount";
import EnterAmount from "../../screens/enterAmount";
import ReceiveFreemoni from "../../screens/receiveFreemoni";
import Transactions from "../../screens/transactions";
import TransactionsBusiness from "../../screens/transactionsBusiness";
import SendFreemoniFromBusiness from "../../screens/sendFreemoniFromBusiness";
import ScanQrSendFreemoni from "../../screens/scanQrSendFreemoni";
//import BusinessDetails from "../../screens/businessDetails";
// import HeaderDefault from "../../components/Header/HeaderDefault";
// import Cronipesos from "../../screens/cronipesos";
// import Modal from "../../components/Modal";
const Stack = createStackNavigator();

const BusinessStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name="Inicio"
          component={MyBusiness}
          options={{
            title: "Mi negocio",
            header: ({ navigation, route, options }) => {
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
          name="BusinessDetails"
          component={BusinessDetails}
          options={{
            title: "Detalles del negocio",
            header: ({ navigation, route, options }) => {
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
            title: "Enviar Freemoni",
            header: ({ navigation, route, options }) => {
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
          component={SelectOriginAccount}
          options={{
            title: "Enviar Freemoni",
            header: ({ navigation, route, options }) => {
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
          component={EnterAmount}
          options={{
            title: "Ingresá monto Freemoni",
            header: ({ navigation, route, options }) => {
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
            title: "Recibir Freemoni",
            header: ({ navigation, route, options }) => {
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
          component={TransactionsBusiness}
          options={{
            title: "Transacciones",
            header: ({ navigation, route, options }) => {
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
          name="SendFreemoniFromBusiness"
          component={SendFreemoniFromBusiness}
          options={{
            title: "Enviar Freemoni",
            header: ({ navigation, route, options }) => {
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
            title: "Escanear código QR",
            header: ({ navigation, route, options }) => {
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

export default BusinessStack;
