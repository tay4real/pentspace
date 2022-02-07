import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import CustomButton from "../pButton/CustomButton";
import selectImage from "../../assets/Icons/baseline_crop_original_black_24dp.png";
import selectGif from "../../assets/Icons/gif.png";
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
      <View
        style={{
          flexDirection: "row",
          width: "30%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TouchableOpacity >
          <Image source={selectImage} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={selectGif} />
        </TouchableOpacity>
      </View>

      <View style={{ width: "40%" }}>
        <CustomButton text="Post" />
      </View>
    </View>
  );
};

export default PBottomTabs;
