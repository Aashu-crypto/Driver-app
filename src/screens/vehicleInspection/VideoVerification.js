import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const VideoVerificationScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Video Verification</Text>

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

      <TouchableOpacity style={styles.button}>
        <Ionicons name="videocam" size={24} color="white" />
        <Text style={styles.buttonText}>Record Video</Text>
      </TouchableOpacity>
    </View>
  );
};

const StepItem = ({ stepNumber, text }) => {
  return (
    <View style={styles.stepContainer}>
      <View style={styles.circle}>
        <Text style={styles.stepNumber}>{stepNumber}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.stepText}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F6FF",
    padding: 20,
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
  },
  stepContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
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
    color: "#fff",
    fontWeight: "bold",
  },
  textContainer: {
    marginLeft: 10,
    flex: 1,
  },
  stepText: {
    fontSize: 16,
    color: "#666",
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
