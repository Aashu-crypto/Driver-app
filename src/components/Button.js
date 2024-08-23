import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Color, width } from "../../GlobalStyles";
const Button = ({ placeholder, onPress }) => {
  return (
    <Pressable
      style={{ justifyContent: "center", alignItems: "center" ,width:width*0.90}}
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
    borderRadius: 5,
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
