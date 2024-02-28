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
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  nameText: {
    fontSize: 20,
    fontFamily: THEME.fontFamily.mainBold,
    color: THEME.colors.blackCronica,
    textAlign: "center",
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
  paymentCodeContainer: {
    alignItems: "center",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: THEME.colors.lightgray,
    padding: 5,
  },
  paymentCode: {
    color: THEME.colors.blackCronica,
    fontFamily: THEME.fontFamily.mainBold,
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
  ordersContainer: {
    width: "100%",
  },
  orderItemContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  orderDataContainer: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  orderCode: {
    fontFamily: THEME.fontFamily.secondaryBold,
    fontSize: 28,
    color: THEME.colors.blue,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  amount: {
    fontFamily: THEME.fontFamily.secondaryBold,
    fontSize: THEME.fontSize.subheading,
    color: THEME.colors.blue,
    paddingVertical: 8,
  },
  subject: {
    fontFamily: THEME.fontFamily.secondaryRegular,
    fontSize: THEME.fontSize.subheading,
    color: THEME.colors.blue,
  },
  containerQR: {
    alignItems: "center",
  },
});
export default styles;
