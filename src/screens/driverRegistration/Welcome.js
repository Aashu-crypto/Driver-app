import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Color } from "../../../GlobalStyles";
import { Route } from "../../../routes";
const Welcome = ({navigation}) => {
  return (
    <SafeAreaView>
      <Pressable style={styles.btn} onPress={()=>{navigation.navigate(Route.VEHICLETYPE)}}>
        <Text style={styles.btnText}>Start Application</Text>
        <AntDesign name="right" size={20} color={Color.appDefaultColor} />
      </Pressable>
      <Text style={[styles.btnText, { paddingLeft: 15, marginLeft: 5 }]}>Settings</Text>
      <Pressable style={styles.btn}>
        <Text style={styles.btnText}>Profile Settings</Text>
        <AntDesign name="right" size={20} color={Color.appDefaultColor} />
      </Pressable>
    </SafeAreaView>
  );
};

export default Welcome;

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
});
