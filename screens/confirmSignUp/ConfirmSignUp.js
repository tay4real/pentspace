import React, { useState, useEffect } from "react";
import { styles } from "./stylesheet";
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { useForm } from "react-hook-form";
import AsyncStorage from "@react-native-async-storage/async-storage";

import CustomInput from "../../components/pInput/CustomInput";
import CustomButton from "../../components/pButton/CustomButton";
import PButton from "../../components/pButton/PButton";

import { useDispatch, useSelector } from "react-redux";

import AlertMessage from "../../components/modals/AlertMessage";

// import firebase from "firebase";

import axios from "axios";

const ConfirmSignUp = ({ navigation, route }) => {
  const { control, handleSubmit } = useForm();
  const [successMsg, setSuccessMsg] = useState(route.params.successMsg || "");
  const dispatch = useDispatch();
  let { apiBaseURL } = useSelector((state) => state.apiReducer);

  let { signUp } = useSelector((state) => state.newRegistrationReducer);

  const [errorMsg, setErrorMsg] = useState(false);
  const [pending, setPending] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);

  const completeRegistration = (user) =>
    dispatch({
      type: "LOGGED_IN",
      payload: user,
    });

  const clearSignUp = (data) =>
    dispatch({
      type: "SIGN_UP",
      payload: data,
    });

  const setAlert = (data) =>
    dispatch({
      type: "ALERT_MSG",
      payload: data,
    });

  const handleResendCode = async () => {
    try {
      setSuccessMsg("");
      const res = await axios.post(`${apiBaseURL}/auth/signup`, {
        email: signUp.email,
      });

      if (res.data) {
        setSuccessMsg("Confirmation Code has been resent to your Email");
      }
    } catch (error) {
      console.log(error.response.data.errorMsg);
      setErrorMsg(error.response.data.errorMsg);
    }
  };

  const onConfirmPressed = async (data) => {
    setPending(true);

    try {
      const res = await axios.post(`${apiBaseURL}/auth/signup/verify`, {
        email: signUp.email,
        password: signUp.password,
        otp: data.code,
      });

      console.log(res.data);
      if (res.data) {
        // firebase
        //   .auth()
        //   .createUserWithEmailAndPassword({
        //     email: signUp.email,
        //     password: signUp.password,
        //   })
        //   .then((result) => {
        //     console.log(result);

           
        //   })
        //   .catch((error) => {
        //     console.log(error);
        //   });

          clearSignUp({
            signUp: {
              email: "",
              password: "",
            },
          });

          completeRegistration(res.data.user);

          navigation.navigate("PentspaceUsage");
      }

      setPending(false);
    } catch (error) {
      setPending(false);
      console.log(error.response.data.errorMsg);

      setErrorMsg(error.response.data.errorMsg);
    }
  };

  useEffect(() => {
    if (successMsg !== "") {
      setTimeout(() => {
        setSuccessMsg("");
      }, 3000);
    }

    if (errorMsg !== "") {
      setTimeout(() => {
        setErrorMsg("");
      }, 3000);
    }
  }, [successMsg, errorMsg]);

  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.headerContainer}>
            <Text style={styles.header}>Confirm your email</Text>
          </View>

          {successMsg !== "" && (
            <View style={{ padding: 5 }}>
              <Text style={{ color: "green" }}>{successMsg}</Text>
            </View>
          )}
          {errorMsg !== "" && (
            <View style={{ padding: 5 }}>
              <Text style={{ color: "#FD5241" }}>{errorMsg}</Text>
            </View>
          )}
          <View style={styles.inputContainer}>
            <CustomInput
              name="code"
              control={control}
              placeholder="Enter your confirmation code"
              rules={{
                required: "Confirmation code is required",
              }}
            />
          </View>

          <View style={styles.buttonContainer}>
            <CustomButton
              text="Confirm"
              onPress={handleSubmit(onConfirmPressed)}
              pending={pending}
            />
          </View>

          <View style={styles.loginContainer}>
            <TouchableOpacity onPress={handleResendCode}>
              <Text
                style={[styles.loginText, { fontWeight: "bold", fontSize: 16 }]}
              >
                Resend Code
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.loginText}>Back to Sign In</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default ConfirmSignUp;
