import React from "react";
import { View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { styles } from "./stylesheet";

const PPicker = ({ pickerItems, pickerHeight, pickerWidth, selectedValue }) => {
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={
          (styles.picker,
          pickerHeight && { height: pickerHeight },
          pickerWidth && { width: pickerWidth })
        }
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        {pickerItems &&
          pickerItems.map((item, key) => (
            <Picker.Item  label={item.label} value={item.value} />
          ))}
      </Picker>
    </View>
  );
};

export default PPicker;
