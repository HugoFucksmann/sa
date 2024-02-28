import {View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Camera, useCameraPermission} from 'react-native-vision-camera';
import styles from './styles';

const ScanQrReceive = ({navigation}) => {
  const {hasPermission, requestPermission} = useCameraPermission();
  const [device, setDevice] = useState(null);
  const [scannedData, setScannedData] = useState(null);

  useEffect(() => {
    if (!hasPermission) requestPermission();
    else {
      const devices = Camera.getAvailableCameraDevices();
      if (devices)
        setDevice(devices.find(device => device.position === 'back'));
    }
  }, [hasPermission]);

  const handleBarCodeScanned = ({type, data}) => {
    setScannedData(data);
    navigation.navigate('ScannedQrReceive', {orderId: data});
  };

  if (!device) return null;

  return (
    <View style={styles.container}>
      <Camera
        style={styles.wrapper}
        device={device}
        isActive={true}
        onBarCodeScanned={scannedData ? undefined : handleBarCodeScanned}
      />
    </View>
  );
};

export default ScanQrReceive;
