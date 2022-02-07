import React, { useState, useCallback, useEffect } from "react";
import { SafeAreaView, ScrollView, StatusBar, Image, View } from "react-native";
import { Divider } from "react-native-elements";

import { styles } from "./stylesheet";

import { MaterialIcons } from "@expo/vector-icons";
import CustomBottomPost from "../../components/pBottomTabs/CustomBottomPost";

import PHeader from "../../components/pHeader/PHeader";

import profile2 from "../../assets/Pictures/profile2.jpg";

import * as ImagePicker from "expo-image-picker";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import MultilineInput from "../../components/pInput/MultilineInput";

const NewPost = ({ navigation, route }) => {
  const dispatch = useDispatch();
  let { apiBaseURL } = useSelector((state) => state.apiReducer);
  let { user } = useSelector((state) => state.userReducer);
  const [description, onChangeText] = React.useState("");
  const [pickedImagePath, setPickedImagePath] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [id, setId] = useState("");
  const [pending, setPending] = useState(false);

  const allPost = (posts) =>
    dispatch({
      type: "GET_ALLPOST",
      payload: posts,
    });

  const showImagePicker = async () => {
    // Ask the user for the permission to access the media library
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your photos!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();

    // Explore the result
    console.log(result);

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      console.log(result.uri);
    }
  };

  const openCamera = async () => {
    // Ask the user for the permission to access the camera
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync();

    // Explore the result
    console.log(result);

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      console.log(result.uri);
    }
  };

  const getPosts = async () => {
    try {
      const res = await axios.get(`${apiBaseURL}/posts`);

      if (res.data) {
        console.log(res.data.data);
        allPost(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onPressPost = async () => {
    setPending(true);
    if (description !== "") {
      try {
        const res = await axios.post(`${apiBaseURL}/posts`, {
          user: user._id,
          desc: description,
        });

        if (res.data) {
          console.log(res.data._id);
          setId(res.data._id);
        }
      } catch (error) {
        setPending(false);
        console.log(error.response.data);

        // setErrorMsg(error.response.data.errorMsg);
      }
    } else {
      setPending(false);
      getPosts();
      navigation.navigate("Home");
    }
  };

  useEffect(async () => {
    if (id !== "" && pickedImagePath !== "") {
      const formData = new FormData();

      formData.append("postImg", {
        name: new Date() + "_posts",
        uri: pickedImagePath,
        type: "image/jpg",
      });
      try {
        const res = await axios.post(
          `${apiBaseURL}/posts/${id}/upload`,
          formData,
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "multipart/form-data",
            },
          }
        );

        if (res.data) {
          setPending(false);
          setId("");
          getPosts();
          navigation.navigate("Home");
        }
      } catch (error) {
        setPending(false);
        console.log(error);
      }
    } else if (id !== "" && pickedImagePath === "") {
      setPending(false);
      getPosts();
      navigation.navigate("Home");
    }
  }, [id, pickedImagePath]);

  return (
    <>
      <StatusBar />

      <SafeAreaView
        style={[styles.container, { backgroundColor: "#fff", flex: 1 }]}
      >
        <PHeader
          iconLeft={<MaterialIcons name="close" style={styles.iconLeft} />}
          onPressBack={() => {
            getPosts();
            navigation.navigate("Home");
          }}
          title="New Post"
        />

        <View style={{ height: 10 }} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ padding: 20 }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <View>
              <Image source={profile2} style={[styles.profileImg]} />
            </View>

            <View
              style={{
                borderColor: "black",
                borderWidth: 1,
                borderRadius: 6,
                borderColor: "#888",
                padding: 10,
                alignSelf: "stretch",
                width: "80%",
                height: "100%",
              }}
            >
              <MultilineInput
                multiline
                numberOfLines={10}
                onChangeText={(text) => onChangeText(text)}
                value={description}
                style={{ flex: 6 }}
                placeholder="Say something"
              />
            </View>
          </View>
          <View style={styles.imageContainer}>
            {pickedImagePath !== "" && (
              <Image source={{ uri: pickedImagePath }} style={styles.image} />
            )}
            {uploadProgress ? <Text>{uploadProgress} %</Text> : null}
          </View>
        </ScrollView>

        <Divider width={1} />
        <CustomBottomPost
          showImagePicker={showImagePicker}
          onPressPost={onPressPost}
          openCamera={openCamera}
          pending={pending}
        />
      </SafeAreaView>
    </>
  );
};

export default NewPost;
