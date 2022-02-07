import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import configureStore from "./store";

import Screen1 from "./screens/onboardScreen/Screen1";
import Screen2 from "./screens/onboardScreen/Screen2";
import PentspaceUsage from "./screens/pentspaceUsage/PentspaceUsage";
import SignUp from "./screens/signUp/SignUp";
import EditPatient from "./screens/profile/EditPatient";
import EditHealthCareProvider from "./screens/profile/EditHealthCareProvider";
import Category from "./screens/category/Category";
import Contact from "./screens/contact/Contact";
import Location from "./screens/location/Location";
import Notifications from "./screens/notifications/Notifications";
import Messages from "./screens/messages/Messages";
import BroadcastList from "./screens/broadcastList/BroadcastList";
import NewPost from "./screens/post/NewPost";
import Home from "./screens/home/Home";
import Signin from "./screens/signin/Signin";
import ConfirmSignUp from "./screens/confirmSignUp/ConfirmSignUp";
import ForgotPassword from "./screens/forgotPassword/ForgotPassword";
import NewPassword from "./screens/newPassword/NewPassword";

const store = configureStore();

export default function Navigation() {
  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Screen1">
          <Stack.Screen
            name="Screen1"
            component={Screen1}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Screen2"
            component={Screen2}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="ConfirmSignUp"
            component={ConfirmSignUp}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="PentspaceUsage"
            component={PentspaceUsage}
            options={{
              title: "Pentspace Usage",
              headerTitleStyle: {
                fontWeight: "bold",
                fontSize: 25,
              },
            }}
          />

          <Stack.Screen
            name="NewPassword"
            component={NewPassword}
            options={{
              title: "New Password",
              headerTitleStyle: {
                fontWeight: "bold",
                fontSize: 25,
              },
            }}
          />

          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPassword}
            options={{
              title: "Reset Password",
              headerTitleStyle: {
                fontWeight: "bold",
                fontSize: 25,
              },
            }}
          />
          <Stack.Screen
            name="Signin"
            component={Signin}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="EditPatient"
            component={EditPatient}
            options={{
              title: "Edit Patient",
              headerTitleStyle: {
                fontWeight: "bold",
                fontSize: 25,
              },
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="EditHealthCareProvider"
            component={EditHealthCareProvider}
            options={{
              title: "Edit Health Care Provider",
              headerTitleStyle: {
                fontWeight: "bold",
                fontSize: 25,
              },
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Category"
            component={Category}
            options={{
              title: "Category",
              headerTitleStyle: {
                fontWeight: "bold",
                fontSize: 25,
              },
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Contact"
            component={Contact}
            options={{
              title: "Contact",
              headerTitleStyle: {
                fontWeight: "bold",
                fontSize: 25,
              },
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Location"
            component={Location}
            options={{
              title: "Loation",
              headerTitleStyle: {
                fontWeight: "bold",
                fontSize: 25,
              },
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: "Notifications",
              headerTitleStyle: {
                fontWeight: "bold",
                fontSize: 25,
              },
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Notifications"
            component={Notifications}
            options={{
              title: "Notifications",
              headerTitleStyle: {
                fontWeight: "bold",
                fontSize: 25,
              },
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Messages"
            component={Messages}
            options={{
              title: "Messages",
              headerTitleStyle: {
                fontWeight: "bold",
                fontSize: 25,
              },
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Broadcast"
            component={BroadcastList}
            options={{
              title: "Broadcast",
              headerTitleStyle: {
                fontWeight: "bold",
                fontSize: 25,
              },
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="NewPost"
            component={NewPost}
            options={{
              title: "New Post",
              headerTitleStyle: {
                fontWeight: "bold",
                fontSize: 25,
              },
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
