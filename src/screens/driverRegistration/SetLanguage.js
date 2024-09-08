import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import HeaderComponent from "../../components/HeaderComponent";
import { Color } from "../../../GlobalStyles";

// Reusable Language Option Component
const LanguageOption = ({ icon, language, onPress }) => {
  return (
    <TouchableOpacity style={styles.option} onPress={onPress}>
      <View style={styles.languageIcon}>{icon}</View>
      <Text style={styles.optionText}>{language}</Text>
      <AntDesign name="right" size={18} color="gray" />
    </TouchableOpacity>
  );
};

const ChooseLanguageScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <HeaderComponent title="Choose preferred language" />

      {/* Language Options */}
      <View style={{ marginTop: 10 }}>
        <LanguageOption
          icon={
            <FontAwesome
              name="language"
              size={24}
              color={Color.appDefaultColor}
            />
          }
          language="English"
          onPress={() => console.log("English selected")}
        />

        <LanguageOption
          icon={<Text style={styles.languageIconText}>आ</Text>}
          language="हिंदी"
          onPress={() => console.log("Hindi selected")}
        />

        <LanguageOption
          icon={<Text style={styles.languageIconText}>आ</Text>}
          language="मराठी"
          onPress={() => console.log("Marathi selected")}
        />

        <LanguageOption
          icon={<Text style={styles.languageIconText}>தமிழ்</Text>}
          language="தமிழ்"
          onPress={() => console.log("Tamil selected")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f7",
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: 10,
    width: "90%",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    elevation: 2,
  },
  optionText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
    color: "#333",
  },
  languageIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#e0e7f4",
    justifyContent: "center",
    alignItems: "center",
  },
  languageIconText: {
    fontSize: 18,
    fontWeight: "bold",
    color: Color.appDefaultColor,
  },
});

export default ChooseLanguageScreen;
