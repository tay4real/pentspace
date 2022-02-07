import React, { useEffect } from "react";
import { styles } from "./stylesheet";
import { SafeAreaView, View, Text, Image, StatusBar } from "react-native";
import img from "../../assets/Pictures/Stethoscope.png";
import PEllipse from "../../components/pEllipse/PEllipse";
import PButton from "../../components/pButton/PButton";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch } from "react-redux";

const Screen1 = ({ navigation, route }) => {
  const dispatch = useDispatch();

  const setBaseUrl = (url) =>
    dispatch({
      type: "SET_BASEURL",
      payload: url,
    });

  useEffect(() => {
    // setBaseUrl("http://172.27.55.43:4000/api");
    setBaseUrl("https://pentspace-api.herokuapp.com/api");
  }, []);
  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <Image style={styles.appImage} source={img} />
        <View style={styles.appTextContainer}>
          <Text style={styles.appTextTitle}>
            Connect With Health Care Service Providers Around You
          </Text>
          <Text style={styles.appTextSubTitle}>
            Get started and be able to find health care service providers to
            attend to you
          </Text>
        </View>
        <View style={styles.appSliderContainer}>
          <PEllipse isActive={true} />
          <PEllipse />
        </View>
        <View style={styles.buttonContainer}>
          <PButton
            title="Skip"
            width={"50%"}
            backgroundColor="#E5E5E5"
            color="#1935DE"
            onPress={() => {
              navigation.navigate("SignUp");
            }}
          />
          <PButton
            title="Next"
            iconRight={<AntDesign name="arrowright" size={24} color="white" />}
            color="#fff"
            width={"50%"}
            backgroundColor="#1935DE"
            onPress={() => {
              navigation.navigate("Screen2");
            }}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default Screen1;
