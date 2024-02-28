import { StyleSheet } from "react-native";
import THEME from "../../utils/constants/theme";
const styles = StyleSheet.create({
  containerButton: {
    backgroundColor: THEME.colors.blue,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  text: {
    color: THEME.colors.white,
    fontFamily: THEME.fontFamily.mainBold,
    textAlign:"center"
  },
});
export default styles;
