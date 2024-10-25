import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Color, FontFamily, height, width } from "../../../GlobalStyles";
import Checkbox from "expo-checkbox";

import { TextInput } from "react-native-paper";
import { useTranslation } from "react-i18next";
import axios from "axios"; // Import axios
import { Route } from "../../../routes";
import { Button } from "react-native-zaptric-ui";
import { backend_Host } from "../../../config";
import { useDispatch, useSelector } from "react-redux";
import { driverProfile } from "../../Redux/Slice/DriverProfile";

const DriverRegistration = ({ navigation }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.driver.data);
  console.log(profile);
  const number = useSelector(state=>state.number.number)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    referralCode: "",
    agreeToTerms: false,
  });

  const [loading, setLoading] = useState(false);



  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    // Check required fields
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.city ||
      !formData.agreeToTerms
    ) {
      Alert.alert("Error", t("allFieldsRequired"));
      return;
    }

    setLoading(true);

    // Prepare the request data
    const requestData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,  // Ensure you send email if required by your backend
      city: formData.city,
      termsAccepted: true,
      phoneNumber:number
      // referralCode: formData.referralCode || null,  // Handle optional referralCode
    };

    try {
      // Make the API request using axios
      const response = await axios.post(
        `${backend_Host}/driver/registration`,
        requestData
      );
      const data = response.data;
      dispatch(driverProfile(data));

      // Check if registration was successful
      Alert.alert("Success", t("registrationSuccess"));
      navigation.navigate(Route.WELCOME);
    } catch (error) {
      // Handle network or server errors
      const errorMessage =
        error.response?.data?.message || t("somethingWentWrong");
      Alert.alert("Error", errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.container}>
        <ScrollView style={{ flex: 1 }}>
          <Image
            source={require("../../../assets/img/JoyfullYoung.png")}
            style={styles.image}
          />
          <View style={styles.mainView}>
            <Text style={styles.header}>{t("welcomeNewPartner")}</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>{t("name")}</Text>
              <View style={styles.nameInputContainer}>
                <TextInput
                  style={styles.nameInput}
                  placeholder={t("firstName")}
                  outlineColor="#EEEEEE"
                  activeOutlineColor={Color.appDefaultColor}
                  mode="outlined"
                  value={formData.firstName}
                  placeholderTextColor={"#B9AAAA"}
                  onChangeText={(text) => handleChange("firstName", text)}
                  accessibilityLabel={t("firstName")}
                  theme={{
                    roundness: 10, // Set borderRadius
                  }}
                />
                <TextInput
                  style={styles.nameInput}
                  placeholder={t("lastName")}
                  value={formData.lastName}
                  outlineColor="#EEEEEE"
                  activeOutlineColor={Color.appDefaultColor}
                  mode="outlined"
                  placeholderTextColor={"#B9AAAA"}
                  onChangeText={(text) => handleChange("lastName", text)}
                  accessibilityLabel={t("lastName")}
                  theme={{
                    roundness: 10, // Set borderRadius
                  }}
                />
              </View>
              <Text style={styles.label}>{t("email")}</Text>
              <TextInput
                style={styles.input}
                placeholder={t("enterEmail")}
                value={formData.email}
                placeholderTextColor={"#B9AAAA"}
                outlineColor="#EEEEEE"
                activeOutlineColor={Color.appDefaultColor}
                mode="outlined"
                onChangeText={(text) => handleChange("email", text)}
                keyboardType="email-address"
                accessibilityLabel={t("enterEmail")}
                theme={{
                  roundness: 10, // Set borderRadius
                }}
              />
              <Text style={styles.label}>{t("city")}</Text>
              <TextInput
                style={styles.input}
                placeholder={t("cityToEarn")}
                value={formData.city}
                placeholderTextColor={"#B9AAAA"}
                outlineColor="#EEEEEE"
                activeOutlineColor={Color.appDefaultColor}
                mode="outlined"
                onChangeText={(text) => handleChange("city", text)}
                accessibilityLabel={t("cityToEarn")}
                theme={{
                  roundness: 10, // Set borderRadius
                }}
              />
              <Text style={styles.label}>{t("referralCode")}</Text>
              <TextInput
                style={styles.input}
                placeholder={t("optionalReferralCode")}
                value={formData.referralCode}
                outlineColor="#EEEEEE"
                activeOutlineColor={Color.appDefaultColor}
                mode="outlined"
                placeholderTextColor={"#B9AAAA"}
                onChangeText={(text) => handleChange("referralCode", text)}
                accessibilityLabel={t("optionalReferralCode")}
                theme={{
                  roundness: 10, // Set borderRadius
                }}
              />
            </View>

            <View style={styles.checkboxContainer}>
              <Checkbox
                value={formData.agreeToTerms}
                onValueChange={(value) => handleChange("agreeToTerms", value)}
                tintColors={{
                  true: Color.appDefaultColor,
                  false: Color.appDefaultColor,
                }}
              />
              <Text style={styles.checkboxLabel}>{t("agreeToTerms")}</Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.btnPosition}>
          <Button
            title={loading ? t("loading") : t("continue")}
            onPress={handleSubmit}
            disabled={loading}
            btnWidth={width * 0.9}
          />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default DriverRegistration;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.backGroundColor,
  },
  image: {
    width: width,
    height: height / 3.5,
  },
  mainView: {
    flex: 1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: Color.backGroundColor,
    position: "relative",
    bottom: 10,
    alignItems: "center",
  },
  header: {
    fontSize: 20,
    fontWeight: "500",
    lineHeight: 30,
    textAlign: "center",
    color: Color.appDefaultColor,
    maxWidth: width / 2.5,
    marginTop: 10,
  },
  label: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsRegular,
    color: Color.gray,
    alignSelf: "flex-start",
  },
  inputContainer: {
    width: width * 0.9,
    alignItems: "center",
  },
  nameInputContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  nameInput: {
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
    width: "49%",
    fontSize: 14,
    fontWeight: "400",
    fontFamily: FontFamily.poppinsRegular,
  },
  input: {
    height: 50,
    borderColor: "#EEEEEE",
    borderWidth: 1.5,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
    width: "100%",
    fontSize: 14,
    fontWeight: "400",
    fontFamily: FontFamily.poppinsRegular,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    width: width * 0.9,
  },
  checkboxLabel: {
    marginLeft: 10,
    fontSize: 12,
    color: Color.appDefaultColor,
  },
  btnPosition: {
    position: "absolute",
    bottom: 10,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
});
