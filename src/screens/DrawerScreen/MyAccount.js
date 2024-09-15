import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {
  MaterialIcons,
  FontAwesome5,
  Ionicons,
  Entypo,
  FontAwesome,
} from "@expo/vector-icons";
import { Color, FontFamily } from "../../../GlobalStyles";
import { Route } from "../../../routes";

// JSON data for the menu items
const menuItems = [
  {
    icon: <FontAwesome5 name="car" size={24} color={Color.appDefaultColor} />,
    title: "Vehicles",
  },
  {
    icon: (
      <FontAwesome5 name="file-alt" size={24} color={Color.appDefaultColor} />
    ),
    title: "Documents",
    route: Route.DOCUMENT,
  },
  {
    icon: (
      <FontAwesome5
        name="credit-card"
        size={24}
        color={Color.appDefaultColor}
      />
    ),
    title: "Payment",
  },
  {
    icon: <Ionicons name="home" size={24} color={Color.appDefaultColor} />,
    title: "Saved Address",
    route: Route.SAVEDADDRESS,
  },
  {
    icon: (
      <FontAwesome5 name="car-crash" size={24} color={Color.appDefaultColor} />
    ),
    title: "Vehicle Insurance",
  },
  {
    icon: (
      <Ionicons name="settings-sharp" size={24} color={Color.appDefaultColor} />
    ),
    title: "App Setting",
    route: Route.APPSETTING,
  },
  {
    icon: (
      <FontAwesome name="info-circle" size={24} color={Color.appDefaultColor} />
    ),
    title: "About",
  },
];

const MyAccountScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Menu List */}
      <View style={styles.menuContainer}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            style={styles.menuItem}
            key={index}
            onPress={() => {
              if (item.route) {
                navigation.navigate(item.route);
              }
              else {
                navigation.navigate(Route.SAVEDADDRESS)
              }
            }}
          >
            <View style={styles.iconTextContainer}>
              {item.icon}
              <View style={styles.textContainer}>
                <Text style={styles.menuTitle}>{item.title}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default MyAccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f4f9",
  },

  menuContainer: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  menuItem: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 2,
    borderWidth: 0.9,
    borderColor: Color.borderColor,
  },
  iconTextContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    marginLeft: 16,
  },
  menuTitle: {
    fontSize: 15,
    fontWeight: "500",
    lineHeight: 22.5,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorDarkslategray,
  },
});
