import React from "react";
import { View, TouchableOpacity, Image, ActivityIndicator } from "react-native";
import CustomButton from "../../components/pButton/CustomButton";
import selectImage from "../../assets/Icons/baseline_crop_original_black_24dp.png";
import selectGif from "../../assets/Icons/gif.png";
import camera from "../../assets/Icons/camera_icon.png";

const PBottomTabs = ({ showImagePicker, onPressPost, openCamera, pending }) => {
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
          width: "40%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={openCamera}>
          <Image source={camera} style={{ width: 30, height: 30 }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={showImagePicker}>
          <Image source={selectImage} style={{ width: 30, height: 30 }} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={selectGif} style={{ width: 30, height: 30 }} />
        </TouchableOpacity>
      </View>

      <View style={{ width: "40%" }}>
        <CustomButton text="Post" onPress={onPressPost} pending={pending} />
      </View>
    </View>
  );
};

export default PBottomTabs;
