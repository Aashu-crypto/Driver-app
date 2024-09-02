import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { FontAwesome, FontAwesome5, MaterialIcons } from "@expo/vector-icons";

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
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <FontAwesome name="angle-left" size={24} color={COLORS.primary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Wallet</Text>
        <TouchableOpacity>
          <Text style={styles.helpText}>? Help</Text>
        </TouchableOpacity>
      </View>

      {/* Balance Card */}
      <View style={styles.balanceCard}>
        <Text style={styles.balanceLabel}>Your balance</Text>
        <Text style={styles.balanceAmount}>₹2500.0</Text>

        <View style={styles.balanceActions}>
          <TouchableOpacity style={styles.actionItem}>
            <FontAwesome5 name="money-bill-wave" size={24} color={COLORS.primary} />
            <Text style={styles.actionText}>Money transfer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionItem}>
            <MaterialIcons name="timer" size={24} color={COLORS.primary} />
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
            <MaterialIcons name="tune" size={24} color={COLORS.primary} />
          </TouchableOpacity>
        </View>

        <View style={styles.filterTabs}>
          <TouchableOpacity style={styles.filterTab}>
            <Text style={styles.filterTabText}>All transaction</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterTabActive}>
            <Text style={styles.filterTabTextActive}>Pending</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.transactionItem}>
          <Text style={styles.transactionDate}>12 June</Text>
          <Text style={styles.transactionTitleSmall}>Order earnings</Text>
          <Text style={styles.transactionAmount}>+₹200.0</Text>
          <Text style={styles.transactionId}>RD2827272727</Text>
          <Text style={styles.transactionTime}>25 May, 10:38 AM</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default WalletScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: COLORS.secondary,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: FONT_SIZES.medium,
    color: COLORS.primary,
    fontWeight: "bold",
  },
  helpText: {
    fontSize: FONT_SIZES.small,
    color: COLORS.primary,
  },
  balanceCard: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  balanceLabel: {
    fontSize: FONT_SIZES.extraSmall,
    color: COLORS.gray,
    marginBottom: 10,
  },
  balanceAmount: {
    fontSize: FONT_SIZES.large,
    fontWeight: "bold",
    color: COLORS.primary,
    marginBottom: 20,
  },
  balanceActions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  actionItem: {
    flexDirection: "row",
    alignItems: "center",
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
    fontSize: FONT_SIZES.extraSmall,
    color: COLORS.gray,
  },
  learnMoreText: {
    fontSize: FONT_SIZES.small,
    color: COLORS.primary,
    fontWeight: "bold",
  },
  transactionHistory: {
    backgroundColor: COLORS.white,
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
    backgroundColor: COLORS.secondary,
    flex: 1,
    alignItems: "center",
    marginRight: 10,
  },
  filterTabActive: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    flex: 1,
    alignItems: "center",
  },
  filterTabText: {
    fontSize: FONT_SIZES.small,
    color: COLORS.darkGray,
  },
  filterTabTextActive: {
    fontSize: FONT_SIZES.small,
    color: COLORS.white,
  },
  transactionItem: {
    backgroundColor: COLORS.secondary,
    borderRadius: 12,
    padding: 15,
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
