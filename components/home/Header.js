import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

import logo from "../../assets/Icons/pentspace_logo.png";
import podcast from "../../assets/Icons/baseline_podcasts_black_24dp.png";
import add_post from "../../assets/Icons/baseline_add_circle_outline_black_24dp.png";
import chat from "../../assets/Icons/baseline_chat_bubble_outline_black_24dp.png";

const Header = ({
  onPressBroadcast,
  onPressNewPost,
  onPressMessages,
  messages,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={logo} style={styles.logo} />
      </TouchableOpacity>

      <View style={styles.iconsContainer}>
        <TouchableOpacity activeOpacity={0.8} onPress={onPressBroadcast}>
          <Image source={podcast} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} onPress={onPressNewPost}>
          <Image source={add_post} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} onPress={onPressMessages}>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>10</Text>
          </View>
          <Image source={chat} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
  },

  iconsContainer: {
    flexDirection: "row",
  },

  logo: {
    width: 80,
    height: 50,
    resizeMode: "cover",
  },

  icon: {
    width: 30,
    height: 30,
    marginLeft: 10,
    resizeMode: "contain",
  },
  unreadBadge: {
    backgroundColor: "#ff3230",
    position: "absolute",
    left: 20,
    bottom: 18,
    width: 25,
    height: 18,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
  },

  unreadBadgeText: {
    color: "white",
    fontWeight: "600",
  },
});
export default Header;
