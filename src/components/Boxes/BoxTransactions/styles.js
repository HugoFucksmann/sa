import {StyleSheet, Dimensions} from 'react-native';
import THEME from '../../../utils/constants/theme';
const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.colors.white,
    width: Dimensions.get('window').width * 0.9,
    borderRadius: 15,
    paddingVertical: 10,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  containerTitle: {
    paddingVertical: 10,
  },
  title: {
    textAlign: 'center',
    paddingTop: 20,
    fontSize: 20,
    color: THEME.colors.lightblue,
    fontFamily: 'Roboto-Medium',
    fontWeight: 'bold',
  },
  containerWalletItemImg: {
    width: '20%',
    alignItems: 'center',
  },
  containerWalletItemTitle: {
    width: '50%',
  },
  containerWalletItemTitleText: {
    fontFamily: 'NotoSansDisplay-Regular',
    color: THEME.colors.darkgray,
    paddingLeft: 5,
  },
  containerWalletItemAccountText: {
    fontFamily: 'Roboto-Medium',
    color: THEME.colors.blue,
    textAlign: 'right',
    fontWeight: 'bold',
  },
  containerWalletItemAccount: {
    flexDirection: 'row',
    width: '30%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  containerFooter: {
    paddingTop: 10,
    paddingBottom: 5,
    borderTopColor: THEME.colors.lightgray,
    borderTopWidth: 0.5,
  },
  footerText: {
    textAlign: 'center',
    fontFamily: 'Roboto-Medium',
    color: THEME.colors.lightblue,
    fontSize: 15,
  },
});
export default styles;
