import React, { useState } from "react";
import { SafeAreaView, View, Text, StatusBar } from "react-native";
import PHeader from "../../components/pHeader/PHeader";
import { styles } from "./stylesheet";

import profile from "../../assets/Pictures/pentspace-logo.png";

import { MaterialIcons } from "@expo/vector-icons";
import PProfile from "../../components/pProfile/PProfile";
import PInput from "../../components/pInput/PInput";
import DropDownPicker from "react-native-dropdown-picker";
import PButton from "../../components/pButton/PButton";

import { useSelector } from "react-redux";

const EditHealthCareProvider = ({ navigation, route }) => {

   let { user } = useSelector((state) => state.userReducer);

  if (user) {
    console.log("User Category => ", user.userCategory);
  }


  const [openGender, setOpenGender] = useState(false);
  const [valueGender, setValueGender] = useState(null);
  const [itemsGender, setItemsGender] = useState([
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
  ]);

  const [openCity, setOpenCity] = useState(false);
  const [valueCity, setValueCity] = useState(null);
  const [itemsCity, setItemsCity] = useState([
    { label: "Akure", value: "Akure" },
    { label: "Ondo", value: "Ondo" },
    { label: "Ifedore", value: "Ifedore" },
  ]);

  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <PHeader
          title={"Edit Profile"}
          iconLeft={<MaterialIcons name="arrow-back" style={styles.iconLeft} />}
          iconRight={<MaterialIcons name="done" style={styles.iconRight} />}
          onPressBack={() => {
            navigation.navigate("SignUp");
          }}
          onPressDone={() => {
            navigation.navigate("SignUp");
          }}
          xOffset={-2}
          yOffset={4}
          shadowColorIos={"#171717"}
          shadowOpacity={0.2}
          shadowRadius={3}
          elevation={8}
          shadowColorAndroid={"#171717"}
        />

        <PProfile
          Icon={<MaterialIcons name="edit" style={styles.profileIcon} />}
          imageSrc={profile}
          name={"Pent Space"}
        />
        <View style={styles.scrollBody}>
          <PInput
            label={"Name"}
            labelmargin={8}
            backgroundColor={"#E5E5e5"}
            marginTop={-10}
            height={35}
            borderRadius={-4}
            borderBottomWidth={1}
          />
          <PInput
            label={"Username"}
            labelmargin={8}
            backgroundColor={"#E5E5e5"}
            marginTop={-10}
            height={35}
            borderRadius={-4}
            borderBottomWidth={1}
          />
        </View>

        <View style={{ paddingLeft: 40, paddingRight: 40 }}>
          <Text
            style={{
              fontWeight: "500",
              fontSize: 16,
              paddingLeft: 10,
              paddingTop: 8,
            }}
          >
            Gender
          </Text>
          <DropDownPicker
            open={openGender}
            value={valueGender}
            items={itemsGender}
            placeholder=""
            style={{
              backgroundColor: "#E5E5e5",
              height: 35,
              borderWidth: 0,
              borderRadius: -4,
              borderBottomWidth: 1,
            }}
            setOpen={setOpenGender}
            setValue={setValueGender}
            setItems={setItemsGender}
          />
        </View>

        <View style={{ paddingLeft: 40, paddingRight: 40, marginTop: 20 }}>
          <Text
            style={{
              fontWeight: "700",
              fontSize: 16,
              paddingTop: 15,
            }}
          >
            Public Business Information
          </Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View style={{ width: 120 }}>
              <Text>Category</Text>
            </View>

            <PButton
              title={"Choose what service you are providing"}
              iconRight={
                <MaterialIcons name="chevron-right" style={styles.iconRight} />
              }
              flex={1}
              backgroundColor={"#E5E5e5"}
              titleFontWeight={"400"}
              titleSize={10}
              titleTextTransform={"none"}
              onPress={() => {
                navigation.navigate("Category");
              }}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View style={{ width: 120 }}>
              <Text>Contact options</Text>
            </View>

            <PButton
              title={"Email Address, Phone number, Address"}
              iconRight={
                <MaterialIcons name="chevron-right" style={styles.iconRight} />
              }
              flex={1}
              backgroundColor={"#E5E5e5"}
              titleFontWeight={"400"}
              titleSize={10}
              titleTextTransform={"none"}
              onPress={() => {
                navigation.navigate("Contact");
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default EditHealthCareProvider;
