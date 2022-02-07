import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  profileImg: {
    flex: 1,
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
  commentContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    marginBottom: 1,
    paddingTop: 5,
    paddingBottom: 1,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 8,
  },
  comment: {
    borderRadius: 6,
    flex: 10,
    backgroundColor: "#F2F2F2",
    paddingLeft: 11,
  },

  like: {
    width: 24,
    height: 24,
    flex: 1,
    marginRight: 8,
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
    alignItems: "center",
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
  },
});
