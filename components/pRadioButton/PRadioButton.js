import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { styles } from "./stylesheet";

const PRadioButton = ({ data, onSelect }) => {
  const [userOption, setUserOption] = useState(null);
  const selectHandler = (value) => {
    onSelect(value);
    setUserOption(value);
  };
  return (
    <View>
      {data &&
        data.map((item, key) => {
          return (
            <Pressable
              key={key}
              onPress={() => selectHandler(item.value)}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 20,
              }}
            >
              <Text> {item.value}</Text>
              <View
                style={
                  item.value === userOption
                    ? styles.selected
                    : styles.unselected
                }
              ></View>
            </Pressable>
          );
        })}
    </View>
  );
};

export default PRadioButton;
