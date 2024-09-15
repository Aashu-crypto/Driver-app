import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Color, FontFamily } from "../../../GlobalStyles";

const AppSettingsScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <SettingItem icon="volume-up" title="Sound & Voice" />
        <SettingItem icon="navigation" title="Navigation" />
        <SettingItem icon="accessibility" title="Accessibility" />
        <SettingItem icon="language" title="App Language" />
        <SettingItem icon="chat-bubble-outline" title="Communication" />
        <SettingItem icon="nightlight-round" title="Night Mode" />
        <SettingItem icon="speed" title="Speed limit" />
      </ScrollView>
    </View>
  );
};

const SettingItem = ({ icon, title }) => (
  <TouchableOpacity style={styles.settingItem}>
    <View style={styles.iconWrapper}>
      <MaterialIcons name={icon} size={24} color={Color.appDefaultColor} />
    </View>
    <Text style={styles.settingText}>{title}</Text>
    <Ionicons name="chevron-forward" size={20} color={Color.appDefaultColor} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F0",
  },

  scrollContainer: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 16,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    borderWidth: 1,
    borderColor: Color.borderColor,
  },
  iconWrapper: {
    width: 30,
    alignItems: "center",
  },
  settingText: {
    flex: 1,
    fontSize: 15,
    marginLeft: 10,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsRegular,
    color: "#595F75",
  },
});

export default AppSettingsScreen;
