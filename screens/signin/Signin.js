import React, { useState, useEffect } from "react";
import { styles } from "./stylesheet";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";


import CustomInput from "../../components/pInput/CustomInput";
import CustomButton from "../../components/pButton/CustomButton";
// import SocialSigninButton from "../../components/pButton/SocialSigninButtons";

import PButton from "../../components/pButton/PButton";
import { useForm, Controller } from "react-hook-form";

import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import { Divider } from "react-native-elements";

import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = ({ navigation, route }) => {
  let { apiBaseURL } = useSelector((state) => state.apiReducer);
  let { user, tokenpairs } = useSelector((state) => state.userReducer);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const [done, setDone] = useState(false);
  const [pending, setPending] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);

  const dispatch = useDispatch();

  const setUser = (user) =>
    dispatch({
      type: "LOGGED_IN",
      payload: user,
    });

  const setAlert = (data) =>
    dispatch({
      type: "ALERT_MSG",
      payload: data,
    });

  const onSignInPressed = async (data) => {
    // validate user
    setPending(true);
    // setDone(false);
    console.log(data);
    try {
      const res = await axios.post(`${apiBaseURL}/auth/login`, data);

      if (res.data) {
        console.log(res.data);
        await AsyncStorage.setItem(
          "@accessToken",
          res.data.tokenPairs.accessToken
        );

        await AsyncStorage.setItem(
          "@refreshToken",
          res.data.tokenPairs.refreshToken
        );

        setUser(res.data.user);

        // setDone(true);
        setPending(false);
        navigation.navigate("Home");
      }
    } catch (error) {
      setPending(false);
      // setDone(false);
      console.log(error.response.data.errorMsg);

      setErrorMsg(error.response.data.errorMsg);
    }
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate("ForgotPassword");
  };

  const onSignInGoogle = () => {
    navigation.navigate("Home");
  };

  const onSignInFacebook = () => {
    navigation.navigate("Home");
  };

  const onSignUpPress = () => {
    navigation.navigate("SignUp");
  };

  // useEffect(() => {
  //   if (done && user) {
  //     console.log("THis is user acc:", -user);
  //     navigation.navigate("Home");
  //   }
  // }, [done, user, navigation]);

  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.headerContainer}>
            <Text style={styles.header}>Sign In</Text>
          </View>
          {errorMsg !== "" && (
            <View>
              <Text style={{ padding: 5, color: "red", textAlign: "center" }}>
                {errorMsg}
              </Text>
            </View>
          )}
          <View style={styles.inputContainer}>
            <CustomInput
              name="email"
              placeholder="Email"
              control={control}
              rules={{ required: "Username is required" }}
            />

            <CustomInput
              name="password"
              placeholder="Password"
              secureTextEntry
              control={control}
              rules={{
                required: "Password is required",
                minLength: {
                  value: 3,
                  message: "Password should be minimum 3 characters long",
                },
              }}
            />
          </View>

          <View style={styles.buttonContainer}>
            {/* <PButton
              title="Sign in"
              backgroundColor="#1935DE"
              color={"#fff"}
              width={"100%"}
              onPress={handleSubmit(onSignInPressed)}
            />
             */}

            <CustomButton
              text="Sign In"
              onPress={handleSubmit(onSignInPressed)}
              pending={pending}
            />
          </View>

          <CustomButton
            text="Forgot password?"
            onPress={onForgotPasswordPressed}
            type="TERTIARY"
          />

          <View style={styles.seperatorContainer}>
            <Divider width={1} style={{ flex: 6 }} />
            <Text style={{ flex: 1, textAlign: "center" }}>or</Text>
            <Divider width={1} style={{ flex: 6 }} />
          </View>

          <View style={styles.buttonContainer}>
            <PButton
              title="Sign In With Google"
              iconLeft={
                <Image
                  source={require("../../assets/Icons/Google_Icon.png")}
                  style={{
                    width: 24,
                    height: 24,
                  }}
                />
              }
              backgroundColor="#E5E5E5"
              color="#1935DE"
              borderColor={"#1935DE"}
              borderWidth={1}
              width={"100%"}
              onPress={onSignInGoogle}
            />
          </View>
          <View style={styles.buttonContainer}>
            <PButton
              title="Sign In With Facebook"
              iconLeft={
                // <Entypo name="facebook-with-circle" size={24} color="blue" />
                <Image
                  source={require("../../assets/Icons/Facebook_Icons.png")}
                  style={{
                    width: 24,
                    height: 24,
                  }}
                />
              }
              backgroundColor="#E5E5E5"
              color="#1935DE"
              borderColor={"#1935DE"}
              borderWidth={1}
              width={"100%"}
              onPress={onSignInFacebook}
            />
          </View>
          {/* <View style={styles.loginContainer}>
            <Text>Do not have an accouunt?</Text>
            <TouchableOpacity onPress={onSignUpPress}>
              <Text style={styles.loginText}>Register</Text>
            </TouchableOpacity>
          </View> */}
          <CustomButton
            text="Don't have an account? Create one"
            onPress={onSignUpPress}
            type="TERTIARY"
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Login;
