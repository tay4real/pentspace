import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: "#E5E5E5",
    height: "100%",
  },
  headerContainer: {
    width: "100%",
    height: 80,
    marginTop: 38,
    marginLeft: 10,
    marginBottom: 20,
  },
  header: {
    fontSize: 34,
    textAlign: "left",
    lineHeight: 40,
    color: "#1935DE",
    fontWeight: "700",
  },
  inputContainer: {
    marginBottom: 5,
  },
  buttonContainer: {
    marginTop: 21,
  },
  seperatorContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  loginContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 30,
  },
  loginText: {
    color: "#1935DE",
  },
  socialLogin: {
    padding: 10,
    margin: 5,
    height: 40,
    width: 40,
    resizeMode: "stretch",
    alignItems: "center",
  },
});
