import { View, Text, Image } from "react-native";
import { Divider } from "react-native-elements";

const Notification = ({
  profile,
  sender,
  message,
  time_sent,
  onlinesStatus,
  bg_color,
}) => {
  return (
    <>
      <View style={{ flexDirection: "row", width: "100%", padding: 20 }}>
        <Image
          source={profile}
          style={{
            width: 24,
            height: 24,
            borderRadius: 24,
            resizeMode: "cover",
            marginRight: 10,
          }}
        />
        <View
          style={{
            flexDirection: "column",
            flex: 11,
          }}
        >
          <View>
            <Text style={{ fontWeight: "500", fontSize: 13 }}>{sender}</Text>
            <Text style={{ fontWeight: "400", fontSize: 13 }}>{message}</Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Text style={{ marginRight: 10 }}>{time_sent}</Text>
            <View
              style={{
                backgroundColor: "#000000",
                width: 7,
                height: 7,
                borderRadius: 7,
              }}
            />
            <Text style={{ marginLeft: 10, marginRight: 10 }}>
              {onlinesStatus}
            </Text>

            <View
              style={{
                backgroundColor: bg_color,
                width: 7,
                height: 7,
                borderRadius: 7,
              }}
            />
          </View>
        </View>
      </View>
      <Divider width={1} />
    </>
  );
};

export default Notification;
