import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Color, FontFamily } from "../../GlobalStyles";
import Coin from "../../assets/img/coin.svg";
export default function Earningcard({ amount, ridesCount }) {
  return (
    <View style={styles.earningCard}>
      <View style={styles.earningContent}>
        <Text style={styles.earningLabel}>Today's Earning</Text>
        <Text style={styles.earningAmount}>₹{amount}</Text>
        <Text style={styles.ridesLabel}>Rides</Text>
        <Text style={styles.ridesCount}>{ridesCount}</Text>
        <TouchableOpacity>
          <Text style={styles.viewOrders}>View all orders →</Text>
        </TouchableOpacity>
      </View>
      <Coin />
    </View>
  );
}

const styles = StyleSheet.create({
  earningCard: {
    flexDirection: "row",
    padding: 20,
    backgroundColor: "#FFFBEF",

    borderRadius: 12,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  earningContent: {
    flex: 1,
  },
  earningLabel: {
    fontSize: 15,
    color: Color.gray,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 22.5,
  },
  earningAmount: {
    fontSize: 24,
    fontWeight: "500",
    color: Color.green,
    fontFamily: FontFamily.poppinsRegular,

    lineHeight: 36,
  },
  ridesLabel: {
    fontSize: 14,
    color: Color.gray,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 21.5,
  },
  ridesCount: {
    fontSize: 24,
    color: Color.appDefaultColor,
  
    lineHeight: 36,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsRegular,
  },
  viewOrders: {
    fontSize: 12,
    color: Color.gray,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsRegular,
    lineHeight:18,
  },
  earningImage: {
    width: 100,
    height: 100,
  },
});
