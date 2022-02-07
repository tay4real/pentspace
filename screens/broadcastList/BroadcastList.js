import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Image,
  ScrollView,
  View,
  Text,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import PHeader from "../../components/pHeader/PHeader";
import { styles } from "./stylesheet";

import { MaterialIcons } from "@expo/vector-icons";

import SelectBox from "react-native-multi-selectbox";
import CustomButton from "../../components/pButton/CustomButton";

import axios from "axios";

import { useSelector } from "react-redux";

const BroadcastList = ({ navigation, route }) => {
  let { apiBaseURL } = useSelector((state) => state.apiReducer);
  let { user } = useSelector((state) => state.userReducer);

  const [countries, setCountries] = useState([
    {
      item: "",
      id: "",
    },
  ]);
  const [selectedCountry, setSelectedCountry] = useState({});

  const [states, setStates] = useState([
    {
      item: "",
      id: "",
    },
  ]);
  const [selectedState, setSelectedState] = useState({});

  const [cities, setCities] = useState([
    {
      item: "",
      id: "",
    },
  ]);
  const [selectedCity, setSelectedCity] = useState({});

  const [services, setServices] = useState([
    {
      item: "",
      id: "",
    },
  ]);
  const [selectedService, setSelectedService] = useState({});

  const [pending, setPending] = useState(false);

  let initCountry = "initialized";
  let initServices = "initialized";

  const [successMsg, setSuccessMsg] = useState("");

  // Error Handlers
  const [error, setError] = useState("");
  const [countryErr, setCountryErr] = useState("");
  const [stateErr, setStateErr] = useState("");
  const [cityErr, setCityErr] = useState("");
  const [serviceErr, setServiceErr] = useState("");
  const [countriesAccessToken, setCountriesAccessToken] = useState(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJhZGVtdXlpd2FvbHV0YXlvQGdtYWlsLmNvbSIsImFwaV90b2tlbiI6InhpRlRrNHdPdDdvZjdWdVM2eElZbFVqWkd6UHBxMWNVdGM4dFVVekZwbDBjNzhueHdVOVk5bThnZldCUWxndkM4WFUifSwiZXhwIjoxNjQ0MDc4NTIxfQ.GGCDwmItg7JQil7hbBWy1bud2RTc4emmMfczF9g7jKs"
  );

  const getAccessToken = async () => {
    const Url = "https://www.universal-tutorial.com/api/getaccesstoken";

    const params = {
      refreshToken:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWY4ZmY3ZjkzY2JmNzVkMzk0YmRkMjIiLCJpYXQiOjE2NDM3MjgwNTIsImV4cCI6MTY0NDMzMjg1MiwiYXVkIjoiY2xpZW50IiwiaXNzIjoic2VydmVyIn0.HrWsbV9L9ohn2tC1J-BQtS8PVJZaEzYSOvHwdeXsCcE",
    };

    const headers = {
      "api-token":
        "xiFTk4wOt7of7VuS6xIYlUjZGzPpq1cUtc8tUUzFpl0c78nxwU9Y9m8gfWBQlgvC8XU",
      "user-email": "ademuyiwaolutayo@gmail.com",
    };

    const accessToken = await axios.get(Url, {
      params,
      headers,
    });

    return accessToken.data.auth_token;
  };

  const countriesAPIHeader = {
    Authorization: `Bearer ${countriesAccessToken}`,
    Accept: "application/json",
  };

  const getCountries = async () => {
    try {
      const Url = "https://www.universal-tutorial.com/api/countries";

      let allCountries = [];
      const countries = await axios.get(Url, {
        headers: countriesAPIHeader,
      });

      if (countries) {
        countries.data.map((country) => {
          allCountries.push({
            item: country.country_name,
            id: country.country_short_name,
          });
        });
        setCountries(allCountries);
      }
    } catch (error) {
      if (
        error.response.data.error.name === "TokenExpiredError" &&
        error.response.data.error.message === "jwt expired"
      ) {
        const accessToken = await getAccessToken();
        setCountriesAccessToken(accessToken);
      }
    }
  };

  const getStates = async (country) => {
    try {
      const Url = `https://www.universal-tutorial.com/api/states/${country}`;

      let allStates = [];
      const states = await axios.get(Url, {
        headers: countriesAPIHeader,
      });

      if (states) {
        states.data.map((currentState) => {
          allStates.push({
            item: currentState.state_name,
            id: currentState.state_name,
          });
        });
      }

      setStates(allStates);
    } catch (error) {}
  };

  const getCities = async (state) => {
    try {
      const Url = `https://www.universal-tutorial.com/api/cities/${state}`;

      let allCities = [];
      const cities = await axios.get(Url, {
        headers: countriesAPIHeader,
      });

      if (cities) {
        cities.data.map((city) => {
          allCities.push({
            item: city.city_name,
            id: city.city_name,
          });
        });
      }

      setCities(allCities);
    } catch (error) {}
  };

  const getServices = async () => {
    const Url = `${apiBaseURL}/healthcareservices`;

    let allServices = [];
    const services = await axios.get(Url);

    if (services) {
      services.data.map((service) => {
        allServices.push({
          item: service.serviceName,
          id: service._id,
        });
      });
    }

    setServices(allServices);
  };

  useEffect(() => {
    getCountries();
  }, [initCountry]);

  useEffect(() => {
    getStates(selectedCountry.item);
  }, [selectedCountry]);

  useEffect(() => {
    getCities(selectedState.item);
  }, [selectedState]);

  useEffect(() => {
    getServices();
  }, [initServices]);

  function onChangeCountry() {
    return (val) => setSelectedCountry(val);
  }

  function onChangeState() {
    return (val) => setSelectedState(val);
  }

  function onChangeCity() {
    return (val) => setSelectedCity(val);
  }

  function onChangeService() {
    return (val) => setSelectedService(val);
  }

  const onSendBroadcast = async () => {
    if (selectedCountry.item === undefined) {
      setCountryErr("Country is required!");
    }

    if (selectedState.item === undefined) {
      setStateErr("State is required!");
    }

    if (selectedCity.item === undefined) {
      setCityErr("City is required!");
    }

    if (selectedService.item === undefined) {
      setServiceErr("Please select a service!");
    }

    if (selectedCity.item !== undefined && selectedService.item !== undefined) {
      try {
        setPending(true);
        const res = await axios.post(`${apiBaseURL}/broadcast`, {
          country: selectedCountry.item,
          state: selectedState.item,
          city: selectedCity.item,
          service: selectedService.item,
          userId: user._id,
        });

        if (res.data) {
          setPending(false);
          setSuccessMsg("Broadcast sent successfully!");
          setTimeout(() => {
            setSuccessMsg("");
          }, 2000);
          setTimeout(() => {
            navigation.navigate("Home");
          }, 2000);
        } else {
          setPending(false);
        }
      } catch (error) {
        setPending(false);
        console.log(error.response.data.errorMsg);
        setError(error.response.data.errorMsg);
      }
    }
  };

  useEffect(() => {
    if (selectedCountry.item !== "") {
      setCountryErr("");
    }
    if (selectedState.item !== "") {
      setStateErr("");
    }
    if (selectedCity !== "") {
      setCityErr("");
    }
    if (selectedService.item !== "") {
      setServiceErr("");
    }
  }, [selectedCity, selectedCountry.selectedState, selectedService]);

  return (
    <>
      <StatusBar />
      <SafeAreaView style={styles.container}>
        <PHeader
          title={"Broadcast"}
          iconLeft={<MaterialIcons name="arrow-back" style={styles.iconLeft} />}
          iconRight={<MaterialIcons name="done" style={styles.iconRight} />}
          onPressBack={() => {
            navigation.navigate("Home");
          }}
          onPressDone={onSendBroadcast}
        />

        <View style={{ height: 20 }} />

        {successMsg !== "" && (
          <View
            style={{
              paddingLeft: 40,
              paddingRight: 40,
              backgroundColor: "green",
            }}
          >
            <Text
              style={{
                fontWeight: "400",
                fontSize: 11,
                alignSelf: "center",
                color: "white",
              }}
            >
              {successMsg}
            </Text>
          </View>
        )}

        {error !== "" && (
          <View
            style={{
              paddingLeft: 40,
              paddingRight: 40,
              backgroundColor: "red",
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                fontWeight: "400",
                fontSize: 11,
                alignSelf: "center",
                color: "white",
              }}
            >
              {error}
            </Text>
          </View>
        )}

        <View style={{ height: 20 }} />
        <View style={{ paddingLeft: 40, paddingRight: 40 }}>
          <Text>Country</Text>
          <SelectBox
            label="Select country"
            options={countries}
            value={selectedCountry}
            onChange={onChangeCountry()}
            hideInputFilter={false}
          />
          {countryErr !== "" && (
            <Text style={{ color: "red", alignSelf: "stretch" }}>
              {countryErr}
            </Text>
          )}
        </View>
        <View style={{ height: 20 }} />
        <View style={{ paddingLeft: 40, paddingRight: 40 }}>
          <Text>State</Text>
          <SelectBox
            label="Select state"
            options={states}
            value={selectedState}
            onChange={onChangeState()}
            hideInputFilter={false}
          />
          {stateErr !== "" && (
            <Text style={{ color: "red", alignSelf: "stretch" }}>
              {stateErr}
            </Text>
          )}
        </View>
        <View style={{ height: 20 }} />
        <View style={{ paddingLeft: 40, paddingRight: 40 }}>
          <Text>City</Text>
          <SelectBox
            label="Select city"
            options={cities}
            value={selectedCity}
            onChange={onChangeCity()}
            hideInputFilter={false}
          />
          {cityErr !== "" && (
            <Text style={{ color: "red", alignSelf: "stretch" }}>
              {cityErr}
            </Text>
          )}
        </View>
        <View style={{ height: 20 }} />
        <View style={{ paddingLeft: 40, paddingRight: 40 }}>
          <Text>What do you need?</Text>
          <SelectBox
            label="Select a service"
            options={services}
            value={selectedService}
            onChange={onChangeService()}
            hideInputFilter={false}
          />
          {serviceErr !== "" && (
            <Text style={{ color: "red", alignSelf: "stretch" }}>
              {serviceErr}
            </Text>
          )}
        </View>
        <View style={{ height: 20 }} />
        <View style={{ paddingLeft: 40, paddingRight: 40 }}>
          <Text style={{ fontWeight: "400", fontSize: 11 }}>
            Please add a valid location, so it can appear in the map, and it’s
            easy to navigate
          </Text>
        </View>
        <View style={{ height: 20 }} />
        <View style={{ paddingLeft: 40, paddingRight: 40 }}>
          <CustomButton
            text="Send Broadcast"
            onPress={onSendBroadcast}
            pending={pending}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default BroadcastList;
