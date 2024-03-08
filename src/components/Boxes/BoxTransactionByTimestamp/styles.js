import {StyleSheet, Dimensions} from 'react-native';
import THEME from '../../../utils/constants/theme';
const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.colors.white,
    width: Dimensions.get('window').width * 0.97,
    borderRadius: 15,
    paddingVertical: 10,
    marginVertical: 20,
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
    textAlign: 'left',
    paddingHorizontal: 15,
    fontSize: 15,
    color: THEME.colors.lightblue,
    fontFamily: 'Roboto-Medium',
  },
  containerWalletItem: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 10,
  },

  containerWalletItemTitle: {
    width: '60%',
  },
  containerWalletItemTitleText: {
    fontFamily: THEME.fontFamily.mainBold,
    color: THEME.colors.darkgray,
    paddingLeft: 5,
  },
  date: {
    fontFamily: THEME.fontFamily.mainRegular,
    color: THEME.colors.darkgray,
    fontSize: 11,
    paddingLeft: 5,
  },
  containerWalletItemAccountText: {
    fontFamily: 'Roboto-Medium',
    color: THEME.colors.darkgray,
    textAlign: 'right',
  },
  containerWalletItemAccount: {
    width: '40%',
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
