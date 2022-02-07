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

import PCheckBox from "../../components/pCheckbox/PCheckBox";
import PButton from "../../components/pButton/PButton";
import { Divider } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import axios from "axios";

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUp = ({ navigation, route }) => {
  const { control, handleSubmit, watch } = useForm();
  const pwd = watch("password");

  const dispatch = useDispatch();
  let { apiBaseURL } = useSelector((state) => state.apiReducer);

  const [isChecked, setChecked] = useState(false);
  const [isCheckedError, setCheckedError] = useState(null);
  const [error, setError] = useState(false);

  const [done, setDone] = useState(false);
  const [pending, setPending] = useState(false);

  const onTermsOfUsePressed = () => {
    console.warn("onTermsOfUsePressed");
  };

  const onPrivacyPressed = () => {
    console.warn("onPrivacyPressed");
  };

  const startRegistration = (data) =>
    dispatch({
      type: "SIGN_UP",
      payload: data,
    });

  const setAlert = (data) =>
    dispatch({
      type: "ALERT_MSG",
      payload: data,
    });

  const onRegisterPressed = async (data) => {
    setPending(true);
    setDone(false);

    if (!isChecked) {
      setCheckedError("Agree to terms and conditions to continue");
    } else {
      setCheckedError(null);

      try {
        const res = await axios.post(`${apiBaseURL}/auth/signup`, {
          email: data.email,
        });

        if (res.data) {
          startRegistration({
            signUp: {
              email: data.email,
              password: data.password,
            },
          });
          console.log(res.data.successMsg);
          setPending(false);
          navigation.navigate("ConfirmSignUp", {
            successMsg: res.data.successMsg,
          });
        }
      } catch (error) {
        setPending(false);
        console.log(error.response.data.errorMsg);
        setError(error.response.data.errorMsg);
      }
    }
  };

  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.headerContainer}>
            <Text style={styles.header}>Create a </Text>
            <Text style={styles.header}>New Account</Text>
          </View>

          {error !== "" && (
            <View>
              <Text style={{ padding: 5, color: "red", textAlign: "center" }}>
                {error}
              </Text>
            </View>
          )}
          <View style={styles.inputContainer}>
            <CustomInput
              name="email"
              control={control}
              placeholder="Email"
              rules={{
                required: "Email is required",
                pattern: { value: EMAIL_REGEX, message: "Email is invalid" },
              }}
            />
            <CustomInput
              name="password"
              control={control}
              placeholder="Password"
              secureTextEntry
              rules={{
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password should be at least 8 characters long",
                },
              }}
            />
            <CustomInput
              name="password-repeat"
              control={control}
              placeholder="Repeat Password"
              secureTextEntry
              rules={{
                validate: (value) => value === pwd || "Password do not match",
              }}
            />
          </View>

          <PCheckBox
            onValueChange={setChecked}
            value={isChecked}
            color={"#4630EB"}
            label={[
              { text: "I agree to the ", color: "" },
              { text: "Terms and Conditions ", color: "#1935DE" },
              { text: "and ", color: "" },
              { text: "Privacy Policy", color: "#1935DE" },
            ]}
            errMessage={isCheckedError}
          />

          <View style={styles.buttonContainer}>
            <CustomButton
              text="Create Account"
              onPress={handleSubmit(onRegisterPressed)}
              pending={pending}
            />
          </View>

          <View style={styles.seperatorContainer}>
            <Divider width={1} style={{ flex: 6 }} />
            <Text style={{ flex: 1, textAlign: "center" }}>or</Text>
            <Divider width={1} style={{ flex: 6 }} />
          </View>
          <View style={styles.buttonContainer}>
            <PButton
              title="Sign Up With Google"
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
              onPress={() => {
                navigation.navigate("EditHealthCareProvider");
              }}
            />
          </View>
          <View style={styles.buttonContainer}>
            <PButton
              title="Sign Up With Facebook"
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
              onPress={() => {
                navigation.navigate("Screen3");
              }}
            />
          </View>
          <View style={styles.loginContainer}>
            <Text>Already have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
              <Text style={styles.loginText}>Log in</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default SignUp;
