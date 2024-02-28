import { StyleSheet } from "react-native";
import THEME from "../../../utils/constants/theme";
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: THEME.fontFamily.mainBold,
    color: THEME.colors.blackCronica,
    paddingVertical: 20,
    textAlign: "center",
  },
  paragraph: {
    fontSize: 15,
    fontFamily: THEME.fontFamily.mainRegular,
    color: THEME.colors.blackCronica,
    paddingBottom: 20,
    textAlign: "center",
  },
  buttonContainer: {},
});

export default styles;
