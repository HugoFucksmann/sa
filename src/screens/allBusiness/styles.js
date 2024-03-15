import { StyleSheet } from "react-native";
import THEME from "../../utils/constants/theme";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    paddingVertical: 10,
  },
  containerImg: {
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 100,
  },
  containerInfo: {
    width: "70%",
    paddingHorizontal: 10,
  },
  displayName: {
    fontSize: 15,
    fontFamily: THEME.fontFamily.mainBold,
  },
  area: {
    fontFamily: THEME.fontFamily.mainRegular,
    color: "#35353599",
    fontSize: 13,
  },
  address: {
    fontFamily: THEME.fontFamily.mainRegular,
    color: "#35353599",
    fontSize: 15,
  },
});

export default styles;
