import React, { useState } from "react";
import {
  FlatList,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Cards from "./Cards";
import { deviceHeight, deviceWidth } from "./Dimensions";

const Home = (props) => {
  const [city, setCity] = useState("");
  const cities = [
    {
      name: "Dhaka",
      image: require("../assets/image3.jpg"),
    },
    {
      name: "New York",
      image: require("../assets/image4.jpg"),
    },
    {
      name: "London",
      image: require("../assets/image5.jpg"),
    },
    {
      name: "San Francisco",
      image: require("../assets/image6.jpg"),
    },
    {
      name: "New Jersey",
      image: require("../assets/image7.jpg"),
    },
  ];
  return (
    <View>
      <ImageBackground
        source={require("../assets/image2.jpg")}
        style={{
          height: deviceHeight,
          width: deviceWidth,
        }}
        imageStyle={{ opacity: 0.6, backgroundColor: "black" }}
      />
      <View
        style={{
          position: "absolute",
          paddingHorizontal: 10,
          paddingVertical: 20,
        }}
      >
        <View>
          <Icon name="menu" size={46} color="white" />
        </View>
        <View style={{ marginTop: 100 }}>
          <Text style={{ fontSize: 40, color: "white", paddingHorizontal: 10 }}>
            Weather App
          </Text>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              color: "white",
              paddingHorizontal: 10,
            }}
          >
            Search city weather by cityName
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              borderRadius: 50,
              borderWidth: 1,
              borderColor: "white",
              marginTop: 16,
              paddingHorizontal: 10,
              marginLeft: 10,
            }}
          >
            <TextInput
              value={city}
              onChangeText={(val) => setCity(val)}
              placeholder="Search City"
              placeholderTextColor="white"
              style={{ paddingHorizontal: 10, color: "white", fontSize: 16 }}
            />
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate("Details", { name: city })
              }
            >
              <Icon name="search" size={22} color="white" />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              color: "white",
              fontSize: 25,
              paddingHorizontal: 10,
              marginTop: 220,
              marginBottom: 20,
            }}
          >
            My Locations
          </Text>
          <FlatList
            horizontal
            data={cities}
            renderItem={({ item }) => (
              <Cards
                name={item.name}
                image={item.image}
                navigation={props.navigation}
              />
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;
