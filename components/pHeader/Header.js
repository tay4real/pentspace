import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { styles } from "./stylesheet";

import logo from "../../assets/Icons/pentspace_logo.png";
import podcast from "../../assets/Icons/baseline_podcasts_black_24dp.png";
import add_circle from "../../assets/Icons/baseline_add_circle_outline_black_24dp.png";
import chat from "../../assets/Icons/baseline_chat_bubble_outline_black_24dp.png";

const Header = ({ onPressBroadcast, onPressNewPost, onPressMessages }) => {
  return (
    <View style={styles.home_header}>
      <View style={styles.home_logo}>
        <Image source={logo} />
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity activeOpacity={0.8} onPress={onPressBroadcast}>
          <Image source={podcast} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} onPress={onPressNewPost}>
          <Image source={add_circle} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} onPress={onPressMessages}>
          <Image source={chat} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
