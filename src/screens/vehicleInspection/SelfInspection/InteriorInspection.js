import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Color, height, width } from "../../../../GlobalStyles";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
const InteriorInspection = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.uploadBox}>
        <Ionicons
          name="camera-outline"
          size={32}
          color={Color.appDefaultColor}
        />
        <Text style={styles.uploadText}>Upload Interior Photo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InteriorInspection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.AlmostWhiteBackGround,
    alignItems:'center',
    justifyContent:'center'
  },
  uploadBox: {
    height: height / 4.5,
    backgroundColor: Color.backGroundColor,
    borderRadius: 8,
    borderColor: Color.borderColor,
    borderWidth: 1.5,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    width: width * 0.8,
    borderStyle: "dashed",
  },
});
