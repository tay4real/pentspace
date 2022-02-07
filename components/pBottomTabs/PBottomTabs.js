import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import logo from "../../assets/Icons/logo_icon.png";
import home from "../../assets/Icons/home.png";
import notification from "../../assets/Icons/notification.png";
import search from "../../assets/Icons/search.png";

const PBottomTabs = ({ onPressNotification }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        margin: 10,
        marginHorizontal: 30,
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <TouchableOpacity>
        <Image source={home} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={search} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressNotification}>
        <Image source={notification} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={logo} />
      </TouchableOpacity>
    </View>
  );
};

export default PBottomTabs;
