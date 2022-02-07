import { View, Text, Image } from "react-native";
import React from "react";
import PHeader from "../../components/pHeader/PHeader";
import PEllipse from "../../components/pEllipse/PEllipse";
import Notification from "../../components/notification/Notification";

import { FontAwesome5 } from "@expo/vector-icons";

// for testing
import profile from "../../assets/Pictures/profile2.jpg";

const Notifications = ({ navigation, route }) => {
  return (
    <View>
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignContent: "center",
          height: 56,
          flexDirection: "row",
          backgroundColor: "white",
          padding: 20,
          shadowColor: "#171717",
          shadowOffset: { width: -2, height: 4 },
          shadowOpacity: 0.2,
          elevation: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <FontAwesome5
            name="long-arrow-alt-left"
            style={{ marginRight: 10 }}
            size={24}
            color="black"
          />
          <Text style={{ fontWeight: "600", fontSize: 16 }}>Notifications</Text>
        </View>
      </View>
      <Notification
        profile={profile}
        sender={"Orange Dentals"}
        message={"sent you a message"}
        onlinesStatus={"online"}
        bg_color={"#000000"}
        time_sent={"3min "}
      />
    </View>
  );
};

export default Notifications;
