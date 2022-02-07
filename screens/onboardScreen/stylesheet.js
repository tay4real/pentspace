import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    padding: 0,
    backgroundColor: "#E5E5E5",
    height: "100%",
  },
  appImage: {
    height: "56%",
    width: "100%",
    resizeMode: "cover",
  },
  appTextContainer: {
    marginTop: 20,
    marginBottom: 40,
  },
  appTextTitle: {
    fontSize: 22,
    textAlign: "center",
    lineHeight: 23,
    color: "#1935DE",
    fontWeight: "700",
    marginBottom: 12,
    paddingLeft: 35,
    paddingRight: 35,
  },
  appTextSubTitle: {
    fontSize: 15,
    textAlign: "center",
    lineHeight: 15.25,
    fontWeight: "500",
    paddingLeft: 46,
    paddingRight: 46,
  },
  appSliderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "4%",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "80%",
    marginTop: 40,
    paddingBottom: 20,
  },
  buttonContainerVertical: {
    flexDirection: "column",
    width: "80%",
    height: "50%",
  },
});
