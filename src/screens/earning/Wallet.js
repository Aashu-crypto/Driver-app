import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import { Color, FontFamily } from "../../../GlobalStyles";

// Constants for colors and font sizes
const COLORS = {
  primary: "#0a74f3",
  secondary: "#F4F8FB",
  white: "#FFFFFF",
  gray: "#A1A1A1",
  darkGray: "#333",
  green: "#23B94D",
  shadow: "#000",
};

const FONT_SIZES = {
  large: 28,
  medium: 20,
  small: 16,
  extraSmall: 14,
};

const WalletScreen = () => {
  // State to manage active filter
  const [activeTab, setActiveTab] = useState("Pending");

  // Mock transactions for demonstration
  const transactions = [
    {
      date: "12 June",
      type: "Order earnings",
      amount: "+₹200.0",
      id: "RD2827272727",
      time: "25 May, 10:38 AM",
      status: "Pending",
    },
    {
      date: "10 June",
      type: "Refund",
      amount: "+₹150.0",
      id: "RD272727272",
      time: "23 May, 09:30 AM",
      status: "Completed",
    },
  ];

  // Filter transactions based on the active tab
  const filteredTransactions = transactions.filter(
    (transaction) => activeTab === "All" || transaction.status === activeTab
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Balance Card */}
      <View style={styles.balanceCard}>
        <Text style={styles.balanceLabel}>Your balance</Text>
        <Text style={styles.balanceAmount}>₹2500.0</Text>

        <View style={styles.balanceActions}>
          <TouchableOpacity style={styles.actionItem}>
            <FontAwesome5
              name="money-bill-wave"
              size={24}
              color={Color.appDefaultColor}
            />
            <Text style={styles.actionText}>Money transfer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionItem}>
            <MaterialIcons
              name="timer"
              size={24}
              color={Color.appDefaultColor}
            />
            <Text style={styles.actionText}>Transfer left: 2</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Info Section */}
      <View style={styles.infoSection}>
        <Text style={styles.infoText}>
          Do you know money transfer renews every monday?
        </Text>
        <TouchableOpacity>
          <Text style={styles.learnMoreText}>Learn more</Text>
        </TouchableOpacity>
      </View>

      {/* Transaction History */}
      <View style={styles.transactionHistory}>
        <View style={styles.transactionHeader}>
          <Text style={styles.transactionTitle}>Transaction history</Text>
          <TouchableOpacity>
            <MaterialIcons
              name="tune"
              size={24}
              color={Color.appDefaultColor}
            />
          </TouchableOpacity>
        </View>

        {/* Filter Tabs */}
        <View style={styles.filterTabs}>
          <TouchableOpacity
            style={
              activeTab === "All" ? styles.filterTabActive : styles.filterTab
            }
            onPress={() => setActiveTab("All")}
          >
            <Text
              style={
                activeTab === "All"
                  ? styles.filterTabTextActive
                  : styles.filterTabText
              }
            >
              All transaction
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={
              activeTab === "Pending"
                ? styles.filterTabActive
                : styles.filterTab
            }
            onPress={() => setActiveTab("Pending")}
          >
            <Text
              style={
                activeTab === "Pending"
                  ? styles.filterTabTextActive
                  : styles.filterTabText
              }
            >
              Pending
            </Text>
          </TouchableOpacity>
        </View>

        {/* Transaction Items */}
        {filteredTransactions.map((transaction, index) => (
          <View key={index} style={styles.transactionItem}>
            <Text style={styles.transactionDate}>{transaction.date}</Text>
            <Text style={styles.transactionTitleSmall}>{transaction.type}</Text>
            <Text style={styles.transactionAmount}>{transaction.amount}</Text>
            <Text style={styles.transactionId}>{transaction.id}</Text>
            <Text style={styles.transactionTime}>{transaction.time}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default WalletScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: Color.backGroundColor,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: FONT_SIZES.medium,
    color: Color.appDefaultColor,
    fontWeight: "bold",
  },
  helpText: {
    fontSize: FONT_SIZES.small,
    color: Color.appDefaultColor,
  },
  balanceCard: {
    borderWidth: 1,
    borderColor: Color.appDefaultColor,
    borderRadius: 12,

    marginBottom: 20,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  balanceLabel: {
    fontSize: 15,
    color: Color.colorGray,
    marginBottom: 10,
    fontWeight: "500",
    lineHeight: 22.5,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "center",
  },
  balanceAmount: {
    fontSize: 32,
    fontWeight: "500",
    color: Color.appDefaultColor,
    lineHeight: 48,
    textAlign: "center",
  },
  balanceActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    paading: 10,
  },
  actionItem: {
    alignItems: "center",
    borderTopWidth: 1,
    width: "50%",
    borderColor: Color.colorGray,
    paading: 10,
  },
  actionText: {
    fontSize: FONT_SIZES.small,
    color: COLORS.darkGray,
    marginLeft: 10,
  },
  infoSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  infoText: {
    fontSize: 12,
    color: Color.colorGray,
    fontStyle: "italic",
    fontWeight: "500",
    fontFamily: FontFamily.poppinsRegular,
    maxWidth: "60%",
  },
  learnMoreText: {
    fontSize: 12,
    color: Color.appDefaultColor,
    fontStyle: "italic",
    fontWeight: "500",
    fontFamily: FontFamily.poppinsRegular,
  },
  transactionHistory: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  transactionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  transactionTitle: {
    fontSize: FONT_SIZES.medium,
    fontWeight: "bold",
    color: COLORS.darkGray,
  },
  filterTabs: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  filterTab: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: Color.backGroundColor,
    flex: 1,
    alignItems: "center",
    marginRight: 10,
  },
  filterTabActive: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: Color.appDefaultColor,
    flex: 1,
    alignItems: "center",
  },
  filterTabText: {
    fontSize: FONT_SIZES.small,
    color: COLORS.darkGray,
  },
  filterTabTextActive: {
    fontSize: FONT_SIZES.small,
    color: "#fff",
  },
  transactionItem: {
    backgroundColor: Color.backGroundColor,
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
  },
  transactionDate: {
    fontSize: FONT_SIZES.small,
    fontWeight: "bold",
    color: COLORS.darkGray,
    marginBottom: 5,
  },
  transactionTitleSmall: {
    fontSize: FONT_SIZES.extraSmall,
    color: COLORS.darkGray,
    marginBottom: 10,
  },
  transactionAmount: {
    fontSize: FONT_SIZES.small,
    fontWeight: "bold",
    color: COLORS.green,
  },
  transactionId: {
    fontSize: FONT_SIZES.extraSmall,
    color: COLORS.gray,
    marginBottom: 5,
  },
  transactionTime: {
    fontSize: FONT_SIZES.extraSmall,
    color: COLORS.gray,
  },
});
