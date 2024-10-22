import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import {
  AntDesign,
  FontAwesome,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Color, width } from "../../../GlobalStyles";
import HeaderComponent from "../../components/HeaderComponent";
import { Route } from "../../../routes";

// Reusable Profile Option Component
const ProfileOption = ({ iconComponent: Icon, iconName, text, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.option}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Icon name={iconName} size={24} color={Color.appDefaultColor} />
      <Text style={styles.optionText}>{text}</Text>
      <AntDesign name="right" size={18} color={Color.appDefaultColor} />
    </TouchableOpacity>
  );
};

const ProfileSetting = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <HeaderComponent title="Rakesh Kumar" />

      {/* Profile Options */}
      <ProfileOption
        iconComponent={FontAwesome}
        iconName="user"
        text="View your profile"
        onPress={() => {
          navigation.navigate(Route.EDITPROFILE);
          console.log("View your profile pressed");
        }}
      />

      <ProfileOption
        iconComponent={FontAwesome5}
        iconName="language"
        text="Set language"
        onPress={() => {
          navigation.navigate(Route.SETLANGUAGE);
          console.log("Set language pressed");
        }}
      />

      <ProfileOption
        iconComponent={MaterialIcons}
        iconName="settings"
        text="Set preferences"
        onPress={() => {
          console.log("Set preferences pressed");
        }}
      />

      <ProfileOption
        iconComponent={AntDesign}
        iconName="questioncircleo"
        text="Support"
        onPress={() => {
          console.log("Support pressed");
        }}
      />

      {/* Logout Button */}
      <View style={styles.logOutBtn}>
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    elevation: 1,
    width: "90%",
    alignSelf: "center",
    borderWidth: 1,
    borderColor: Color.borderColor,
  },
  optionText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
    color: "#333",
  },
  logoutButton: {
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
    width: "90%",
    alignSelf: "center",
  },
  logoutText: {
    color: "red",
    fontSize: 16,
  },
  logOutBtn: {
    position: "absolute",
    bottom: 10,
    width: width * 0.9,
    alignSelf: "center",
  },
});

export default ProfileSetting;
