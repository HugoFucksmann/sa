import { StyleSheet, Dimensions } from "react-native";
import THEME from "../../utils/constants/theme";
const styles = StyleSheet.create({
  containerScreen: {
    width: "100%",
    paddingTop: 30,
    backgroundColor:THEME.colors.blue,
  },
  imageContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: Dimensions.get("window").width * 0.9,
    height: Dimensions.get("window").width * 0.3,
  },
  forgotPasswordContainer: {
    flexDirection: 'row',
    marginEnd: 20
  },
  redirectContainers: {
    width: "90%",
    alignSelf: "center",
    marginTop: 15,
  },
  forgotPassword: {
    color: THEME.colors.creamwhite,
    textAlign: "right",
    flex: 1,
    fontWeight: "700",
  },
  register: {
    textAlign: "center",
    color:THEME.colors.white
  },
  btnRegister: {
    color: THEME.colors.white,
    textAlign: "center",
    fontWeight: "700",
  },
});
export default styles;
