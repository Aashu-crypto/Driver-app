import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
  FlatList,
} from "react-native";
import { Button } from "react-native-zaptric-ui";
import tai1 from "../../../assets/img/tai1.svg";
import tai2 from "../../../assets/img/tai2.svg";
import tai3 from "../../../assets/img/tai3.svg";
import tai4 from "../../../assets/img/tai4.svg";
import { Color, FontFamily, height, width } from "../../../GlobalStyles";
import { LinearGradient } from "expo-linear-gradient";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Route } from "../../../routes";
const TrainingScreen = ({ navigation }) => {
  const trainingModules = [
    {
      id: 1,
      title: "Platform Overview",
      image: tai1,
    },
    {
      id: 2,
      title: "Customer Service",
      image: tai2,
    },
    {
      id: 3,
      title: "Safety and Compliance",
      image: tai3,
    },
    {
      id: 4,
      title: "Vehicle-related issues handling",
      image: tai4,
    },
  ];

  const renderItem = ({ item }) => (
    <LinearGradient
      style={styles.moduleContainer}
      colors={["#C6CEED", "transparent"]} // Light to transparent gradient
      start={{ x: 0, y: 0 }} // Horizontal start
      end={{ x: 2, y: 0 }} // Horizontal end
    >
      <View style={styles.moduleTextContainer}>
        <Text style={styles.moduleTitle}>{item.title}</Text>
        <TouchableOpacity style={styles.watchNowButton}>
          <AntDesign name="play" size={15} color="white" />
          <Text style={styles.watchNowText}>Watch now</Text>
        </TouchableOpacity>
      </View>
      <item.image />
    </LinearGradient>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={trainingModules}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.moduleList}
      />

      <View style={styles.footerContainer}>
        <Button title="Continue" btnWidth={width * 0.9} onPress={()=>navigation.navigate(Route.VEHICLEQUIZ)}/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.AlmostWhiteBackGround,
  },

  moduleList: {
    paddingHorizontal: 20,
  },
  moduleContainer: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    height: height / 7,
    justifyContent: "space-between",
    elevation:1,
  },
  moduleImage: {
    width: 60,
    height: 60,
    marginRight: 15,
    resizeMode: "contain",
  },
  moduleTextContainer: {},
  moduleTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: Color.colorGray,
    fontFamily: FontFamily.poppinsRegular,
  },
  watchNowButton: {
    marginTop: 5,
    backgroundColor: Color.appDefaultColor,
    borderRadius: 15,
    paddingVertical: 2,
    width: 70,
    paddingHorizontal: 2,

    flexDirection: "row",
    elevation:2
  },
  watchNowText: {
    color: "#FFFFFF",
    fontSize: 8,
    textAlign: "center",
    alignSelf: "center",
    marginLeft: 5,
  },
  footerContainer: {
    padding: 20,
    alignItems: "center",
  },
});

export default TrainingScreen;
