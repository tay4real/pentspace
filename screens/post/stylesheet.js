import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
    height: "100%",
  },
  scrollBody: {
    paddingLeft: 40,
    paddingRight: 40,
  },
  iconLeft: {
    fontSize: 30,
    color: "black",
  },
  iconRight: {
    fontSize: 30,
    color: "black",
  },
  profileIcon: {
    color: "white",
    fontSize: 20,
  },
  paddingRight: {
    paddingRight: 10,
  },
  postContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
    paddingTop: 10,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 20,
  },
  post: {
    borderRadius: 6,
    flex: 10,
    backgroundColor: "#F2F2F2",
    paddingLeft: 12,
  },
  profileImg: {
    width: 40,
    height: 40,
    borderRadius: 40,
    resizeMode: "cover",
    marginRight: 8,
  },
  imageContainer: {
    padding: 30,
  },
  image: {
    width: 400,
    height: 300,
    resizeMode: "contain",
    alignSelf: "center",
  },
});
