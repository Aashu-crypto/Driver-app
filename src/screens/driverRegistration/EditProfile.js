import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { FontAwesome, AntDesign, MaterialIcons } from "@expo/vector-icons";
import HeaderComponent from "../../components/HeaderComponent";
import { Color } from "../../../GlobalStyles";
import Button from "../../components/Button";
import { TextInput } from "react-native-paper";

const EditProfile = () => {
  // Define state for form inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState(null);

  // Handle Update button press
  const handleUpdate = () => {
    // You can add validation and API requests here
    console.log("Profile updated", { firstName, lastName, phone, email, city, dob, gender });
  };

  return (
    <ScrollView style={{flex:1}}>
  
      <View style={styles.container}>
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
            <TextInput
              value={firstName}
              onChangeText={setFirstName}
              style={styles.nameInput}
              placeholder="First name"
              outlineColor="#EEEEEE"
              activeOutlineColor={Color.appDefaultColor}
              mode="outlined"
              placeholderTextColor={"#B9AAAA"}
              theme={{ roundness: 10 }}
            />
            <TextInput
              value={lastName}
              onChangeText={setLastName}
              style={styles.nameInput}
              placeholder="Last name"
              outlineColor="#EEEEEE"
              activeOutlineColor={Color.appDefaultColor}
              mode="outlined"
              placeholderTextColor={"#B9AAAA"}
              theme={{ roundness: 10 }}
            />
          </View>
          <TextInput
            value={phone}
            onChangeText={setPhone}
            style={styles.inputFullWidth}
            placeholder="+91 1234567891"
            outlineColor="#EEEEEE"
            activeOutlineColor={Color.appDefaultColor}
            mode="outlined"
            placeholderTextColor={"#B9AAAA"}
            theme={{ roundness: 10 }}
          />
          <TextInput
            value={email}
            onChangeText={setEmail}
            style={styles.inputFullWidth}
            placeholder="Email address"
            outlineColor="#EEEEEE"
            activeOutlineColor={Color.appDefaultColor}
            mode="outlined"
            placeholderTextColor={"#B9AAAA"}
            theme={{ roundness: 10 }}
          />
          <View style={styles.row}>
            <TextInput
              value={city}
              onChangeText={setCity}
              style={styles.nameInput}
              placeholder="City"
              outlineColor="#EEEEEE"
              activeOutlineColor={Color.appDefaultColor}
              mode="outlined"
              placeholderTextColor={"#B9AAAA"}
              theme={{ roundness: 10 }}
            />
            <MaterialIcons
              name="arrow-drop-down"
              size={24}
              color="gray"
              style={styles.dropdownIcon}
            />
          </View>
          <View style={styles.row}>
            <TextInput
              value={dob}
              onChangeText={setDob}
              style={styles.nameInput}
              placeholder="DOB"
              outlineColor="#EEEEEE"
              activeOutlineColor={Color.appDefaultColor}
              mode="outlined"
              placeholderTextColor={"#B9AAAA"}
              theme={{ roundness: 10 }}
            />
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
        <Button onPress={handleUpdate} placeholder={"Update"} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.AlmostWhiteBackGround,
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
  nameInput: {
    height: 50,
    borderColor: "#EEEEEE",
    borderWidth: 1.5,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
    width: "49%",
    fontSize: 14,
  },
  inputFullWidth: {
    height: 50,
    borderColor: "#EEEEEE",
    borderWidth: 1.5,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
    width: "100%",
    fontSize: 14,
  },
  dropdownIcon: {
    position: "absolute",
    right: 15,
    top: 30,
  },
  calendarIcon: {
    position: "absolute",
    right: 15,
    top: 30,
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
});

export default EditProfile;
