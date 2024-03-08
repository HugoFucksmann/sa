import {StyleSheet, Dimensions} from 'react-native';
import THEME from '../../utils/constants/theme';
const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 12,
  },
  img: {
    width: Dimensions.get('window').width * 0.78,
    height: Dimensions.get('window').width * 0.78 * 0.5625,
  },
  footerItemContainer: {
    borderColor: 'transparent',
    //borderTopColor: "#adadad99",
    //borderWidth: 1,
    padding: 10,
    alignItems: 'center',
  },
  footerItem: {
    fontSize: 16,
    color: '#fff',
    paddingRight: 10,
  },
  closeSesionContainer: {
    backgroundColor: THEME.colors.white,
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 5,
    marginBottom: 15,
  },
  closeSesionText: {
    fontFamily: 'Roboto-Bold',
    color: THEME.colors.blue,
  },
  powerBy: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shareButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shareButtonText: {
    fontSize: 16,
    color: '#fff',
    paddingLeft: 20,
  },
});

export default styles;
