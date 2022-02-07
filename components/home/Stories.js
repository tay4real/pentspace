import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import React from "react";

const Stories = (allusers) => {
  return (
    <View style={{ marginBottom: 5, marginHorizontal: 10 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {allusers.users.length !== 0 &&
          allusers.users.map((story, index) => (
            <View key={index} style={{ alignItems: "center" }}>
              <Image source={{ uri: story.profilePic }} style={styles.story} />
              <Text>
                {story.username.length > 6
                  ? story.username.slice(0, 6) + "..."
                  : story.username}
              </Text>
            </View>
          ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  story: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 3,
    borderColor: "#ff8501",
  },
});
export default Stories;
