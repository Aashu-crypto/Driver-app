import {
  View,
  Text,
  TextInput,
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { Color, FontFamily, height, width } from "../../../GlobalStyles";
import Checkbox from "expo-checkbox";
import Button from "../../components/Button";

import { useTranslation } from "react-i18next";
import axios from "axios"; // Import axios
import { Route } from "../../../routes";

const DriverRegistration = ({ navigation }) => {
  const { t } = useTranslation();
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

  const handleSubmit =  () => {
    navigation.navigate(Route.WELCOME);
    // Validate the required fields
    // if (
    //   !formData.firstName ||
    //   !formData.lastName ||
    //   !formData.email ||
    //   !formData.city ||
    //   !formData.agreeToTerms
    // ) {
    //   Alert.alert("Error", t("allFieldsRequired"));
    //   return;
    // }

    // setLoading(true);
    // console.log(formData);

    // const requestData = {
    //   first_name: formData.firstName,
    //   last_name: formData.lastName,
    //   phone_with_code: "+1123443543567890",
    //   phone_number: "12345674543890",
    //   email: formData.email,
    //   password: "securepassword123",
    //   // city: formData.city,
    // };
    // console.log(requestData);

    // try {
    //   // Replace the URL with your API endpoint
    //   const response = await axios.post(
    //     "http://192.168.29.59:8000/api/driver/register",
    //     requestData
    //   );

    //   if (response.status === 200 && response.data.status === 1) {
    //     Alert.alert("Success", t("registrationSuccess"));
    //     navigation.navigate(Route.WELCOME);
    //   } else {
    //     Alert.alert("Error", response.data.message || t("somethingWentWrong"));
    //   }
    // } catch (error) {
    //   Alert.alert(
    //     "Error",
    //     error.response?.data?.message || t("somethingWentWrong")
    //   );
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <SafeAreaView style={styles.container}>
        <ScrollView>
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
                  value={formData.firstName}
                  placeholderTextColor={"#B9AAAA"}
                  onChangeText={(text) => handleChange("firstName", text)}
                  accessibilityLabel={t("firstName")}
                />
                <TextInput
                  style={styles.nameInput}
                  placeholder={t("lastName")}
                  value={formData.lastName}
                  placeholderTextColor={"#B9AAAA"}
                  onChangeText={(text) => handleChange("lastName", text)}
                  accessibilityLabel={t("lastName")}
                />
              </View>
              <Text style={styles.label}>{t("email")}</Text>
              <TextInput
                style={styles.input}
                placeholder={t("enterEmail")}
                value={formData.email}
                placeholderTextColor={"#B9AAAA"}
                onChangeText={(text) => handleChange("email", text)}
                keyboardType="email-address"
                accessibilityLabel={t("enterEmail")}
              />
              <Text style={styles.label}>{t("city")}</Text>
              <TextInput
                style={styles.input}
                placeholder={t("cityToEarn")}
                value={formData.city}
                placeholderTextColor={"#B9AAAA"}
                onChangeText={(text) => handleChange("city", text)}
                accessibilityLabel={t("cityToEarn")}
              />
              <Text style={styles.label}>{t("referralCode")}</Text>
              <TextInput
                style={styles.input}
                placeholder={t("optionalReferralCode")}
                value={formData.referralCode}
                placeholderTextColor={"#B9AAAA"}
                onChangeText={(text) => handleChange("referralCode", text)}
                accessibilityLabel={t("optionalReferralCode")}
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

            <Button
              placeholder={loading ? t("loading") : t("continue")}
              onPress={handleSubmit}
              disabled={loading}
            />
          </View>
        </ScrollView>
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
    fontSize: 14,
    color: Color.appDefaultColor,
  },
});
