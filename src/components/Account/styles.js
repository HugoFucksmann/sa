import { StyleSheet } from "react-native";
import THEME from "../../utils/constants/theme";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    marginTop: 30,
    width: "100%",
    backgroundColor: THEME.colors.blue,
  },
  inputComponent: {
    width: "100%",
    alignItems: "center",
    marginVertical: 5,
  },
  inputContainer: {
    width: "90%",
    backgroundColor: THEME.colors.white,
    borderRadius: 50,
    paddingHorizontal: 20,
    justifyContent: "space-between",
    width: "90%",
    alignItems: "center",
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  textInput: {
    height: 60,
    width: "80%",
    fontSize: THEME.fontSize.subheading,
  },
  errorContainer: {
    paddingTop: 3,
  },
  textError: {
    color: THEME.colors.red,
  },
  btnContainer: {
    marginTop: 20,
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
  },
  btnSocial: {
    width: "50%",
    borderRadius: 10,
    height: 48,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: THEME.colors.lightblue,
  },
  icon: {
    color: "#c1c1c1",
  },
  accountExistContainer: {
    width: "90%",
    alignSelf: "center",
    marginTop: 15,
  },
  accountExistText: {
    textAlign: "center",
    color: THEME.colors.white,
  },
  accountExistTextHighlighted: {
    color: THEME.colors.white,
    textAlign: "center",
    fontWeight: "700",
  },
  loginSeparator: { 
    flexDirection: 'row', alignItems: 'center', marginHorizontal: 20, marginVertical: 30 
  },
  loginSeparatorLine: {
    flex: 1, height: 1, backgroundColor: THEME.colors.white
  },
  loginSeparatorText: {
    textAlign: 'center', marginHorizontal: 10, color: THEME.colors.white
  }
});
export default styles;
