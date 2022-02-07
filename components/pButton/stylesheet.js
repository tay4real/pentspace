import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    borderRadius: 10,
    padding: 10,
    height: 50,
  },
  appButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center",
  },
  appButtonDisabled: {
    color: "#000",
    backgroundColor: "#ccc",
  },
  borderedButton: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    borderRadius: 10,
    padding: 10,
    width: "50%",
    height: 50,
  },

  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconLeft: {
    marginLeft: 10,
  },
  iconRight: {
    marginRight: 10,
  },
});
