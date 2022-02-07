import React from "react";
import { styles } from "./stylesheet";
import { SafeAreaView, View, Text, Image, StatusBar } from "react-native";
import img from "../../assets/Pictures/image1.png";
import PEllipse from "../../components/pEllipse/PEllipse";
import PButton from "../../components/pButton/PButton";

const Screen2 = ({ navigation, route }) => {
  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <Image style={styles.appImage} source={img} />
        <View style={styles.appTextContainer}>
          <Text style={styles.appTextTitle}>
            Connect With People That Need Your Health Care Services
          </Text>
          <Text style={styles.appTextSubTitle}>
            Reach out to an audience of people that need your services around
            you
          </Text>
        </View>
        <View style={styles.appSliderContainer}>
          <PEllipse />
          <PEllipse isActive={true} />
        </View>
        <View style={styles.buttonContainer}>
          <PButton
            title="Get Started"
            backgroundColor="#1935DE"
            color={"#fff"}
            width={"100%"}
            onPress={() => {
              navigation.navigate("SignUp");
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default Screen2;
