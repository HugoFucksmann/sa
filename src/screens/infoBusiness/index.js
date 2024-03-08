import React from 'react';
import {Image, Text, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
const InfoBusiness = props => {
  const item = props.route.params.destinatary;

  return (
    <View style={{alignItems: 'center'}}>
      <Image
        source={item.photoUrl ? {uri: item.photoUrl} : null}
        style={{
          width: 100,
          height: 100,
          margin: 12,
          resizeMode: 'contain',

          borderRadius: 100,
        }}
      />
      <Text style={{...sizeFonts.large, fontWeight: 'bold'}}>
        {item.displayName}
      </Text>
      <Text style={{...sizeFonts.medium}}> {item.area} </Text>
      <View style={{display: 'flex', flexDirection: 'row'}}>
        <Text style={{...sizeFonts.medium}}> {item.city} </Text>
        <Text style={{...sizeFonts.medium}}> {item.province} </Text>
      </View>
      <MapView
        initialRegion={{
          latitude: item.latitude,
          longitude: item.longitude,
          latitudeDelta: 0.0182,
          longitudeDelta: 0.0321,
        }}
        style={{width: '100%', height: 220, marginBottom: 12}}>
        <Marker
          coordinate={{latitude: item.latitude, longitude: item.longitude}}
          title={item.displayName}
          style={{height: 10, width: 2}}
          // description={marker.description}
        />
      </MapView>
      <Text>Telefono: {item.phoneNumber} </Text>
    </View>
  );
};

export default InfoBusiness;

const sizeFonts = {
  small: {
    fontSize: 12,
    marginBottom: 8,
  },
  medium: {
    fontSize: 16,
    marginBottom: 8,
  },
  large: {
    fontSize: 20,
    color: 'black',
    marginBottom: 8,
  },
  extral: {
    fontSize: 26,
  },
};

/* const g = {
  accountId: '6Sv7MryrGprHzvEJncwo',
  additionalAddressData: null,
  adminTags: ['Tiendanube', 'W', 'ACTIVOS'],
  agreementIsAccepted: true,
  area: 'indumentary',
  authorizedUsers: [],
  bussinesName: 'Pablo Frizzera',
  city: 'Rio Grande',
  country: 'Argentina',
  createdAt: 1649101322699,
  cuit: '23181405139',
  displayName: 'Western Jeans',
  distance: '15180 km',
  enabled: true,
  fakeShopId: 'oz1IacattVIiCAr75TjE',
  geoHash: '4qry52vh4',
  hashedApiKey:
    '264a6a1eb055713f466ba10b40807a4288c0f5cd8c41131c48dbfe7d1a6d4066',
  integrationAllowed: true,
  isTestShop: false,
  latitude: -53.78423448344954,
  longitude: -67.70175228154525,
  moderatedBy: 'gYOxffs6J7ZM3nLoRAeOuTuotRf1',
  neighborhood: 'Centro',
  number: '680',
  ownerUsers: ['9PN3MDYv0LcTQWrhIocViPNEMN43'],
  partnerShops: [],
  phoneNumber: '2964506398',
  photoUrl:
    'https://firebasestorage.googleapis.com/v0/b/freemoni-b03fc.appspot.com/o/shopsLogos%2Flogo-1649197846171.png?alt=media&token=dc1ef42f-41bb-4bd0-a6e1-fe2192d3289f',
  province: 'Tierra del Fuego',
  shopEmail: 'westernjeansrg@gmail.com',
  shopFee: 0.1,
  shopId: 'zZhOQKJcU6XucJiBXWyl',
  status: 'reviewed',
  street: 'Rosales',
  testMode: false,
  tiendaNubeEnabled: true,
  zipCode: '9420',
  zoneId: '',
  zoneTags: [],
};
 */
