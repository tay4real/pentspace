import { View, Image, Text, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./stylesheet";
import thumbs_up from "../../assets/Icons/baseline_thumb_up_off_alt_black_24dp.png";
import { TextInput } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import CommentList from "../comment/CommentList";
import useToggle from "../../hooks/useToggle";

// test purpose
import profile2 from "../../assets/Pictures/profile2.jpg";

const Post = ({
  userProfileImage,
  profileImage,
  profileName,
  postText,
  postImage,
  like_count,
  comment_count,
}) => {
  const [showComments, setShowComments] = useToggle();
  return (
    <View style={styles.post}>
      <View style={styles.profileContainer}>
        {<Image source={profileImage} style={styles.profileImg} />}
        <Text style={styles.profileName}>{profileName}</Text>
      </View>
      <View style={styles.postTextContainer}>
        <Text style={styles.postText}>{postText}</Text>
      </View>
      <View style={styles.postMedia}>
        {postImage && <Image source={postImage} style={styles.postImg} />}
      </View>
      <View style={styles.countsContainer}>
        <View>
          {like_count && (
            <View style={styles.likesCount}>
              <View style={styles.likeCircle}>
                <AntDesign name="like1" size={15} color="white" />
              </View>
              <Text>{like_count}</Text>
            </View>
          )}
        </View>
        <View>
          {comment_count && (
            <TouchableOpacity
              style={styles.commentCount}
              onPress={setShowComments}
            >
              <Text style={{ marginRight: 5 }}>{comment_count}</Text>
              <Text>comments</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
      {showComments && (
        <>
          <View style={styles.commentContainer}>
            <Image source={userProfileImage} style={styles.profileImg} />
            <TextInput style={styles.comment} placeholder="Leave a comment" />
          </View>
          <View style={styles.showCommentsContainer}>
            <CommentList
              profileImage={profile2}
              comment={"Thats true"}
              profileName={"Adebisi Abraham"}
              time_elasped={"2min"}
              like_count={1}
              userProfileImage={profile2}
            />
            <CommentList
              profileImage={profile2}
              comment={"Yes o"}
              profileName={"Chris Brown"}
              time_elasped={"2h"}
              like_count={1}
              userProfileImage={profile2}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default Post;
