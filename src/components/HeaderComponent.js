import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Color } from "../../GlobalStyles";
const HeaderComponent = ({ title = "" }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        padding: 15,
        gap: 15,
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <AntDesign name="arrowleft" size={24} color="black" />
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
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({});
