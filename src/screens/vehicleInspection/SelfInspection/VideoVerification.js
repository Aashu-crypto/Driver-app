import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import HeaderComponent from "../../../components/HeaderComponent";
import { LinearGradient } from "expo-linear-gradient";
import { Color } from "../../../../GlobalStyles";
import Button from "../../../components/Button";
const VideoVerificationScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent title="Video Verification" />

      <View style={styles.instructionsContainer}>
        <StepItem
          stepNumber={1}
          text="Record a short video introducing yourself, mentioning your name and the current date."
        />
        <StepItem
          stepNumber={2}
          text="Walk around your vehicle, showing all sides and focusing on the body condition and lights."
        />
        <StepItem
          stepNumber={3}
          text="Show the interior, focusing on the seats, dashboard, and cleanliness."
        />
        <StepItem
          stepNumber={4}
          text="Briefly demonstrate the functionality of seatbelts, controls, and in-car technology."
        />
      </View>

     <Button placeholder={"Record Video"}/>
    </SafeAreaView>
  );
};

const StepItem = ({ stepNumber, text }) => {
  return (
    <LinearGradient
      colors={[Color.backGroundColor, "#fff"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={[
        styles.stepContainer,
        { flexDirection: "row", alignItems: "center" },
      ]}
    >
      <View style={styles.circle}>
        <Text style={styles.stepNumber}>{stepNumber}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.stepText}>{text}</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 20,
    color: "#000",
    fontWeight: "bold",
    marginBottom: 20,
  },
  instructionsContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
  stepContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#00A2FF",
    justifyContent: "center",
    alignItems: "center",
  },
  stepNumber: {
    color: "#677093",
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 18,
  },
  textContainer: {
    marginLeft: 10,
    flex: 1,
  },
  stepText: {
    color: "#677093",
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 18,
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 10,
  },
});

export default VideoVerificationScreen;
