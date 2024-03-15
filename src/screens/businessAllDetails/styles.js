import { StyleSheet } from "react-native";
import THEME from "../../utils/constants/theme";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "column",
    paddingVertical: 20,
  },
  containerImg: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 90,
    height: 90,
    borderRadius: 100,
  },
  containerInfo: {
    width: "100%",
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  displayName: {
    paddingTop: 20,
    fontSize: 18,
    fontFamily: THEME.fontFamily.mainBold,
    textAlign: "center",
  },
  area: {
    fontFamily: THEME.fontFamily.mainRegular,
    color: "#35353599",
    fontSize: 15,
    textAlign: "center",
  },
  address: {
    fontFamily: THEME.fontFamily.mainRegular,
    fontSize: 13,
    color: "#35353599",
    textAlign: "center",
  },
});

export default styles;
