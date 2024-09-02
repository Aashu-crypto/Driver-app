import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { FontAwesome, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { Route } from "../../../routes";
import EarningCard from "../../components/EarningCard";
import Button from "../../components/Button";
import { Color, width } from "../../../GlobalStyles";


// Main EarningsScreen Component
const EarningsScreen = ({ navigation }) => {
  const MENU_ITEMS = [
    {
      icon: (
        <MaterialIcons
          name="account-balance-wallet"
          size={24}
          color={Color.appDefaultColor}
        />
      ),
      text: "Balance",
      onPress: () => {},
    },
    {
      icon: (
        <MaterialIcons name="history" size={24} color={Color.appDefaultColor} />
      ),
      text: "Earning history",
      onPress: () => {
        navigation.navigate(Route.EARNINGHISTORY);
      },
    },
    {
      icon: (
        <FontAwesome5
          name="chart-line"
          size={24}
          color={Color.appDefaultColor}
        />
      ),
      text: "Incentives",
      onPress: () => {},
    },
    {
      icon: (
        <MaterialIcons
          name="subscriptions"
          size={24}
          color={Color.appDefaultColor}
        />
      ),
      text: "Subscription plan",
      onPress: () => {
        navigation.navigate(Route.SUBSCRIPTIONPLAN);
      },
    },
    {
      icon: (
        <MaterialIcons
          name="account-balance-wallet"
          size={24}
          color={Color.appDefaultColor}
        />
      ),
      text: "Wallet",
      onPress: () => {
        navigation.navigate(Route.WALLET);
      },
    },
  ];

  // Reusable Menu Item Component
  const MenuItem = ({ icon, text, onPress }) => (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      {icon}
      <Text style={styles.menuItemText}>{text}</Text>
      <FontAwesome name="angle-right" size={24} color={Color.appDefaultColor} />
    </TouchableOpacity>
  );
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Today's Earning Card */}
      <EarningCard amount={"2500"} ridesCount={"6"} />

      {/* Payment Card */}
      <View style={styles.paymentCard}>
        <View style={styles.paymentDetails}>
          <FontAwesome5
            name="university"
            size={24}
            color={Color.appDefaultColor}
          />
          <Text style={styles.paymentText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </Text>
        </View>
        <View
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button placeholder={"Pay ₹89 "} btnWidth={"95%"} />
        </View>
      </View>

      {/* Menu Items */}
      {MENU_ITEMS.map((item, index) => (
        <MenuItem
          key={index}
          icon={item.icon}
          text={item.text}
          onPress={item.onPress}
        />
      ))}
    </ScrollView>
  );
};

export default EarningsScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: Color.backGroundColor,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 15,
    color: Color.appDefaultColor,
    fontWeight: "bold",
    marginLeft: 10,
  },

  paymentCard: {
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: Color.colorDarkslategray,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
    borderColor: Color.borderColor,
    borderWidth: 1,
  },
  paymentDetails: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  paymentText: {
    fontSize: 12,
    color: Color.gray,
    marginLeft: 10,
    maxWidth: width * 0.7,
  },
  payButton: {
    backgroundColor: Color.appDefaultColor,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  payButtonText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: Color.colorDarkslategray,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
    borderWidth: 1,
    borderColor: Color.borderColor,
  },
  menuItemText: {
    fontSize: 15,
    color:Color.gray,
    flex: 1,
    marginLeft: 20,
    lineHeight:22.5,
    fontWeight:'500'
  },
});
