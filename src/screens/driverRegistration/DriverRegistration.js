import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { Color, FontFamily, height, width } from "../../../GlobalStyles";
import Checkbox from "expo-checkbox";
import Button from "../../components/Button";
import { Route } from "../../../routes";
const DriverRegistration = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Color.backGroundColor }}>
      <Image
        source={require("../../../assets/img/JoyfullYoung.png")}
        style={{ width: width, height: height / 3.5 }}
      />
      <View style={styles.mainView}>
        <Text style={styles.header}>Welcome new Zaptric partner</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Name</Text>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <TextInput
              style={styles.nameInput}
              placeholder="First Name"
              value={firstName}
              onChangeText={setFirstName}
            />
            <TextInput
              style={styles.nameInput}
              placeholder="Last Name"
              value={lastName}
              onChangeText={setLastName}
            />
          </View>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter email id"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <Text style={styles.label}>City you would like to earn</Text>
          <TextInput
            style={styles.input}
            placeholder="City you would like to earn"
            value={city}
            onChangeText={setCity}
          />
          <Text style={styles.label}>Referral code</Text>
          <TextInput
            style={styles.input}
            placeholder="Referral code (Optional)"
            value={referralCode}
            onChangeText={setReferralCode}
          />
        </View>

        <View style={styles.checkboxContainer}>
          <Checkbox
            value={agreeToTerms}
            onValueChange={setAgreeToTerms}
            tintColors={{ true: "#007bff", false: "#007bff" }}
          />
          <Text style={styles.checkboxLabel}>
            By continuing, you agree to Zaptric terms & conditions
          </Text>
        </View>

        <Button
          placeholder={"Continue"}
          onPress={() => {
            navigation.navigate(Route.WELCOME);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default DriverRegistration;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
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
    color: Color.textGraycolor,
    textAlign: "left",

    alignSelf: "flex-start",
  },
  inputContainer: {
    width: width * 0.9,

    alignItems: "center",
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
    justifyContent: "space-between",
  },
  input: {
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
    width: "100%",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    width: width * 0.9,
  },
  checkboxLabel: {
    marginLeft: 10,
    fontSize: 14,
    color: Color.appDefaultColor,
  },
  button: {
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});
