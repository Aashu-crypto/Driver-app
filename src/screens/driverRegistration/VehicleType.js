import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Color, width } from "../../../GlobalStyles";
import Button from "../../components/Button";
import { Route } from "../../../routes";
import HeaderComponent from "../../components/HeaderComponent";
import { Picker } from "@react-native-picker/picker";
import { TextInput } from "react-native-paper";

const VehicleType = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [text, setText] = React.useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  // Dummy data for vehicle categories
  const carTypes = [
    { label: "SEDAN", value: "sedan" },
    { label: "SUV", value: "suv" },
    { label: "HATCHBACK", value: "hatchback" },
    { label: "COUPE", value: "coupe" },
    { label: "CONVERTIBLE", value: "convertible" },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View
        style={{
          width: width * 0.9,
          justifyContent: "center",
          alignSelf: "center",
          gap: 10,
        }}
      >
        <Text style={styles.header}>Please enter your vehicle details</Text>
        <Text style={[styles.btnText]}>Select category</Text>

        {/* Picker for selecting car type */}
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedCategory}
            onValueChange={(itemValue) => setSelectedCategory(itemValue)}
            style={styles.picker}
          >
            {carTypes.map((type) => (
              <Picker.Item
                key={type.value}
                label={type.label}
                value={type.value}
              />
            ))}
          </Picker>
        </View>

        <Text style={[styles.btnText]}>Vehicle number</Text>
        <TextInput
          style={styles.hiddenInput}
          value={vehicleNumber}
          outlineColor={Color.borderColor}
          activeOutlineColor={Color.appDefaultColor}
          onChangeText={(text) => setVehicleNumber(text)}
          mode="outlined"
          theme={{
            roundness: 10, // Set borderRadius
          }}
          right={<TextInput.Icon icon="alert-circle-outline" color="gray" />}
        />

        <Button
          placeholder="Continue"
          onPress={() => {
            navigation.navigate(Route.VEHICLEINSPECION);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default VehicleType;

const styles = StyleSheet.create({
  btn: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    padding: 15,
    borderRadius: 10,
    borderColor: "#C3C2FF",
  },
  btnText: {
    color: Color.textGraycolor,
  },
  header: {
    color: Color.appDefaultColor,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
  },
  pickerContainer: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#C3C2FF",
    paddingHorizontal: 10,
  },
  picker: {
    height: 50,
    width: "100%",
  },
  hiddenInput: {
    backgroundColor: "#fff",
    borderRadius: 20,
    borderColor: Color.borderColor,
  },
});
