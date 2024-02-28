import { StyleSheet } from "react-native";
import THEME from "../../utils/constants/theme";
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
  },
  containerInfo: {
    width: "90%",
    alignItems: "center",
  },
  confirmTitle: {
    fontSize: 25,
    fontFamily: THEME.fontFamily.mainRegular,
    color: THEME.colors.blue,
    paddingVertical: 15,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  displayName: {
    fontFamily: THEME.fontFamily.mainBold,
    fontSize: 22,
    textAlign: "center",
    paddingVertical: 15,
  },
  amount: {
    fontSize: 35,
    color: THEME.colors.blue,
    fontFamily: THEME.fontFamily.mainBold,
    alignItems: "center",
  },
  containerButtons: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
export default styles;
