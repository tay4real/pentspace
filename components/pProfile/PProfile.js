import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./stylesheet";

const PProfile = ({ name, imageSrc, Icon }) => {
  return (
    <View style={styles.profileContainer}>
      <Image source={imageSrc} style={styles.profileImage} />
      <View style={styles.profileIconContainer}>{Icon && Icon}</View>
      <Text style={styles.profileName}>{name}</Text>
    </View>
  );
};

export default PProfile;
