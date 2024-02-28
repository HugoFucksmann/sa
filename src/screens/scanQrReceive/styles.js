import { StyleSheet, Dimensions } from "react-native";
import THEME from "../../utils/constants/theme";

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    flexDirection: "column",
    flex: 1,
    backgroundColor: THEME.colors.blue
  },
  wrapper: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center'
  },
  qr: {
    paddingStart: 15
  }
});
export default styles;
