import React, { useState } from "react";
import { SafeAreaView, Image, View, Text, StatusBar } from "react-native";
import PHeader from "../../components/pHeader/PHeader";
import { styles } from "./stylesheet";

import profile from "../../assets/Pictures/profile.png";

import { MaterialIcons } from "@expo/vector-icons";
import PProfile from "../../components/pProfile/PProfile";
import PInput from "../../components/pInput/PInput";
import DropDownPicker from "react-native-dropdown-picker";

import { useSelector } from "react-redux";

const EditPatient = ({ navigation, route }) => {
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

  const [openState, setOpenState] = useState(false);
  const [valueState, setValueState] = useState(null);
  const [itemsState, setItemsState] = useState([
    { label: "Ondo", value: "Ondo" },
    { label: "Ogun", value: "Ogun" },
  ]);

  const [openCountry, setOpenCountry] = useState(false);
  const [valueCountry, setValueCountry] = useState(null);
  const [itemsCountry, setItemsCountry] = useState([
    { label: "Nigeria", value: "Nigeria" },
    { label: "USA", value: "USA" },
  ]);

  let { user } = useSelector((state) => state.userReducer);

  if (user) {
    console.log("User Category => ", user.userCategory);
  }

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
        />

        <PProfile
          Icon={<MaterialIcons name="edit" style={styles.profileIcon} />}
          imageSrc={profile}
          name={"John Doe"}
        />
        <View style={styles.scrollBody}>
          <PInput
            Icon={
              <MaterialIcons
                name="mail-outline"
                style={[styles.iconLeft, styles.paddingRight]}
              />
            }
            label={"Email"}
            labelmargin={8}
            backgroundColor={"#E5E5e5"}
            marginTop={-10}
            placeholder={"JohnDoe@gmail.com"}
            height={35}
            borderRadius={-4}
            borderBottomWidth={1}
          />
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
              zIndex: 1000,
            }}
            setOpen={setOpenGender}
            setValue={setValueGender}
            setItems={setItemsGender}
          />
        </View>

        <View style={[styles.scrollBody, { paddingTop: 0 }]}>
          <PInput
            Icon={
              <MaterialIcons
                name="location-on"
                style={[styles.iconLeft, styles.paddingRight]}
              />
            }
            label={"Street Address"}
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
            City
          </Text>
          <DropDownPicker
            open={openCity}
            value={valueCity}
            items={itemsCity}
            placeholder=""
            style={{
              backgroundColor: "#E5E5e5",
              height: 35,
              borderWidth: 0,
              borderRadius: -4,
              borderBottomWidth: 1,
              zIndex: 900,
            }}
            setOpen={setOpenCity}
            setValue={setValueCity}
            setItems={setItemsCity}
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
            State
          </Text>
          <DropDownPicker
            open={openState}
            value={valueState}
            items={itemsState}
            placeholder=""
            style={{
              backgroundColor: "#E5E5e5",
              height: 35,
              borderWidth: 0,
              borderRadius: -4,
              borderBottomWidth: 1,
              zIndex: 700,
            }}
            setOpen={setOpenState}
            setValue={setValueState}
            setItems={setItemsState}
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
            Country
          </Text>
          <DropDownPicker
            open={openCountry}
            value={valueCountry}
            items={itemsCountry}
            placeholder=""
            style={{
              backgroundColor: "#E5E5e5",
              height: 35,
              borderWidth: 0,
              borderRadius: -4,
              borderBottomWidth: 1,
              zIndex: 800,
            }}
            setOpen={setOpenCountry}
            setValue={setValueCountry}
            setItems={setItemsCountry}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default EditPatient;
