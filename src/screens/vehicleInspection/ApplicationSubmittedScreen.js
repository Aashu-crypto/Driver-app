import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { screen } from "../../Redux/Slice/screenNameSlice";
import { Route } from "../../../routes";
export default function ApplicationSubmittedScreen() {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        You're all set. Application submitted for verification.
      </Text>

      <Image
        source={{ uri: "https://example.com/sleeping_bell.png" }} // Replace with your image URI
        style={styles.image}
      />

      <Text style={styles.subText}>
        We will get in touch in 24 hours. Be ready to drive!
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch(screen(Route.HOME_STACK))}
      >
        <Text style={styles.buttonText}>
          Check Status Click to go to next screen
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F0F4FA",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1976D2",
    textAlign: "center",
    marginBottom: 30,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 30,
  },
  subText: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 40,
  },
  button: {
    borderColor: "#1976D2",
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 50,
  },
  buttonText: {
    fontSize: 16,
    color: "#1976D2",
    fontWeight: "bold",
  },
});
