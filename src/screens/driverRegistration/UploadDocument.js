import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Pressable,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome"; // Make sure to install react-native-vector-icons
import HeaderComponent from "../../components/HeaderComponent";
import { Color, FontFamily } from "../../../GlobalStyles";
import AntDesign from "@expo/vector-icons/AntDesign";
import ImageIcon from "../../../assets/img/imageIcon.svg";
import Button from "../../components/Button";
import { Route } from "../../../routes";
const UploadDocument = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <HeaderComponent title="Upload Documentation" />
      <View style={{ marginHorizontal: 10 }}>
        <Text
          style={{
            fontSize: 11,
            lineHeight: 16.5,
            color: Color.textGraycolor,
            fontFamily: FontFamily.poppinsRegular,
          }}
        >
          Earnings are only a few steps away.
        </Text>
        <Text
          style={{
            color: "#4A4A4A",
            fontSize: 16,
            fontWeight: "400",
            lineHeight: 24,
            fontFamily: FontFamily.poppinsRegular,
            marginTop: 10,
            marginBottom: 5,
          }}
        >
          Driver’s documents
        </Text>
        <Pressable
          style={{
            flexDirection: "row",
            borderRadius: 10,
            alignItems: "center",
            padding: 15,
            justifyContent: "space-between",
            backgroundColor: "#fff", // Background color to show the shadow
            elevation: 4, // Android elevation
            shadowColor: "#000", // iOS shadow color
            shadowOffset: { width: 0, height: 2 }, // iOS shadow offset
            shadowOpacity: 0.25, // iOS shadow opacity
            shadowRadius: 3.84, // iOS shadow radius
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <ImageIcon />
            <View style={{ marginLeft: 10 }}>
              <Text
                style={{
                  fontSize: 14,
                  lineHeight: 21,
                  fontWeight: "500",
                  fontFamily: FontFamily.poppinsRegular,
                }}
              >
                Profile Picture
              </Text>
              <Text style={{ fontSize: 10, lineHeight: 15, fontWeight: "400" }}>
                To be Submitted
              </Text>
            </View>
          </View>

          <View
            style={{
              backgroundColor: "#E5E5E5",
              padding: 8,
              borderRadius: 20,
              justifyContent: "flex-end",
            }}
          >
            <AntDesign name="upload" size={24} color="black" />
          </View>
        </Pressable>
      </View>

      <View style={{ position: "absolute", bottom: 10, alignSelf: "center" }}>
        <Pressable style={{ alignItems: "center" }}>
          <Text style={{ color: "red", fontSize: 16, fontWeight: "500" }}>
            Cancel & Reset
          </Text>
        </Pressable>

        <Button
          placeholder={"Next"}
          onPress={() => navigation.navigate(Route.VEHICLESELFINSPECION)}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default UploadDocument;
