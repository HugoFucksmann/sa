import {View, Text, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Camera, useCameraPermission} from 'react-native-vision-camera';
import styles from './styles';
import useAppContext from '../../context/useAppContext';
import {checkIfUserExist} from '../../services';
import ERRORS from '../../utils/constants/errors';
import AlertStatus from '../../components/Alert/AlertStatus';
import PopUp from '../../components/PopUp';
const ScanQrSendFreemoni = ({navigation}) => {
  const {user} = useAppContext();
  const {hasPermission, requestPermission} = useCameraPermission();
  const [scannedData, setScannedData] = useState(null);
  const [device, setDevice] = useState(null);
  const [loading, setLoading] = useState(false);

  const [scanned, setScanned] = useState(false);
  const [visible, setVisible] = useState(false);
  const [status, setStatus] = useState(null);
  const [statusTitle, setStatusTitle] = useState(null);

  useEffect(() => {
    if (!hasPermission) requestPermission();
    else {
      const devices = Camera.getAvailableCameraDevices();
      if (devices)
        setDevice(devices.find(device => device.position === 'back'));
    }
  }, [hasPermission]);

  const onGoBackHandle = () => {
    setVisible(false);
    setStatus(null);
    setStatusTitle(null);
    navigation.goBack();
  };

  const handleBarCodeScanned = async ({type, data: dataQr}) => {
    setScanned(true);
    try {
      console.log(dataQr);
      setLoading(true);
      const data = await checkIfUserExist(user, {id: dataQr});
      if (!data.userData) {
        throw {error: data};
      }
      setLoading(false);
      navigation.navigate('SelectOriginAccount', {data});
    } catch (error) {
      setLoading(false);
      if (error.data?.moreInfo?.errors[0]?.msg in ERRORS) {
        setStatus('error');
        setStatusTitle(ERRORS[error.data.moreInfo.errors[0].msg]);
        setVisible(true);
        return;
      }
      setStatus('error');
      setStatusTitle('¡Ocurrió un error!');
      setVisible(true);
      return;
    }
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  if (!device) return null;

  return (
    <View style={styles.container}>
      {!scanned && (
        <Camera
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={true}
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        />
      )}
      <PopUp visible={visible}>
        <AlertStatus
          statusTitle={statusTitle}
          status={status}
          statusTextButton="Aceptar"
          onPress={onGoBackHandle}
        />
      </PopUp>
    </View>
  );
};

export default ScanQrSendFreemoni;
