import React, { useState } from "react";
import {
  SafeAreaView,
  Image,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
} from "react-native";
import PHeader from "../../components/pHeader/PHeader";
import { styles } from "./stylesheet";

import { MaterialIcons } from "@expo/vector-icons";

import PInput from "../../components/pInput/PInput";
import PRadioButton from "../../components/pRadioButton/PRadioButton";

const Category = ({ navigation, route }) => {
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

  const [option, setOption] = useState(null);

  console.log(option);

  const data = [
    { value: "Hospital/Clinic (Medical/Dental)" },
    { value: "Hospital equipment sales" },
    { value: "Gym equipment sales" },
    { value: "Gym and fitness instructor" },
    { value: "Old peopls's home/care givers" },
    { value: "Mortuary/embalment services" },
    { value: "Pall bearer services" },
    { value: "Ambulance services" },
    { value: "Medical NGOs" },
    { value: "Hospital Equipment Manufacturer" },
  ];

  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <PHeader
          title={"Category"}
          iconLeft={<MaterialIcons name="arrow-back" style={styles.iconLeft} />}
          iconRight={<MaterialIcons name="done" style={styles.iconRight} />}
          onPressBack={() => {
            navigation.navigate("EditHealthCareProvider");
          }}
          onPressDone={() => {
            navigation.navigate("SignUp");
          }}
        />

        <ScrollView>
          <View style={{ marginTop: 40, paddingTop: 10, paddingBottom: 20 }}>
            <Text
              style={{
                fontWeight: "500",
                fontSize: 16,
                textAlign: "center",
                lineHeight: 15,
                marginBottom: 10,
              }}
            >
              What best describes what you are offering?
            </Text>
            <Text
              style={{
                fontWeight: "normal",
                fontSize: 12,
                textAlign: "center",
                lineHeight: 11,
              }}
            >
              Categories would help people find you.
            </Text>
          </View>

          <View style={styles.scrollBody}>
            <PInput
              placeholder={"Search"}
              color={"#333333"}
              InputIcon={
                <MaterialIcons
                  name="search"
                  style={[styles.iconRight, { color: "#828282", fontSize: 18 }]}
                />
              }
              backgroundColor={"#E0E0E0"}
              borderRadius={10}
            />
          </View>

          <View style={{ paddingLeft: 40, paddingRight: 40 }}>
            <Text
              style={{
                fontWeight: "500",
                fontSize: 16,
                paddingTop: 8,
                lineHeight: 15,
                marginTop: 20,
                marginBottom: 20,
              }}
            >
              Suggested
            </Text>
            <PRadioButton data={data} onSelect={(value) => setOption(value)} />
            <View
              style={{
                flexDirection: "row",
                flex: 1,
                marginBottom: 50,

                alignItems: "center",
              }}
            >
              <Text>Others: </Text>
              <TextInput
                style={{
                  height: 40,
                  flex: 5,
                  backgroundColor: "#E5E5e5",
                  borderBottomWidth: 1,
                  borderColor: "black",
                }}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Category;
