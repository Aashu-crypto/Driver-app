import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Ionicons, FontAwesome, MaterialIcons } from "@expo/vector-icons"; // For icons
import { Color, width } from "../../../GlobalStyles";
import Button from "../../components/Button";

const EditUserProfile = ({ navigation }) => {
  const [firstName, setFirstName] = useState("Rakesh");
  const [lastName, setLastName] = useState("Kumar");
  const [email, setEmail] = useState("rakesh.kumar@gmail.com");
  const [phone, setPhone] = useState("+91 1234567891");
  const [address, setAddress] = useState("Neemuch RD. Gopalbari, Bari Sad");

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Profile Image */}
        <View style={styles.profileContainer}>
          <View style={styles.profileImageWrapper}>
            <Image
              source={{ uri: "https://randomuser.me/api/portraits/men/75.jpg" }}
              style={styles.profileImage}
            />
            <TouchableOpacity style={styles.cameraIcon}>
              <MaterialIcons name="camera-alt" size={18} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Rating Section */}
        <View style={styles.ratingContainer}>
          <View style={styles.ratingBox}>
            <FontAwesome name="star" size={16} color="#FFC107" />
            <View>
              <Text style={styles.ratingText}>4.75</Text>
              <Text style={styles.ratingLabel}>Weekly rating</Text>
            </View>
          </View>
          <View style={styles.ratingBox}>
            <FontAwesome name="star" size={16} color="#FFC107" />
            <View>
              <Text style={styles.ratingText}>4.75</Text>
              <Text style={styles.ratingLabel}>Overall rating</Text>
            </View>
          </View>
          <View style={styles.ratingBox}>
            <Ionicons name="checkmark-circle" size={16} color="green" />
            <View>
              <Text style={styles.ratingText}>98%</Text>
              <Text style={styles.ratingLabel}>Acceptance</Text>
            </View>
          </View>
        </View>

        {/* Editable Form Fields */}
        <View style={styles.inputContainer}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TextInput
              style={[styles.input, { width: width / 2.3 }]}
              value={firstName}
              onChangeText={setFirstName}
              placeholder="First Name"
            />
            <TextInput
              style={[styles.input, { width: width / 2.3 }]}
              value={lastName}
              onChangeText={setLastName}
              placeholder="Last Name"
            />
          </View>

          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
            placeholder="Phone"
            keyboardType="phone-pad"
          />
          <TextInput
            style={styles.input}
            value={address}
            onChangeText={setAddress}
            placeholder="Address"
          />
        </View>

        {/* Save Button */}
        <Button placeholder={"Save"} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  scrollViewContent: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },

  profileContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  profileImageWrapper: {
    position: "relative",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  cameraIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#3D6DFF",
    padding: 6,
    borderRadius: 20,
  },
  ratingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  ratingBox: {
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 4,
    paddingVertical: 8,

    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    flex: 1,
    marginHorizontal: 5,
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderWidth: 1,
    borderColor: Color.borderColor,
  },
  ratingText: {
    fontWeight: "500",
    fontSize: 13,
    marginTop: 4,
    lineHeight: 19.5,
    color: "#595F75",
  },
  ratingLabel: {
    fontSize: 8,
    color: "#8A91AC",
    lineHeight: 12,
    fontWeight: "400",
  },
  inputContainer: {
    marginVertical: 10,
  },
  input: {
    backgroundColor: "#FFF",
    padding: 16,
    borderRadius: 10,
    fontSize: 16,
    color: "#333",
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  saveButton: {
    backgroundColor: "#3D6DFF",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  saveButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default EditUserProfile;
