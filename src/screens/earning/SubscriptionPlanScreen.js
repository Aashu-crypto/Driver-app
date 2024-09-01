import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

// Constants for colors and font sizes
const COLORS = {
  primary: "#0a74f3",
  secondary: "#F4F8FB",
  white: "#FFFFFF",
  gray: "#A1A1A1",
  darkGray: "#333",
  shadow: "#000",
  selected: "#E0E0E0",
};

const FONT_SIZES = {
  large: 28,
  medium: 20,
  small: 16,
  extraSmall: 14,
};

const SubscriptionPlanScreen = () => {
  const [selectedPlan, setSelectedPlan] = useState(2);

  const plans = [
    { id: 1, earnings: "₹250", day: "1 Day", price: "₹25", originalPrice: "₹55" },
    { id: 2, earnings: "₹450", day: "1 Day", price: "₹45", originalPrice: "₹75" },
    { id: 3, earnings: "₹650", day: "1 Day", price: "₹65", originalPrice: "₹85" },
    { id: 4, earnings: "₹950", day: "1 Day", price: "₹95", originalPrice: "₹195" },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <FontAwesome name="angle-left" size={24} color={COLORS.white} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Subscription plan</Text>
        <TouchableOpacity>
          <Text style={styles.helpText}>? Help</Text>
        </TouchableOpacity>
      </View>

      {/* Promo Section */}
      <View style={styles.promoSection}>
        <Text style={styles.promoTitle}>₹0</Text>
        <Text style={styles.promoSubtitle}>ZERO COMMISSION RIDES</Text>
      </View>

      {/* Plan Selection */}
      <Text style={styles.planSelectionTitle}>Select your plan</Text>
      {plans.map((plan) => (
        <TouchableOpacity
          key={plan.id}
          style={[
            styles.planCard,
            selectedPlan === plan.id && styles.selectedPlanCard,
          ]}
          onPress={() => setSelectedPlan(plan.id)}
        >
          <View style={styles.planDetails}>
            <Text style={styles.planEarnings}>{plan.earnings}</Text>
            <Text style={styles.planDay}>{plan.day}</Text>
            <Text style={styles.planPrice}>{plan.price}</Text>
          </View>
          <Text style={styles.planOriginalPrice}>{plan.originalPrice}</Text>
          {selectedPlan === plan.id && (
            <View style={styles.radioSelected}>
              <FontAwesome5 name="check-circle" size={20} color={COLORS.primary} />
            </View>
          )}
          {selectedPlan !== plan.id && <View style={styles.radioUnselected} />}
        </TouchableOpacity>
      ))}

      {/* Terms & Conditions */}
      <Text style={styles.termsTitle}>Terms & conditions</Text>
      <Text style={styles.termsText}>
        I confirm that the details above provided has received training as per
        all the applicable government regulations.
      </Text>

      {/* Subscribe Button */}
      <View style={styles.subscribeSection}>
        <Text style={styles.payAmount}>Pay ₹250.0</Text>
        <TouchableOpacity style={styles.subscribeButton}>
          <Text style={styles.subscribeButtonText}>Subscribe</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SubscriptionPlanScreen;

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
    color: COLORS.white,
    fontWeight: "bold",
  },
  helpText: {
    fontSize: FONT_SIZES.small,
    color: COLORS.white,
  },
  promoSection: {
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    marginBottom: 20,
  },
  promoTitle: {
    fontSize: 100,
    fontWeight: "bold",
    color: COLORS.white,
  },
  promoSubtitle: {
    fontSize: FONT_SIZES.medium,
    color: COLORS.white,
  },
  planSelectionTitle: {
    fontSize: FONT_SIZES.medium,
    fontWeight: "bold",
    color: COLORS.darkGray,
    marginBottom: 20,
  },
  planCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.white,
    padding: 20,
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: COLORS.white,
  },
  selectedPlanCard: {
    borderColor: COLORS.primary,
    borderWidth: 2,
  },
  planDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
  planEarnings: {
    fontSize: FONT_SIZES.small,
    color: COLORS.primary,
    fontWeight: "bold",
  },
  planDay: {
    fontSize: FONT_SIZES.small,
    color: COLORS.darkGray,
    marginLeft: 10,
  },
  planPrice: {
    fontSize: FONT_SIZES.small,
    color: COLORS.primary,
    marginLeft: 10,
    fontWeight: "bold",
  },
  planOriginalPrice: {
    fontSize: FONT_SIZES.extraSmall,
    color: COLORS.gray,
    textDecorationLine: "line-through",
  },
  radioSelected: {
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  radioUnselected: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.gray,
  },
  termsTitle: {
    fontSize: FONT_SIZES.medium,
    fontWeight: "bold",
    color: COLORS.darkGray,
    marginBottom: 10,
  },
  termsText: {
    fontSize: FONT_SIZES.extraSmall,
    color: COLORS.gray,
    marginBottom: 20,
  },
  subscribeSection: {
    alignItems: "center",
  },
  payAmount: {
    fontSize: FONT_SIZES.large,
    fontWeight: "bold",
    color: COLORS.primary,
    marginBottom: 10,
  },
  subscribeButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 50,
    shadowColor: COLORS.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 2,
  },
  subscribeButtonText: {
    color: COLORS.white,
    fontSize: FONT_SIZES.medium,
    fontWeight: "bold",
  },
});
