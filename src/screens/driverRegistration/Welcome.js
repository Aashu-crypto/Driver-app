import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Color } from "../../../GlobalStyles";
import { Route } from "../../../routes";
import HeaderComponent from "../../components/HeaderComponent";
import { useTranslation } from "react-i18next";
const Welcome = ({ navigation }) => {
  const { t } = useTranslation(); 
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Color.AlmostWhiteBackGround }}>
    {/* Replace the title with a translated string */}
    <HeaderComponent title={t("welcomeUser", { name: "Rakesh" })} />
    
    {/* Use translated strings in the UI */}
    <Pressable
      style={styles.btn}
      onPress={() => {
        console.log("Working");
        navigation.navigate(Route.VEHICLETYPE);
      }}
    >
      <Text style={styles.btnText}>{t("startApplication")}</Text>
      <AntDesign name="right" size={20} color={Color.appDefaultColor} />
    </Pressable>
    
    <Text style={[styles.btnText, { paddingLeft: 15, marginLeft: 5 }]}>
      {t("settings")}
    </Text>

    <Pressable
      style={styles.btn}
      onPress={() => {
        navigation.navigate(Route.PROFILESETTING);
      }}
    >
      <Text style={styles.btnText}>{t("profileSettings")}</Text>
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
    margin: 10,
    borderRadius: 10,
    borderColor: "#C3C2FF",
    backgroundColor:"#fff"
  },
  btnText: {
    color: Color.textGraycolor,
  },
});
