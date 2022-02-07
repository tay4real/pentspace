import React, { useEffect } from "react";
import { styles } from "./stylesheet";
import { SafeAreaView, View, Text, Image, StatusBar } from "react-native";
import img from "../../assets/Pictures/image2.png";
import PButton from "../../components/pButton/PButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const PentspaceUsage = ({ navigation, route }) => {
  const dispatch = useDispatch();
  let { apiBaseURL } = useSelector((state) => state.apiReducer);
  let { user } = useSelector((state) => state.userReducer);

  const setUserCategory = (user_category) =>
    dispatch({
      type: "SET_USER_CATEGORY",
      payload: user_category,
    });

  const setAlert = (data) =>
    dispatch({
      type: "ALERT_MSG",
      payload: data,
    });

  const setPatient = async () => {
    try {
      const accessToken = await AsyncStorage.getItem("@accessToken");
      const refreshToken = await AsyncStorage.getItem("@refreshToken");
      const res = await axios.put(
        `${apiBaseURL}/users/${user._id}`,
        {
          userCategory: "Patient",
          userId: user._id,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-type": "application/json",
          },
        }
      );

      if (res.data) {
        setUserCategory("Patient");
        navigation.navigate("Home");
      }
    } catch (error) {
      setAlert({
        successMsg: "",
        errorMsg: error.response.data.error,
      });
    }
  };

  const setHealthServiceProvider = async () => {
    try {
      const res = await axios.put(`${apiBaseURL}/users/${user._id}`, {
        userCategory: "Health Care Provider",
        userId: user._id,
      });

      if (res.data) {
        setUserCategory("Health Care Provider");
        navigation.navigate("Home");
      }
    } catch (error) {
      setAlert({
        successMsg: "",
        errorMsg: error.response.data.error,
      });
    }
  };

  // useEffect(() => {
  //   if (userCategory !== "") {
  //     navigation.navigate("Home");
  //   }
  // }, [userCategory, navigation]);

  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <Image style={styles.appImage} source={img} />
        <View style={styles.appTextContainer}>
          <Text
            style={[styles.appTextTitle, { paddingLeft: 90, paddingRight: 90 }]}
          >
            Welcome, {user.email}
          </Text>
          <Text
            style={[styles.appTextTitle, { paddingLeft: 90, paddingRight: 90 }]}
          >
            How Would You Like To Use PentSpace?
          </Text>
        </View>

        <View style={styles.buttonContainerVertical}>
          <PButton
            title="Provide Health Care Services"
            backgroundColor="#1935DE"
            color={"#fff"}
            width={"100%"}
            marginBottom={10}
            onPress={setHealthServiceProvider}
          />
          <PButton
            title="Find Health Care Services"
            backgroundColor="#1935DE"
            color={"#fff"}
            width={"100%"}
            onPress={setPatient}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default PentspaceUsage;
