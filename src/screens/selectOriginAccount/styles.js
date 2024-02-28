import { StyleSheet } from "react-native";
import THEME from "../../utils/constants/theme";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
  },
  title: {
    textAlign: "center",
    fontFamily: THEME.fontFamily.mainBold,
    color: THEME.colors.blue,
    paddingVertical: 20,
  },
  containerAuthAccounts: {
    width: "100%",
    alignItems: "center",
  },
  authAccountsContainer: {
    paddingVertical: 5,
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  authAccountsImage: {
    width: "20%",
  },
  authAccountsName: {
    width: "50%",
  },
  authAccountsBalance:{
    width: "30%",
    
  }
});

export default styles;
