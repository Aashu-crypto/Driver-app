import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons"; // For icons
import Stroke from "../../assets/img/Stroke";
import { Color } from "../../GlobalStyles";

const DestinationIcon = ({ height }) => {
  return (
    <View>
      <View style={styles.locationContainerIcon}>
        <Ionicons name="location-sharp" size={16} color={Color.green} />
      </View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Stroke height={height} width={20} />
      </View>

      <View style={styles.locationContainerIcon}>
        <Ionicons name="location-sharp" size={16} color={Color.red} />
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
    marginLeft: 2,
  },
});
