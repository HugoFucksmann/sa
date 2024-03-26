import {StyleSheet, Dimensions} from 'react-native';
import THEME from '../../utils/constants/theme';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: "center",
    marginTop: 60,
    width: '100%',
    backgroundColor: THEME.colors.blue,
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
  inputComponent: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 5,
  },
  inputContainer: {
    width: '90%',
    backgroundColor: THEME.colors.white,
    borderRadius: 5,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textInput: {
    height: 48,
    width: '80%',
    fontSize: THEME.fontSize.subheading,
  },
  errorContainer: {
    paddingTop: 3,
  },
  textError: {
    color: THEME.colors.white,
  },
  btnContainer: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
  },
  btn: {
    backgroundColor: THEME.colors.lightblue,
  },
  icon: {
    color: '#c1c1c1',
  },
  btnGoogle: {
    backgroundColor: '#EA4335',
  },
  accountExistContainer: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 15,
  },
  accountExistText: {
    textAlign: 'center',
    color: THEME.colors.white,
  },
  accountExistTextHighlighted: {
    color: THEME.colors.white,
    textAlign: 'center',
    fontWeight: '700',
  },
});
export default styles;
