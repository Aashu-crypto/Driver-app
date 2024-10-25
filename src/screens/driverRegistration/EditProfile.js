import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
  Platform,
} from "react-native";
import { FontAwesome, AntDesign, MaterialIcons } from "@expo/vector-icons";
import { TextInput } from "react-native-paper";
import { useSelector } from "react-redux";
import DateTimePicker from "@react-native-community/datetimepicker";
import Button from "../../components/Button";
import axios from "axios"; // For API requests
import { Color } from "../../../GlobalStyles";
import { backend_Host } from "../../../config";
import { useDispatch } from "react-redux";
import { driverProfile } from "../../Redux/Slice/DriverProfile";
const EditProfile = () => {
  const driver = useSelector((state) => state.driver.data);
const dispatch = useDispatch()
  const [firstName, setFirstName] = useState(driver.firstName || "");
  const [lastName, setLastName] = useState(driver.lastName || "");
  const [phone, setPhone] = useState(driver.phoneNumber || "");
  const [email, setEmail] = useState(driver.email || "");
  const [city, setCity] = useState(driver.city || "");
  const [dob, setDob] = useState(
    driver.dob ? new Date(driver.dob) : new Date()
  );
  const [gender, setGender] = useState(driver.gender || null);
  const [profilePicture, setProfilePicture] = useState(driver.photoUrl || "");
  const [showDatePicker, setShowDatePicker] = useState(false); // For showing date picker

  // Handle the Update button press and send the updated data to the backend
  const handleUpdate = async () => {
    try {
      const payload = {
        firstName,
        lastName,
        phoneNumber: phone,
        email,
        city,
        dob: dob ? dob.toISOString() : null,
        gender,
        // photoUrl: profilePicture,
      };

      const response = await axios.put(
        `${backend_Host}/driver/edit-profile/${driver.id}`,
        payload
      ); // Update the API endpoint accordingly

      if (response.status === 200) {
        dispatch(driverProfile(response.data))
        console.log(driver);
        
        Alert.alert(
          "Profile Updated",
          "Your profile has been updated successfully."
        );
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      Alert.alert(
        "Update Failed",
        "There was a problem updating your profile. Please try again."
      );
    }
  };

  // Handle date change from DateTimePicker
  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || dob;
    setShowDatePicker(Platform.OS === "ios"); // Close the picker on Android after selection
    setDob(currentDate);
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#F9F9F9" }}>
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
              placeholder="First Name"
              outlineColor="#EEEEEE"
              activeOutlineColor={Color.appDefaultColor}
              mode="outlined"
              theme={{ roundness: 10 }}
            />
            <TextInput
              value={lastName}
              onChangeText={setLastName}
              style={styles.nameInput}
              placeholder="Last Name"
              outlineColor="#EEEEEE"
              activeOutlineColor={Color.appDefaultColor}
              mode="outlined"
              theme={{ roundness: 10 }}
            />
          </View>

          <TextInput
            value={phone}
            onChangeText={setPhone}
            style={styles.inputFullWidth}
            placeholder="Phone Number"
            outlineColor="#EEEEEE"
            activeOutlineColor={Color.appDefaultColor}
            mode="outlined"
            theme={{ roundness: 10 }}
          />

          <TextInput
            value={email}
            onChangeText={setEmail}
            style={styles.inputFullWidth}
            placeholder="Email Address"
            outlineColor="#EEEEEE"
            activeOutlineColor={Color.appDefaultColor}
            mode="outlined"
            theme={{ roundness: 10 }}
          />

          <TextInput
            value={city}
            onChangeText={setCity}
            style={styles.inputFullWidth}
            placeholder="City"
            outlineColor="#EEEEEE"
            activeOutlineColor={Color.appDefaultColor}
            mode="outlined"
            theme={{ roundness: 10 }}
          />

          {/* DOB Field with Date Picker */}
          <TouchableOpacity onPress={() => setShowDatePicker(true)}>
            <TextInput
              value={dob.toISOString().split("T")[0]} // Display the date in YYYY-MM-DD format
              style={styles.inputFullWidth}
              placeholder="Date of Birth"
              editable={false} // Disable manual typing
              outlineColor="#EEEEEE"
              activeOutlineColor={Color.appDefaultColor}
              mode="outlined"
              theme={{ roundness: 10 }}
              right={<TextInput.Icon name="calendar-today" />}
            />
          </TouchableOpacity>

          {/* Show DateTimePicker */}
          {showDatePicker && (
            <DateTimePicker
              value={dob}
              mode="date"
              display="default"
              onChange={onDateChange}
              maximumDate={new Date()} // Ensure the DOB can't be in the future
            />
          )}

          {/* Gender Selection */}
          <Text style={styles.genderLabel}>Select Gender</Text>
          <View style={styles.genderContainer}>
            <TouchableOpacity
              style={[
                styles.genderButton,
                gender === "MALE" && styles.genderButtonSelected,
              ]}
              onPress={() => setGender("MALE")}
            >
              <Text
                style={
                  gender === "MALE"
                    ? styles.genderTextSelected
                    : styles.genderText
                }
              >
                Male
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.genderButton,
                gender === "FEMALE" && styles.genderButtonSelected,
              ]}
              onPress={() => setGender("FEMALE")}
            >
              <Text
                style={
                  gender === "FEMALE"
                    ? styles.genderTextSelected
                    : styles.genderText
                }
              >
                Female
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.genderButton,
                gender === "OTHERS" && styles.genderButtonSelected,
              ]}
              onPress={() => setGender("OTHERS")}
            >
              <Text
                style={
                  gender === "OTHERS"
                    ? styles.genderTextSelected
                    : styles.genderText
                }
              >
                Others
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Update Button */}
        <Button onPress={handleUpdate} placeholder={"Update Profile"} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
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
    marginBottom: 10,
  },
  nameInput: {
    height: 50,
    backgroundColor: "#fff",
    width: "49%",
  },
  inputFullWidth: {
    height: 50,
    backgroundColor: "#fff",
    marginBottom: 15,
  },
  genderLabel: {
    fontSize: 13,
    color: Color.gray,
    marginBottom: 10,
  },
  genderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  genderButton: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 25,
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
