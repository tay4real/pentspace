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

import PInput from "../../components/pInput/PInput";
import PCheckBox from "../../components/pCheckbox/PCheckBox";
import PButton from "../../components/pButton/PButton";
import { Divider } from "react-native-elements";

import { useDispatch } from "react-redux";

import axios from "axios";

const ForgotPassword = ({ navigation, route }) => {
  const [email, onChangeEmail] = useState("");

  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [pending, setPending] = useState(false);

  const onResendPress = () => {
    console.log("SEnd Code");
  };

  // const dispatch = useDispatch();
  // const setUser = (user) =>
  //   dispatch({
  //     type: "LOGGED_IN",
  //     payload: user,
  //   });

  // const api_url = "https://pentspace-api.herokuapp.com/api";

  // const handleRegister = async () => {
  //   setPending(true);

  //   if (isChecked) {
  //     if (email === "" || password === "") {
  //       setPending(false);
  //       setError("Enter your Email and Password to register");
  //     } else if (password !== "" && confirmPassword === password) {
  //       setPending(true);
  //       setError(null);

  //       try {
  //         const res = await axios.post(`${api_url}/auth/register`, {
  //           email,
  //           password,
  //           userCategory,
  //         });

  //         if (res.data) {
  //           setUser(res.data);
  //           setSuccess("User account created successfuly!");
  //         }
  //         onChangePassword("");
  //         onChangeConfirmPassword("");
  //         onChangeEmail("");
  //         setPending(false);
  //       } catch (error) {
  //         setPending(false);
  //         setError(error.response.data);
  //       }
  //     } else {
  //       setError(
  //         "Reenter your password: Password and Confirm Password do not match"
  //       );
  //     }
  //   } else {
  //     setError("Agree to terms and conditions to continue");
  //   }
  // };

  // useEffect(() => {
  //   if (success && userCategory === "Patient") {
  //     navigation.navigate("Home");
  //   } else if (success && userCategory === "Health Care Provider") {
  //     navigation.navigate("Home");
  //   }
  // }, [success, userCategory, navigation]);

  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.headerContainer}>
            <Text style={styles.header}>Reset your password</Text>
          </View>

          <View style={styles.inputContainer}>
            <PInput
              placeholder={"Email"}
              color={"#333333"}
              onChangeText={onChangeEmail}
              value={email}
            />
          </View>

          <View style={styles.buttonContainer}>
            <PButton
              title="Send"
              backgroundColor="#1935DE"
              color={"#fff"}
              width={"100%"}
              onPress={handleRegister}
            />
          </View>

          <View style={styles.loginContainer}>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.loginText}>Back to Sign In</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default ForgotPassword;
