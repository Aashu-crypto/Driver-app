import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Color, width } from "../../GlobalStyles";
import { useTranslation } from "react-i18next";
const Button = ({ placeholder, onPress, btnWidth }) => {
  const t = useTranslation();
  return (
    <Pressable
      style={{
        justifyContent: "center",
        alignItems: "center",
        width: btnWidth || width * 0.9, // Use btnWidth if provided, otherwise default to 90% of screen width
        alignSelf: "center",
        marginBottom:10
      }}
      onPress={onPress}
    >
      <LinearGradient
        // Button Linear Gradient
        colors={[Color.appDefaultColor, Color.secondaryColor]}
        style={styles.button}
      >
        <Text style={styles.text}>{placeholder}</Text>
      </LinearGradient>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    padding: 15,
    alignItems: "center",
    borderRadius: 8,
    width: "100%",
    alignSelf: "center",
    marginTop: 20,
  },
  text: {
    backgroundColor: "transparent",
    fontSize: 16,
    color: "#fff",
    lineHeight: 24,
    textAlign: "center",
    fontWeight: "400",
  },
});
