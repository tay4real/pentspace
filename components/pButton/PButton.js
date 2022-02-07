import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { styles } from "./stylesheet";

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

export default function PButton({
  onPress,
  title,
  titleSize,
  titleFontWeight,
  titleTextTransform,
  size,
  backgroundColor,
  color,
  width,
  isDisabled,
  marginBottom,
  borderColor,
  borderWidth,
  iconRight,
  iconLeft,
  flex,
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[
        styles.button,
        size === "sm" && {
          paddingHorizontal: 6,
          paddingVertical: 6,
          elevation: 6,
        },
        isDisabled && styles.appButtonDisabled,
        backgroundColor && { backgroundColor },
        width && { width },
        marginBottom && { marginBottom },
        borderColor && { borderColor },
        borderWidth && { borderWidth },
        flex && { flex },
      ]}
      onPress={onPress}
      disabled={isDisabled}
    >
      <View style={styles.titleContainer}>
        {iconLeft && iconLeft}
        <Text
          style={[
            styles.appButtonText,
            color && { color },
            iconLeft && styles.iconLeft,
            iconRight && styles.iconRight,
            titleSize && { fontSize: titleSize },
            titleFontWeight && { fontWeight: titleFontWeight },
            titleTextTransform && { textTransform: titleTextTransform },
          ]}
        >
          {title}
        </Text>
        {iconRight && iconRight}
      </View>
    </TouchableOpacity>
  );
}
