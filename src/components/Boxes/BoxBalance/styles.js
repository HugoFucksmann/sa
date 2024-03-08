import {StyleSheet, Dimensions} from 'react-native';
import THEME from '../../../utils/constants/theme';
const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.colors.blue,
    width: '100%',
    marginTop: -20,
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    paddingBottom: 20,
  },
  containerTitle: {
    marginStart: 20,
    marginTop: 20,
  },
  eye: {
    position: 'absolute',
    right: 20,
    top: 15,
  },
  title: {
    fontSize: 15,
    color: THEME.colors.lightgray,
    fontFamily: 'Roboto-Regular',
  },
  accountBalanceTitle: {
    fontSize: 15,
    fontFamily: 'Roboto-Regular',
    color: THEME.colors.white,
  },
  accountBalance: {
    fontSize: 30,
    fontFamily: 'Roboto-Regular',
    color: THEME.colors.white,
  },
  containerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
  },
  containerButton: {
    backgroundColor: THEME.colors.lightblue,
    marginHorizontal: 20,
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerButtonAlt: {
    backgroundColor: THEME.colors.white,
    marginHorizontal: 20,
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButtons: {
    paddingTop: 7,
    color: THEME.colors.white,
    fontFamily: 'Roboto-Medium',
  },
});
export default styles;
