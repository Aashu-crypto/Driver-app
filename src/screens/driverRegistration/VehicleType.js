import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Color, width } from "../../../GlobalStyles";
import Button from "../../components/Button";
import { Route } from "../../../routes";
import HeaderComponent from "../../components/HeaderComponent";
const VehicleType = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1,backgroundColor:'#fff' }}>
      <HeaderComponent title={"Add your vehicel to continue"} />
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
        <Pressable style={styles.btn}>
          <Text style={styles.btnText}>SEDAN</Text>
          <AntDesign name="right" size={20} color={Color.appDefaultColor} />
        </Pressable>
        <Text style={[styles.btnText]}>Vehicle number</Text>
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
});
