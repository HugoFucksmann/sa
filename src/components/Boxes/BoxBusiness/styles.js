import { StyleSheet, Dimensions } from "react-native";
import THEME from "../../../utils/constants/theme";
const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.colors.white,
    width: Dimensions.get("window").width * 0.9,
    borderRadius: 15,
    paddingVertical: 10,
    marginTop: 20,
    shadowColor: "#000",
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
    textAlign: "left",
    paddingHorizontal: 15,
    fontSize: 15,
    color: THEME.colors.lightblue,
    fontFamily: "Roboto_500Medium",
  },
  containerWalletItem: {
    width: "100%",
    alignItems: "center",
  },
  containerWalletItemImg: {
    width: "20%",
    alignItems: "center",
  },
  containerWalletItemTitle: {
    width: "50%",
  },
  containerWalletItemTitleText: {
    fontFamily: "NotoSans_400Regular",
    color: THEME.colors.darkgray,
    paddingLeft: 5,
  },
  containerWalletItemAccountText: {
    fontFamily: "Roboto_500Medium",
    color: THEME.colors.darkgray,
    textAlign: "right",
  },
  containerWalletItemTitleTextEnabled: {
    fontFamily: "Roboto_500Medium",
    color: THEME.colors.darkgray,
    fontSize: 11,
    paddingLeft: 5,
  },
  containerWalletItemAccount: {
    width: "30%",
  },
  containerFooter: {
    paddingTop: 10,
    paddingBottom: 5,
    borderTopColor: THEME.colors.lightgray,
    borderTopWidth: 0.5,
  },
  footerText: {
    textAlign: "center",
    fontFamily: "Roboto_500Medium",
    color: THEME.colors.lightblue,
    fontSize: 15,
  },
});
export default styles;
