import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons"; // For icons

import Stroke from "../../assets/icons/Stroke.svg";
const DestinationIcon = () => {
  return (
    <View>
      <View style={styles.locationContainerIcon}>
        <Ionicons name="location-sharp" size={16} color="green" />
      </View>
      <View style={{ alignItems: "center" }}>
        <Stroke />
      </View>

      <View style={styles.locationContainer}>
        <Ionicons name="location-sharp" size={16} color="red" />
      </View>
    </View>
  );
};

export default DestinationIcon;

const styles = StyleSheet.create({
  locationContainerIcon: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 2,
  },
});
