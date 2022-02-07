import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  post: {
    display: "flex",
    flexDirection: "column",
  },
  profileContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  profileImg: {
    width: 30,
    height: 30,
    borderRadius: 30,
    resizeMode: "cover",
    marginRight: 8,
  },
  profileName: {
    fontWeight: "500",
    fontStyle: "normal",
    fontSize: 13,
    lineHeight: 15,
    color: "#000000",
  },
  postTextContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  postText: {
    color: "#333333",
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 15,
    marginBottom: 5,
  },
  postMedia: { marginBottom: 10 },
  postImg: {
    resizeMode: "cover",
    width: "100%",
  },
  commentContainer: {
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
  like: {
    width: 24,
    height: 24,
    flex: 2,
    marginRight: 8,
  },
  comment: {
    borderRadius: 6,
    flex: 10,
    backgroundColor: "#F2F2F2",
    paddingLeft: 12,
  },
  countsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  likesCount: {
    flexDirection: "row",
  },
  likeCircle: {
    width: 24,
    height: 24,
    borderRadius: 24,
    backgroundColor: "#4CA0E5",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
  commentCount: {
    flexDirection: "row",
  },
  showCommentsContainer: {
    width: "100%",
    padding: 10,
  },
});
