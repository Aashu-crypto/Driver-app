import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Image,
  Alert,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { FontFamily } from "../../../GlobalStyles";
import Car from "../../../assets/img/car.svg";
import { Route } from "../../../routes";
import { useDispatch } from "react-redux";
import { screen } from "../../Redux/Slice/screenNameSlice";
const { width, height } = Dimensions.get("window");

export default function OTPVerificationScreen({ navigation }) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);
  const dispatch = useDispatch();

  const handleOtpChange = (value, index) => {
    if (/^[0-9]$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleVerifyOtp = () => {
    if (otp.join("").length === 6) {
      // Navigate to the next screen (e.g., Home screen)
      dispatch(screen(Route.REGISTRATION_STACK));
    } else {
      Alert.alert("Invalid OTP", "Please enter a valid 6-digit OTP.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.innerContainer}
      >
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <View style={{ marginBottom: 10 }}>
          <Car />
        </View>

        <View style={styles.elevatedContainer}>
          <Text style={styles.title}>Enter OTP</Text>
          <Text style={styles.subtitle}>
            Sent to <Text style={{ color: "#4A4A4A" }}>+91-6578888888</Text>
          </Text>
          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                style={styles.otpInput}
                keyboardType="numeric"
                maxLength={1}
                value={digit}
                onChangeText={(value) => handleOtpChange(value, index)}
                ref={(ref) => (inputRefs.current[index] = ref)}
              />
            ))}
          </View>
          <TouchableOpacity
            style={styles.verifyButton}
            onPress={handleVerifyOtp}
          >
            <Text style={styles.verifyButtonText}>Verify OTP</Text>
          </TouchableOpacity>
          <Text style={styles.resendText}>
            Didn’t receive OTP yet?{" "}
            <Text style={styles.resendLink}>Resend OTP</Text>
          </Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  innerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  backButton: {
    position: "absolute",
    top: height * 0.05,
    left: width * 0.05,
  },
  image: {
    width: width * 0.5,
    height: height * 0.25,
    marginBottom: height * 0.05,
    resizeMode: "contain",
  },
  elevatedContainer: {
    width: "100%",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 5, // For Android
    shadowColor: "#000", // For iOS
    shadowOffset: { width: 0, height: 2 }, // For iOS
    shadowOpacity: 0.25, // For iOS
    shadowRadius: 3.84, // For iOS
  },
  title: {
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    marginBottom: 10,
    lineHeight: 21,
    fontFamily: FontFamily.poppinsRegular,
    color: "#4A4A4A",
  },
  subtitle: {
    fontSize: 14,
    textAlign: "left",
    marginBottom: 20,
    fontWeight: "400",
    lineHeight: 21,
    fontFamily: FontFamily.poppinsRegular,
    color: "#998383",
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  otpInput: {
    width: width * 0.12,
    height: height * 0.06,
    borderColor: "#ccc",
    borderBottomWidth: 1,
    textAlign: "center",
    fontSize: 18,
    borderRadius: 10,
  },
  verifyButton: {
    backgroundColor: "#1C4BF4",
    padding: height * 0.02,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 20,
  },
  verifyButtonText: {
    color: "#fff",
    fontSize: 16,
    lineHeight: 24,
    fontFamily: FontFamily.poppinsRegular,
    fontWeight: "400",
  },
  resendText: {
    textAlign: "left",
    color: "#888",
    fontSize: 10,
    fontWeight: "400",
    fontFamily: FontFamily.poppinsRegular,
  },
  resendLink: {
    color: "#1C4BF4",
  },
});
