import React from "react";
import { View, Text } from "react-native";
import { styles } from "./stylesheet";

export default function PEllipse({ bg, bg_active, isActive }) {
  return (
    <View style={styles.container}>
      <View
        style={
          isActive
            ? [styles.ellipseActive, { backgroundColor: bg_active }]
            : [styles.ellipse, { backgroundColor: bg }]
        }
      ></View>
    </View>
  );
}
