import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Color } from "../../GlobalStyles";

const HeaderComponent = ({ title = "" }) => {
  const navigation = useNavigation(); // Access the navigation object

  return (
    <SafeAreaView
      style={{
        flexDirection: "row",
        padding: 15,
        gap: 15,
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ marginLeft: 10 }}
      >
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>
      <Text
        style={{
          color: Color.appDefaultColor,
          fontSize: 20,
          lineHeight: 30,
          fontWeight: "500",
        }}
      >
        {title}
      </Text>
    </SafeAreaView>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({});
