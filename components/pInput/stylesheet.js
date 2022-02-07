import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E0E0E0",
    flex: 1,
    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 10,
    marginVertical: 5,
  },
  input: {
    height: 40,
    padding: 10,
    backgroundColor: "#E0E0E0",
    borderRadius: 10,
  },
  labelContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  label: { fontWeight: "500", fontSize: 16 },
});
