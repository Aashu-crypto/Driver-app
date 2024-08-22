import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Color } from "../../../GlobalStyles";
import Button from "../../components/Button";
import { Route } from "../../../routes";
const VehicleType = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text style={styles.header}>Please enter your vehicle details</Text>
      <Text style={[styles.btnText, { paddingLeft: 15, marginLeft: 5 }]}>
        Select category
      </Text>
      <Pressable style={styles.btn}>
        <Text style={styles.btnText}>SEDAN</Text>
        <AntDesign name="right" size={20} color={Color.appDefaultColor} />
      </Pressable>
      <Text style={[styles.btnText, { paddingLeft: 15, marginLeft: 5 }]}>
        Vehicle number
      </Text>
      <Pressable style={styles.btn}>
        <Text style={styles.btnText}>Vehicle number</Text>
        <AntDesign name="right" size={20} color={Color.appDefaultColor} />
      </Pressable>
      <Button
        placeholder="Continue"
        onPress={() => {
          navigation.navigate(Route.VEHICLEINSPECION);
        }}
      />
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
    margin: 5,
    borderRadius: 10,
    borderColor: "#C3C2FF",
  },
  btnText: {
    color: Color.textGraycolor,
  },
  header: {
    color: Color.appDefaultColor,
  },
});
