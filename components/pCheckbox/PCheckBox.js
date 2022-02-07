import React from "react";
import { View, Text } from "react-native";
import { styles } from "./stylesheet";
import Checkbox from "expo-checkbox";

const PCheckBox = ({ color, value, onValueChange, label, errMessage }) => {
  return (
    <View>
      <View style={[styles.checkboxContainer]}>
        <Checkbox
          style={styles.checkbox}
          value={value}
          onValueChange={onValueChange}
          color={value ? color : undefined}
        />
        <Text style={styles.label}>
          {label.map((lab, key) => (
            <Text key={key} style={[lab.color && { color: lab.color }]}>
              {lab.text}
            </Text>
          ))}
        </Text>
      </View>
      <View>
        {errMessage && (
          <Text style={{ color: "#FD5241", padding: 5 }}>{errMessage}</Text>
        )}
      </View>
    </View>
  );
};

export default PCheckBox;
