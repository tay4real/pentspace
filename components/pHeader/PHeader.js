import React from "react";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import { styles } from "./stylesheet";

const PHeader = ({
  iconLeft,
  title,
  iconRight,
  onPressBack,
  onPressDone,
  xOffset,
  yOffset,
  shadowColorIos,
  shadowOpacity,
  shadowRadius,
  elevation,
  shadowColorAndroid,
}) => {
  return (
    <View
      style={[
        {
          display: "flex",
          justifyContent: "space-between",
          alignContent: "center",
          height: 56,
          flexDirection: "row",
          backgroundColor: "white",
          padding: 10,
          shadowColor: "#171717",
          shadowOffset: { width: -2, height: 4 },
          shadowOpacity: 0.2,
          elevation: 10,
        },
      ]}
    >
      <TouchableOpacity activeOpacity={0.8} style={[]} onPress={onPressBack}>
        {iconLeft && iconLeft}
      </TouchableOpacity>
      <Text
        style={{
          alignItems: "center",
          justifyContent: "center",
          fontSize: 16,
          fontWeight: "bold",
        }}
      >
        {title}
      </Text>
      <TouchableOpacity activeOpacity={0.8} style={[]} onPress={onPressDone}>
        {iconRight && iconRight}
      </TouchableOpacity>
    </View>
  );
};

export default PHeader;
