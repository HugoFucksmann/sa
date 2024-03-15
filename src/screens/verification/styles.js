import { StyleSheet, Dimensions } from "react-native";
import THEME from "../../utils/constants/theme";
const styles = StyleSheet.create({
  containerLoginData: {
    flex: 1,
  },
  image: {
    width: Dimensions.get("window").width * 0.9,
    alignSelf: "center",
    height: Dimensions.get("window").width * 0.3,
  },
  desc: {
    color: "white",
    fontSize: 18,
    marginVertical: 5,
    marginHorizontal: 15,
    fontWeight: "500",
    alignSelf: "flex-start",
  },
  buttonStartContainer: {
    marginVertical: 30,
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 7,
  },
  buttonStart: {
    fontSize: 18,
    fontWeight: "700",
    color: THEME.colors.blue,
  },
  notReceivedContainer: {
    width: Dimensions.get("window").width * 0.9,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonNotReceivedContainer: {
    backgroundColor: "white",
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 7,
  },
  buttonNotReceived: {
    fontSize: 12,
    fontWeight: "500",
    color: THEME.colors.blue,
  },
  descNotReceived: {
    color: "white",
    fontSize: 12,
    marginVertical: 5,
    marginHorizontal: 15,
    fontWeight: "700",
  },
  buttonRegisterContainer: {
    backgroundColor: "yellow",
    paddingVertical: 1,
    paddingHorizontal: 20,
    borderRadius: 7,
  },
  buttonRegister: {
    fontSize: 12,
    marginVertical: 5,
    marginHorizontal: 15,
    fontWeight: "500",
    textAlign: "center",
  },
  descRegister: {
    color: "white",
    fontSize: 12,
    marginVertical: 5,
    marginHorizontal: 15,
    fontWeight: "700",
    textAlign: "center",
  },
});
export default styles;
