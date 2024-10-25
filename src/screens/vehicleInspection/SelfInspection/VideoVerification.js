import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
  Video,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import HeaderComponent from "../../../components/HeaderComponent";
import { LinearGradient } from "expo-linear-gradient";
import { Color } from "../../../../GlobalStyles";
import Button from "../../../components/Button";
import * as ImagePicker from "expo-image-picker";

const VideoVerificationScreen = () => {
  const [video, setVideo] = useState(null);

  const recordVideo = async () => {
    // Request permission for camera and microphone
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission Denied",
        "Sorry, we need camera and microphone permissions to make this work!"
      );
      return;
    }

    // Launch camera for video recording
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      setVideo(result.uri); // Set the video URI to state
    }
  };

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

      <Button placeholder={"Record Video"} onPress={recordVideo} />

      {video && (
        <View style={styles.videoContainer}>
          <Text style={styles.videoText}>Video Recorded Successfully!</Text>
          {/* Add the video player preview here */}
          {/* Replace this with your video player if needed */}
          <Button placeholder={"Record Video"} />
        </View>
      )}
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
  videoContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  videoText: {
    fontSize: 16,
    color: "#000",
    marginBottom: 10,
  },
  submitButton: {
    backgroundColor: Color.appDefaultColor,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default VideoVerificationScreen;
