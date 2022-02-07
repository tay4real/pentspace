import React from "react";
import { TextInput, View, Text } from "react-native";
import { styles } from "./stylesheet";
import { Controller } from "react-hook-form";

export default function PInput({
  keyboardType,
  placeholder,
  value,
  onChangeText,
  color,
  height,
  width,
  backgroundColor,
  borderRadius,
  borderBottomWidth,
  marginTop,
  padding,
  secureTextEntry,
  Icon,
  label,
  labelmargin,
  InputIcon,
  flex,
  errMessage,
}) {
  return (
    <View>
      <View
        style={[styles.labelContainer, labelmargin && { margin: labelmargin }]}
      >
        {Icon && Icon}
        <Text style={styles.label}>{label && label}</Text>
      </View>
      <View
        style={[
          InputIcon && {
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            backgroundColor,
            borderRadius,
            paddingLeft: 10,
          },
        ]}
      >
        {InputIcon && InputIcon}
        <TextInput
          style={[
            styles.input,
            color && { color },
            backgroundColor && { backgroundColor },
            marginTop && { marginTop },
            borderRadius && { borderRadius },
            borderBottomWidth && { borderBottomWidth },
            height && { height },
            width && { width },
            padding && { paddingTop: padding, paddingBottom: padding },
            errMessage && { borderColor: "#fefefe" },
          ]}
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
        />
      </View>
      <View>
        {errMessage && (
          <Text style={{ color: "#FD5241", padding: 10 }}>{errMessage}</Text>
        )}
      </View>
    </View>
  );
}
