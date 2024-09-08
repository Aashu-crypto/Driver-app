import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { FontAwesome, AntDesign, MaterialIcons } from "@expo/vector-icons";
import HeaderComponent from "../../components/HeaderComponent";
import { Color } from "../../../GlobalStyles";
import Button from "../../components/Button";
import { ScrollView } from "react-native";

const EditProfile = () => {
  const [gender, setGender] = useState(null);

  return (
    <ScrollView>
 
      <HeaderComponent />
      <View style={styles.container}>
        {/* Header */}

        {/* Profile Picture */}
        <View style={styles.profilePicContainer}>
          <View style={styles.profilePicWrapper}>
            <FontAwesome name="user" size={60} color={Color.appDefaultColor} />
            <TouchableOpacity style={styles.cameraIcon}>
              <AntDesign name="camera" size={18} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Input Fields */}
        <View style={styles.inputContainer}>
          <View style={styles.row}>
            <TextInput style={styles.input} placeholder="First name" />
            <TextInput style={styles.input} placeholder="Last name" />
          </View>
          <TextInput
            style={styles.inputFullWidth}
            placeholder="+91 1234567891"
          />
          <TextInput
            style={styles.inputFullWidth}
            placeholder="Email address"
          />
          <View style={styles.row}>
            <TextInput style={styles.input} placeholder="City" />
            <MaterialIcons
              name="arrow-drop-down"
              size={24}
              color="gray"
              style={styles.dropdownIcon}
            />
          </View>
          <View style={styles.row}>
            <TextInput style={styles.input} placeholder="DOB" />
            <MaterialIcons
              name="calendar-today"
              size={24}
              color="gray"
              style={styles.calendarIcon}
            />
          </View>
        </View>

        {/* Gender Selection */}
        <Text style={styles.genderLabel}>Select gender</Text>
        <View style={styles.genderContainer}>
          <TouchableOpacity
            style={[
              styles.genderButton,
              gender === "male" && styles.genderButtonSelected,
            ]}
            onPress={() => setGender("male")}
          >
            <Text
              style={[
                styles.genderText,
                gender === "male" && styles.genderTextSelected,
              ]}
            >
              Male
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.genderButton,
              gender === "female" && styles.genderButtonSelected,
            ]}
            onPress={() => setGender("female")}
          >
            <Text
              style={[
                styles.genderText,
                gender === "female" && styles.genderTextSelected,
              ]}
            >
              Female
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.genderButton,
              gender === "others" && styles.genderButtonSelected,
            ]}
            onPress={() => setGender("others")}
          >
            <Text
              style={[
                styles.genderText,
                gender === "others" && styles.genderTextSelected,
              ]}
            >
              Others
            </Text>
          </TouchableOpacity>
        </View>

        {/* Update Button */}
        <Button placeholder={"Update"}/>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  profilePicContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  profilePicWrapper: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 100,
    backgroundColor: "#fff",
    borderRadius: 50,
    elevation: 5,
  },
  cameraIcon: {
    position: "absolute",
    right: 5,
    bottom: 5,
    backgroundColor: Color.appDefaultColor,
    borderRadius: 15,
    padding: 5,
  },
  inputContainer: {
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    marginRight: 10,
    elevation: 2,
    color: "#333",
  },
  inputFullWidth: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    elevation: 2,
    color: "#333",
  },
  dropdownIcon: {
    position: "absolute",
    right: 15,
    top: 30,
  },
  calendarIcon: {

  },
  genderLabel: {
    fontSize: 16,
    marginVertical: 10,
    color: "#333",
  },
  genderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  genderButton: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 5,
    borderColor: Color.appDefaultColor,
    borderWidth: 1,
  },
  genderButtonSelected: {
    backgroundColor: Color.appDefaultColor,
  },
  genderText: {
    color: Color.appDefaultColor,
  },
  genderTextSelected: {
    color: "#fff",
  },
  updateButton: {
    backgroundColor: Color.appDefaultColor,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  updateButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default EditProfile;
