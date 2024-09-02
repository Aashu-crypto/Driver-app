import React, { useState, memo } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Color } from "../../../GlobalStyles";

const OrderDetailsScreen = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  return (
    <ScrollView style={styles.container}>
  
      <OrderDetails />
      <EarningsAccordion
        isOpen={isAccordionOpen}
        toggleAccordion={toggleAccordion}
      />
    </ScrollView>
  );
};



const OrderDetails = memo(() => (
  <View style={styles.orderContainer}>
    <Text style={styles.orderId}>Order ID: #445566777</Text>
    <Text style={styles.amount}>₹200</Text>
    <View style={styles.infoRow}>
      <Text style={styles.date}>Today | 10:38 AM</Text>
      <FontAwesome name="sun-o" size={20} color="orange" />
    </View>
    <View style={ styles.paymentType}>
      <FontAwesome name="money" size={20} color="green" />
      <Text style={styles.paymentText}>Cash payment</Text>
    </View>
    <Text style={styles.rideType}>City Ride</Text>
    <View style={styles.pickupDropContainer}>
      <View style={styles.pickupDropRow}>
        <FontAwesome name="map-marker" size={20} color="green" />
        <Text style={styles.pickupDropText}>Pick Up 10:38 AM</Text>
      </View>
      <Text style={styles.address}>Neemuch RD, Gopalbari, Bari Sad</Text>
    </View>
    <View style={styles.timeDistanceContainer}>
      <Text style={styles.timeDistance}>45 mins</Text>
      <FontAwesome name="clock-o" size={20} color="#000" />
      <Text style={styles.timeDistance}>12 km</Text>
    </View>
    <View style={styles.pickupDropContainer}>
      <View style={styles.pickupDropRow}>
        <FontAwesome name="map-marker" size={20} color="red" />
        <Text style={styles.pickupDropText}>Drop 11:50 AM</Text>
      </View>
      <Text style={styles.address}>
        N/107D, Khayala, Vishnu Garden, New Delhi
      </Text>
    </View>
  </View>
));

const EarningsAccordion = memo(({ isOpen, toggleAccordion }) => (
  <View style={styles.earningsContainer}>
    <TouchableOpacity onPress={toggleAccordion} style={styles.accordionHeader}>
      <Text style={styles.sectionTitle}>Paid to you</Text>
      <FontAwesome
        name={isOpen ? "chevron-up" : "chevron-down"}
        size={20}
        color="#555"
      />
    </TouchableOpacity>
    {isOpen && (
      <View>
        <EarningsRow label="Order fare" value="₹250" />
        <EarningsRow label="Surge and long pickup fare" value="+₹66" />
        <EarningsRow label="Commission and GST" value="-₹46" />
        <EarningsRow label="Tip" value="+₹20" />
        <EarningsRow label="Adjustments" value="+₹20" />
      </View>
    )}
    <View style={styles.totalEarningsRow}>
      <Text style={styles.totalEarningsLabel}>Total Earnings</Text>
      <Text style={styles.totalEarningsValue}>₹320</Text>
    </View>
  </View>
));

const EarningsRow = memo(({ label, value }) => (
  <View style={styles.earningRow}>
    <Text style={styles.earningLabel}>{label}</Text>
    <Text style={styles.earningValue}>{value}</Text>
  </View>
));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6ECF2",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  backButton: {
    padding: 10,
  },
  helpText: {
    fontSize: 16,
    color: "#0066FF",
  },
  orderContainer: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 15,
    marginTop: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 5,
  },
  orderId: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#555",
  },
  amount: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#008000",
    textAlign: "right",
    marginTop: -20,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  date: {
    fontSize: 14,
    color: "#555",
    marginRight: 5,
  },
  paymentContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  paymentText: {
    fontSize: 16,
    color: "#008000",
    marginLeft: 5,
  },
  rideType: {
    fontSize: 16,
    color: "#555",
    marginTop: 10,
  },
  pickupDropContainer: {
    marginTop: 10,
  },
  pickupDropRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  pickupDropText: {
    fontSize: 16,
    color: "#555",
    marginLeft: 10,
  },
  address: {
    fontSize: 14,
    color: "#555",
    marginLeft: 30,
    marginTop: 5,
  },
  timeDistanceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  timeDistance: {
    fontSize: 14,
    color: "#555",
  },
  earningsContainer: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 15,
    marginTop: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    elevation: 5,
  },
  accordionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#555",
  },
  earningRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  earningLabel: {
    fontSize: 14,
    color: "#555",
  },
  earningValue: {
    fontSize: 14,
    color: "#555",
  },
  totalEarningsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    borderTopColor: "#DDD",
    borderTopWidth: 1,
    paddingTop: 10,
  },
  totalEarningsLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#008000",
  },
  totalEarningsValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#008000",
    
  },
  paymentType: {
    borderRadius: 10,
    paddingHorizontal: 5,
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 3,
    gap: 5,
    backgroundColor:Color.green
  },
  
});

export default OrderDetailsScreen;
