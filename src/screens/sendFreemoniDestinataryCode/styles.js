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
  input: {
    width: "90%",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: THEME.colors.lightgray,
    textAlign: "center",
  },
});

export default styles;
