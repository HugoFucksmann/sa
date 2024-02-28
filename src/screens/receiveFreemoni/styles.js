import { Dimensions, StyleSheet } from "react-native";
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
    paddingTop: 30,
    width: 320,
    fontSize: 24
  },
  qrContainer: {
    backgroundColor: THEME.colors.white,
    padding: 20,
    borderRadius: 35,
  },
  qrOuterContainer: {
    backgroundColor: THEME.colors.lightblue,
    padding: 80,
    borderRadius: 200,
    marginTop: 30
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
  orderCode: {
    fontFamily: THEME.fontFamily.secondaryBold,
    fontSize: 28,
    color: THEME.colors.blue,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  containerScanButtonContainer: {
    height: 60,
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 60,
    marginTop: 30
  },
  containerButton: {
    height: 60,
    margin: 8,
    width: "50%",
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  containerScanButton: {
    backgroundColor: THEME.colors.blue
  },
  containerCopyButton: {
    backgroundColor: THEME.colors.white,
    borderWidth: 2,
    borderColor: THEME.colors.blue
  }
});

export default styles;
