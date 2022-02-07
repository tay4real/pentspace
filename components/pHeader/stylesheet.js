import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    height: 56,
    flexDirection: "row",
    backgroundColor: "white",
    padding: 20,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    elevation: 10,
  },
  header: {
    color: "#1935DE",
    fontWeight: "600",
    fontSize: 16,
    textAlign: "center",
  },
  button: {
    alignItems: "center",
    padding: 10,
    height: 50,
  },
  home_header: {
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    height: 56,
    flexDirection: "row",
    backgroundColor: "white",
    padding: 20,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    elevation: 10,
  },
  home_logo: {
    justifyContent: "center",
    alignItems: "flex-start",
    flex: 2,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
  icon: {
    width: 20,
    height: 20,
  },
});
