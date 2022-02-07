import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import CustomInput from "../../components/pInput/CustomInput";
import { useForm, Controller } from "react-hook-form";

const postFooterIcons = [
  {
    name: "Like",
    imageUrl:
      "https://img.icons8.com/material-outlined/96/000000/facebook-like--v1.png",
    likedImageUrl: "img.icons8.com/material/96/4a90e2/thumb-up--v1.png",
  },
  {
    name: "Share",
    imageUrl: "https://img.icons8.com/material-rounded/96/000000/share.png",
  },
];

const Post = ({ post, comment, onChangeComment }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log("image path=>", post.postImage[0]);
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <Caption post={post} />
      {post.postImage[0] !== undefined && (
        <PostImage imgPath={post.postImage[0]} />
      )}
      <View style={{ marginHorizontal: 15, marginTop: 15 }}>
        <PostFooter
          comment={comment}
          onChangeComment={onChangeComment}
          control={control}
        />
        {post.likes.length !== 0 && <Likes likes={post.likes.length} />}
        <CommentsSection post={post} />
        {post.comments.length !== 0 && <Comments />}
      </View>
    </View>
  );
};

const PostHeader = ({ post }) => {
  console.log(post.user[0]);
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 5,
        marginHorizontal: 10,
        alignItems: "center",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image source={{ uri: post.user[0].profilePic }} style={styles.story} />

        <Text style={{ color: "#888", marginLeft: 5, fontWeight: "700" }}>
          {post.user[0].username}
        </Text>
      </View>

      <TouchableOpacity>
        <Text style={{ color: "#000", fontWeight: "bold", fontSize: 20 }}>
          ...
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const PostImage = ({ imgPath }) => (
  <View style={{ width: "100%", height: 450 }}>
    <Image
      source={{ uri: imgPath }}
      style={{ height: "100%", resizeMode: "cover" }}
    />
  </View>
);

const PostFooter = ({ comment, onChangeComment, control }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[0].imageUrl} />

    <CustomInput
    
      name="comment"
      placeholder="Leave a comment"
      control={control}
    />
    <Icon imgStyle={[styles.footerIcon]} imgUrl={postFooterIcons[1].imageUrl} />
  </View>
);

const Icon = ({ imgStyle, imgUrl }) => (
  <TouchableOpacity>
    <Image style={imgStyle} source={{ uri: imgUrl }} />
  </TouchableOpacity>
);

const Likes = ({ likes }) => (
  <View style={{ flexDirection: "row", marginTop: 4 }}>
    <Text style={{ fontWeight: "600" }}>
      {likes.toLocaleString("en")} likes
    </Text>
  </View>
);

const Caption = ({ post }) => (
  <View style={{ marginTop: 5, marginHorizontal: 20, marginVertical: 10 }}>
    <Text>
      <Text style={{ marginLeft: 5 }}> {post.desc}</Text>
    </Text>
  </View>
);
const CommentsSection = ({ post }) => (
  <Text style={{ color: "gray" }}>
    {
      <View style={{ marginTop: 5 }}>
        {!!post.comments.length && (
          <Text style={{ color: "gray" }}>
            View {post.comments.length > 1 ? "all" : ""}
            {post.comment.length}
            {post.comment.length > 1 ? "comments" : "comment"}
          </Text>
        )}
      </View>
    }
  </Text>
);

const Comments = ({ post }) => (
  <>
    {post.comments.map((commnets, index) => (
      <View key={index} style={{ flexDirection: "row", marginTop: 5 }}>
        <Text>
          <Text style={{ fontWeight: "600" }}>{comment.user}</Text>{" "}
          <Text>{comment.comment}</Text>
        </Text>
      </View>
    ))}
  </>
);

const styles = StyleSheet.create({
  story: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.6,
    borderColor: "#ff8501",
  },
  footerIcon: {
    width: 33,
    height: 33,
  },
  input: {
    flex: 1,
    borderColor: "#777",
    borderWidth: 2,
    borderRadius: 8,
    marginHorizontal: 3,
    paddingHorizontal: 10,
  },
});
export default Post;
