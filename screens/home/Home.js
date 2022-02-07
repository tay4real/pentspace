import React, { useState, useCallback, useEffect } from "react";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";
import { Divider } from "react-native-elements";
import { styles } from "./stylesheet";

import PBottomTabs from "../../components/pBottomTabs/PBottomTabs";
import Header from "../../components/home/Header";
import Stories from "../../components/home/Stories";
import Post from "../../components/home/Post";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";


export default Home = ({ navigation, route }) => {
  // console.log(route);
  // if (route.params.refreshPage === "refreshPage") {
  //   setRefreshPage(true);
  // }
  const dispatch = useDispatch();
  let { apiBaseURL } = useSelector((state) => state.apiReducer);
  let { user, allusers } = useSelector((state) => state.userReducer);
  let { posts, allposts } = useSelector((state) => state.postReducer);

  

  const allPost = (posts) =>
    dispatch({
      type: "GET_ALLPOST",
      payload: posts,
    });

  const getAllUsers = (users) =>
    dispatch({
      type: "GET_ALLUSERS",
      payload: users,
    });

  const [modalVisible, setModalVisible] = useState(false);
  const [profileComplete, setProfileComplete] = useState(false);
  const [userCategory, setUserCategory] = useState("");
  const [refreshPage, setRefreshPage] = useState(true);
  const [comment, onChangeComment] = useState("");

  useEffect(async () => {
    const accessToken = await AsyncStorage.getItem("@accessToken");
    const refreshToken = await AsyncStorage.getItem("@refreshToken");
    if (accessToken) {
      console.log(accessToken, refreshToken, user.userCategory);
    }
  }, [user]);

  useEffect(() => {
    if (!profileComplete) {
      setModalVisible(true);
    }
  }, [profileComplete]);

  const editProfile = () => {
    if (user && user.userCategory === "Patient") {
      navigation.navigate("EditPatient");
      setModalVisible(!modalVisible);
    } else if (user && user.userCategory === "Health Care Provider") {
      navigation.navigate("EditHealthCareProvider");
      setModalVisible(!modalVisible);
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

  const getUsers = async () => {
    try {
      const res = await axios.get(`${apiBaseURL}/users`);

      if (res.data) {
        getAllUsers(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (refreshPage) {
      getUsers();
      getPosts();
    }
    setRefreshPage(false);
  }, [refreshPage]);

  return (
    <>
      <StatusBar />

      <SafeAreaView style={[styles.container]}>
        <Header
          onPressBroadcast={() => {
            navigation.navigate("Broadcast");
          }}
          onPressMessages={() => {
            navigation.navigate("Messages");
          }}
          onPressNewPost={() => {
            navigation.navigate("NewPost");
          }}
        />
        <Stories users={allusers} />
        <ScrollView>
          {posts.length > 0 &&
            posts
              .reverse()
              .map((post, index) => (
                <Post
                  post={post}
                  key={index}
                  comment={comment}
                  onChangeComment={onChangeComment}
                />
              ))}
        </ScrollView>
        {/* <ScrollView showsVerticalScrollIndicator={false}>
          {allposts &&
            allposts.map((post, index) => {
              return (
                <Post
                  key={index}
                  profileImage={post.profileImg && post.profileImg}
                  profileName={post.profileName}
                  postText={post.desc}
                  postImage={post.img}
                />
              );
            })}

          <Post
            profileImage={profile2}
            profileName={"Orange Dentals"}
            postText={
              "Nulla porttitor accumsan tincidunt. Proin eget tortor risus. Donec sollicitudin molestie malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus suscipit tortor eget felis porttitor volutpat."
            }
            like_count={1}
            comment_count={5}
          />
         
        </ScrollView> */}
        {/* <CompleteProfile
          user={user && user.email}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          editProfile={editProfile}
        /> */}
        <Divider width={1} />
        <PBottomTabs
          onPressNotification={() => navigation.navigate("Notifications")}
        />
      </SafeAreaView>
    </>
  );
};
