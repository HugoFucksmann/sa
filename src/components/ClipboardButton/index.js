import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Clipboard from '@react-native-clipboard/clipboard';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ClipboardButton = ({couponData, styles}) => {
  const [textButton, setTextButton] = useState('Copia tu código');
  const copyToClipboard = () => {
    if (!couponData) return;
    setTextButton('¡Copiado!');
    Clipboard.setString(couponData);
  };
  return (
    <TouchableOpacity
      onPress={copyToClipboard}
      title={textButton}
      style={
        styles
          ? [...styles]
          : {flexDirection: 'row', height: 60, alignItems: 'center'}
      }>
      <Ionicons name="copy" />
      <Text style={{marginStart: 8}}>
        {textButton} {couponData}
      </Text>
    </TouchableOpacity>
  );
};

export default ClipboardButton;
