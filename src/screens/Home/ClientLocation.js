import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Color } from "../../../GlobalStyles";

const ClientLocation = () => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={Color.appDefaultColor} />
      <Text>ClientLocation</Text>
    </SafeAreaView>
  );
};

export default ClientLocation;

const styles = StyleSheet.create({});
