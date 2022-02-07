import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { styles } from "./stylesheet";
import { AntDesign } from "@expo/vector-icons";
import useToggle from "../../hooks/useToggle";
import thumbs_up from "../../assets/Icons/baseline_thumb_up_off_alt_black_24dp.png";

// test purpose
import profile2 from "../../assets/Pictures/profile2.jpg";

const CommentList = ({
  profileImage,
  profileName,
  comment,
  time_elasped,
  like_count,
  setLike,
  userProfileImage,
}) => {
  const [showComments, setShowComments] = useToggle();
  return (
    <View style={styles.profileContainer}>
      <Image source={profileImage} style={styles.profileImg} />
      <View style={{ flex: 11 }}>
        <View
          style={{
            flexDirection: "column",
            backgroundColor: "#F2F2F2",
            borderRadius: 8,
            padding: 10,
          }}
        >
          <Text style={styles.profileName}>{profileName}</Text>
          <Text style={{ color: "#555" }}>{comment}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 4,
            justifyContent: "space-around",
          }}
        >
          <Text>{time_elasped && time_elasped}</Text>
          <TouchableOpacity onPress={setLike}>
            <Text>Like</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={setShowComments}>
            <Text>Reply</Text>
          </TouchableOpacity>

          <View style={styles.likesCount}>
            <Text style={{ paddingRight: 2 }}>{like_count && like_count}</Text>
            <View style={styles.likeCircle}>
              <AntDesign name="like1" size={15} color="white" />
            </View>
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
                profileName={"Orange Dentals"}
                time_elasped={"2min"}
                comment={"true talk"}
                like_count={1}
                userProfileImage={profile2}
              />
            </View>
          </>
        )}
      </View>
    </View>
  );
};

export default CommentList;
