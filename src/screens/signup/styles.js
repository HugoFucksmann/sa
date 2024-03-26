import {StyleSheet, Dimensions} from 'react-native';
import THEME from '../../utils/constants/theme';
const styles = StyleSheet.create({
  containerScreen: {
    width: '100%',
    paddingTop: 30,
  },
  imageContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  image: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').width * 0.3,
  },
  forgotPasswordContainer: {
    marginTop: 30,
  },
  redirectContainers: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 15,
  },
  forgotPassword: {
    color: THEME.colors.red,
    textAlign: 'center',
    fontWeight: '700',
  },
  register: {
    textAlign: 'center',
    color: THEME.colors.white,
  },
  btnRegister: {
    color: THEME.colors.white,
    textAlign: 'center',
    fontWeight: '700',
  },
});
export default styles;
