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
import Zero from "../../../assets/img/Zero.svg";
import { Color, FontFamily } from "../../../GlobalStyles";
import Divider from "../../components/Divider";
import Button from "../../components/Button";
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
    {
      id: 1,
      earnings: "₹250",
      day: "1 Day",
      price: "₹25",
      originalPrice: "₹55",
    },
    {
      id: 2,
      earnings: "₹450",
      day: "1 Day",
      price: "₹45",
      originalPrice: "₹75",
    },
    {
      id: 3,
      earnings: "₹650",
      day: "1 Day",
      price: "₹65",
      originalPrice: "₹85",
    },
    {
      id: 4,
      earnings: "₹950",
      day: "1 Day",
      price: "₹95",
      originalPrice: "₹195",
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Promo Section */}
      <View style={styles.promoSection}>
        <Zero />
        <View>
          <Text
            style={[styles.promoSubtitle, { fontSize: 32, lineHeight: 44 }]}
          >
            ZERO
          </Text>
          <Text style={styles.promoSubtitle}>COMMISSION RIDES</Text>
        </View>
      </View>

      {/* Plan Selection */}
      <View style={{ padding: 10 }}>
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
            {selectedPlan === plan.id && (
              <View style={styles.radioSelected}>
                <FontAwesome5
                  name="check-circle"
                  size={20}
                  color={COLORS.primary}
                />
              </View>
            )}
            {selectedPlan !== plan.id && (
              <View style={styles.radioUnselected} />
            )}
            <View style={styles.planDetails}>
              <View style={styles.planItems}>
                <Text style={styles.planEarnings}>{plan.earnings}</Text>
                <Text style={styles.planItemText}>Earnings</Text>
              </View>

              <View style={styles.planItems}>
                <Text style={styles.planEarnings}>{plan.day}</Text>
                <Text style={styles.planItemText}>Day</Text>
              </View>
              <View style={[styles.planItems, { borderRightWidthZZZZZ: 0 }]}>
                <Text style={styles.planEarnings}>{plan.price}</Text>
                <Text style={styles.planItemText}>{plan.originalPrice}</Text>
              </View>
            </View>
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
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 15,
            }}
          >
            <Text style={styles.payAmount}>Pay</Text>
            <Text
              style={[
                styles.payAmount,
                { fontSize: 16, color: Color.appDefaultColor },
              ]}
            >
              ₹250.0
            </Text>
          </View>

          <Button placeholder={"Subscirbe"} />
        </View>
      </View>
    </ScrollView>
  );
};

export default SubscriptionPlanScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,

    backgroundColor: COLORS.secondary,
  },

  promoSection: {
    backgroundColor: Color.appDefaultColor,
    flexDirection: "row",

    padding: 20,
    alignItems: "center",
    marginBottom: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: "center",
    paddingVertical: 50,
  },
  promoTitle: {
    fontSize: 100,
    fontWeight: "bold",
    color: COLORS.white,
  },
  promoSubtitle: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "400",
    lineHeight: 19.32,
  },
  planSelectionTitle: {
    fontSize: 15,
    fontWeight: "500",
    color: COLORS.darkGray,
    lineHeight: 22.5,
    fontFamily: FontFamily.poppinsRegular,
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
    borderColor: Color.borderColor,
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
    fontSize: 16,
    color: Color.appDefaultColor,
    fontWeight: "500",
    lineHeight: 24,
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
    fontSize: 15,
    fontWeight: "500",
    color: COLORS.darkGray,
    lineHeight: 22.5,
    marginBottom: 10,
  },
  termsText: {
    fontSize: 12,
    color: COLORS.gray,
    marginBottom: 20,
    lineHeight: 18,
    fontWeight: "400",
  },
  subscribeSection: {
    flex: 1,
  },
  payAmount: {
    fontSize: 15,
    fontWeight: "400",
    color: "#677093",

    lineHeight: 22.5,
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
  planItems: {
    borderRightWidth: 1,
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#E5E8F1",
  },
  planItemText: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: "400",
    color: Color.colorGray,
  },
});
