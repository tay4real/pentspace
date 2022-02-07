import React, { useState } from "react";
import { SafeAreaView, View, Text, StatusBar } from "react-native";
import PHeader from "../../components/pHeader/PHeader";
import { styles } from "./stylesheet";

import { MaterialIcons, Ionicons } from "@expo/vector-icons";

import PInput from "../../components/pInput/PInput";

import PButton from "../../components/pButton/PButton";

const Contact = ({ navigation, route }) => {
  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <PHeader
          title={"Contact options"}
          iconLeft={<MaterialIcons name="arrow-back" style={styles.iconLeft} />}
          iconRight={<MaterialIcons name="done" style={styles.iconRight} />}
          onPressBack={() => {
            navigation.navigate("EditHealthCareProvider");
          }}
          onPressDone={() => {
            navigation.navigate("Home");
          }}
        />

        <View style={{ paddingLeft: 40, paddingRight: 40 }}>
          <Text
            style={{
              fontWeight: "500",
              fontSize: 16,
              paddingTop: 8,
              lineHeight: 15,
              marginTop: 20,
              marginBottom: 20,
            }}
          >
            Public Business Information
          </Text>
        </View>
        <View style={styles.scrollBody}>
          <PInput
            Icon={
              <MaterialIcons
                name="mail-outline"
                style={[styles.iconLeft, styles.paddingRight]}
              />
            }
            label={"Email"}
            labelmargin={8}
            backgroundColor={"#E5E5e5"}
            marginTop={-10}
            height={35}
            borderRadius={-4}
            borderBottomWidth={1}
          />
          <PInput
            Icon={
              <MaterialIcons
                name="smartphone"
                style={[styles.iconLeft, styles.paddingRight]}
              />
            }
            label={"Phone"}
            labelmargin={8}
            backgroundColor={"#E5E5e5"}
            marginTop={-10}
            height={35}
            borderRadius={-4}
            borderBottomWidth={1}
          />
          <PInput
            Icon={
              <Ionicons
                name="logo-whatsapp"
                style={[styles.iconLeft, styles.paddingRight]}
              />
            }
            label={"Whatsapp business phone"}
            labelmargin={8}
            backgroundColor={"#E5E5e5"}
            marginTop={-10}
            height={35}
            borderRadius={-4}
            borderBottomWidth={1}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingLeft: 40,
            paddingRight: 40,
            marginTop: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Ionicons
              name="location-outline"
              style={[styles.iconRight, { paddingLeft: 5, marginRight: 5 }]}
            />
            <Text
              style={{
                fontWeight: "500",
                fontSize: 16,
              }}
            >
              Location
            </Text>
          </View>

          <PButton
            iconRight={
              <MaterialIcons name="chevron-right" style={styles.iconRight} />
            }
            backgroundColor={"#E5E5e5"}
            titleFontWeight={"400"}
            titleTextTransform={"none"}
            onPress={() => {
              navigation.navigate("Location");
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default Contact;
