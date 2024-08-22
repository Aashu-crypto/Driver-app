import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Alert,
  Image,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";
import { FontFamily } from "../../../GlobalStyles";
import { Route } from "../../../routes";

const { width, height } = Dimensions.get("window");

export default function NumberVerfication({ navigation }) {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleContinue = () => {
    if (phoneNumber.length === 10 && /^[0-9]+$/.test(phoneNumber)) {
      navigation.navigate(Route.OTPVERFICATION);
    } else {
      Alert.alert(
        "Invalid Phone Number",
        "Please enter a valid 10-digit phone number."
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={"#1C4BF4"} />
      <LinearGradient
        colors={["#1C4BF4", "#3b5998", "#192f6a"]}
        style={styles.headerContainer}
      >
        <Text style={styles.headerText}>Find a best ride for yourself</Text>
      </LinearGradient>
      <View style={styles.inputContainer}>
        <Text style={styles.PhoneText}>Phone Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter mobile number"
          placeholderTextColor="#aaa"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
        <TouchableOpacity
          style={styles.continueButton}
          onPress={handleContinue}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    backgroundColor: "#e6e6fa",
  },
  headerContainer: {
    width: "100%",
    paddingVertical: height * 0.1,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: height * 0.3,
  },
  headerText: {
    fontSize: 22,
    maxWidth: "80%",
    color: "#ffffff",
    textAlign: "center",
    fontFamily: FontFamily.poppinsRegular,
    fontWeight: "400",
    lineHeight: 30,
  },
  PhoneText: {
    color: "#4A4A4A",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
    fontFamily: FontFamily.poppinsRegular,
    marginTop: 40,
    marginBottom: 5,
  },
  inputContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },
  input: {
    width: "90%",
    height: 50,
    backgroundColor: "#ffffff",
    borderRadius: 25,
    paddingHorizontal: 20,
    marginBottom: 20,
    fontSize: 14,
    color: "#000",
    textAlign: "center",
    fontWeight: "400",
    lineHeight: 21,
    fontFamily: FontFamily.poppinsRegular,
  },
  continueButton: {
    width: "90%",
    height: 50,
    backgroundColor: "#1C4BF4",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  continueButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 24,
    fontFamily: FontFamily.poppinsRegular,
  },
  separatorText: {
    fontSize: 16,
    color: "#4A4A4A",
    marginTop: 25,
    marginBottom: 10,
  },
  socialButtonsContainer: {
    width: "100%",
    alignItems: "center",
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    height: 50,
    backgroundColor: "#ffffff",
    borderRadius: 25,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  socialIconContainer: {
    backgroundColor: "#EDEAEA",
    borderRadius: 20,
    padding: 5,
  },
  socialIcon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  socialButtonTextContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  socialButtonText: {
    marginLeft: 10,
    fontSize: 15,
    fontWeight: "500",
    color: "#000000",
    alignSelf: "center",
    justifyContent: "center",
    lineHeight: 22.5,
    fontFamily: FontFamily.poppinsRegular,
  },
  appleButton: {
    backgroundColor: "#000000",
  },
  appleButtonText: {
    color: "#ffffff",
  },
});
