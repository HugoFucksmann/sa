import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";
import THEME from "../../utils/constants/theme";
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  avatarContainer: {
    alignItems: "center",
    paddingVertical: 10,
  },
  avatarText: {
    fontSize: 16,
    fontFamily: THEME.fontFamily.mainBold,
    color: THEME.colors.blackCronica,
  },
  notEnabledBusiness: {
    fontFamily: THEME.fontFamily.mainBold,
    color: THEME.colors.red,
    textAlign: "center",
  },
  availableText: {
    fontSize: 11,
    fontFamily: THEME.fontFamily.mainRegular,
    color: THEME.colors.blackCronica,
  },
  availableAmount: {
    fontSize: 22,
    fontFamily: THEME.fontFamily.mainBold,
    color: THEME.colors.blackCronica,
  },
  businessContainer: {
    width: Dimensions.get("window").width * 0.97,
  },
  balanceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    //borderTopWidth: 1,
    //borderBottomWidth: 1,
    //paddingVertical:3,
    //borderColor: THEME.colors.lightgray
  },
});
export default styles;
