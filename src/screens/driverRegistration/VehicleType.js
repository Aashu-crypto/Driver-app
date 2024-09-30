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
import { Dropdown } from "react-native-element-dropdown";
import Entypo from "@expo/vector-icons/Entypo";

const VehicleType = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [text, setText] = React.useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [dropdownValue, setDropdownValue] = useState(null);
  const [isDropdownFocused, setIsDropdownFocused] = useState(false);

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

        {/* Dropdown for selecting car type */}
        <Dropdown
          style={[
            styles.dropdown,
            isDropdownFocused && { borderColor: Color.appDefaultColor },
          ]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          iconStyle={styles.iconStyle}
          itemTextStyle={{ fontSize: 14 }}
          data={carTypes}
          maxHeight={200}
          labelField="label"
          valueField="value"
          placeholder={!isDropdownFocused ? "Select Type" : "..."}
          value={selectedCategory}
          onFocus={() => setIsDropdownFocused(true)}
          onBlur={() => setIsDropdownFocused(false)}
          onChange={(item) => {
            setSelectedCategory(item);
            setIsDropdownFocused(false); // Reset focus after selection
          }}
        />

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
    borderColor: Color.borderColor,
  },
  btnText: {
    color: Color.textGraycolor,
  },
  header: {
    color: Color.appDefaultColor,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
    marginBottom: 10,
  },
  pickerContainer: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: Color.borderColor,
    paddingHorizontal: 10,
  },
  hiddenInput: {
    backgroundColor: "#fff",
    borderRadius: 20,
    borderColor: Color.borderColor,
  },
  dropdown: {
    height: 50,
    borderColor: Color.borderColor,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    justifyContent: "center",
    width: "100%",
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  placeholderStyle: {
    fontSize: 14,
    color: Color.gray,
  },
  selectedTextStyle: {
    fontSize: 14,
    color: Color.textGraycolor,
  },
  iconStyle: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
});
