import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { screen } from "../../Redux/Slice/screenNameSlice";
import { Route } from "../../../routes";
import { Color, FontFamily } from "../../../GlobalStyles";
export default function ApplicationSubmittedScreen() {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        You're all set. Application submitted for verification.
      </Text>
      <View style={styles.imageWrapper}>
        <Image
          source={require("../../../assets/img/SubmittedBell.png")} // Replace with your image URI
          style={styles.image}
        />
      </View>

      <Text style={styles.subText}>
        We will get in touch in 24 hours. Be ready to drive!
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch(screen(Route.HOME_STACK))}
      >
        <Text style={styles.buttonText}>Check Status</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    color: Color.appDefaultColor,
    textAlign: "center",
    lineHeight: 36,
  },
  image: {
    width: 50,
    height: 50,
  },
  imageWrapper: {
    backgroundColor: "#CFD7F8",
    padding: 20,
    borderRadius: 50,
    marginVertical: 60,
  },
  subText: {
    fontSize: 14,
    color: "#677093",
    textAlign: "center",
    marginBottom: 40,
    fontWeight: "400",

    textAlign: "center",
    lineHeight: 21,
    maxWidth: "70%",
  },
  button: {
    borderColor: Color.appDefaultColor,
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 50,
    width: "90%",
    shadowColor: "#000",
    shadowOpacity: 0.6,
    shadowOffset: { height: 0, width: 2 },
  },
  buttonText: {
    fontSize: 16,
    color: Color.appDefaultColor,
    fontWeight: "500",
    lineHeight: 24,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "center",
  },
});
