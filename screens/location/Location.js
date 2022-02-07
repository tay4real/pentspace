import React, { useState } from "react";
import {
  SafeAreaView,
  Image,
  ScrollView,
  View,
  Text,
  StatusBar,
} from "react-native";
import PHeader from "../../components/pHeader/PHeader";
import { styles } from "./stylesheet";

import { MaterialIcons } from "@expo/vector-icons";

import PInput from "../../components/pInput/PInput";
import DropDownPicker from "react-native-dropdown-picker";

const Location = ({ navigation, route }) => {
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

  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <PHeader
          title={"Location"}
          iconLeft={<MaterialIcons name="arrow-back" style={styles.iconLeft} />}
          iconRight={<MaterialIcons name="done" style={styles.iconRight} />}
          onPressBack={() => {
            navigation.navigate("Contact");
          }}
          onPressDone={() => {
            navigation.navigate("Contact");
          }}
        />

        <View
          style={[
            styles.scrollBody,
            { marginBottom: 20, paddingLeft: 40, paddingRight: 40 },
          ]}
        >
          <PInput
            label={"Street Address"}
            labelmargin={8}
            backgroundColor={"#E5E5e5"}
            marginTop={-10}
            height={35}
            borderRadius={-4}
            borderBottomWidth={1}
          />
        </View>

        <View style={{ paddingLeft: 40, paddingRight: 40, marginBottom: 20 }}>
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
              zIndex: 1000,
            }}
            setOpen={setOpenState}
            setValue={setValueState}
            setItems={setItemsState}
          />
        </View>

        <View style={{ paddingLeft: 40, paddingRight: 40, marginBottom: 20 }}>
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

        <View style={{ paddingLeft: 40, paddingRight: 40, marginBottom: 50 }}>
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
        <View style={{ paddingLeft: 40, paddingRight: 40 }}>
          <Text
            style={{
              fontWeight: "400",
              fontSize: 10,
              color: "#828282",
            }}
          >
            Please add a valid location, so it can appear in the map, and it’s
            easy to navigate
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Location;
