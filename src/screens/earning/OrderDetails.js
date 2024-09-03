import React, { useState, memo } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Color, FontFamily } from "../../../GlobalStyles";
import AntDesign from "@expo/vector-icons/AntDesign";
import { MaterialIcons } from "@expo/vector-icons";
import EvilIcons from "@expo/vector-icons/EvilIcons";
const OrderDetailsScreen = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.OrderDetails}>
        <View style={{ padding: 10 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <Text style={styles.orderId}>Order ID: #445566777</Text>
              <Text style={styles.date}>Today | 10:38 AM</Text>
              <Text style={styles.rideType}>City Ride</Text>
            </View>
            <View>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
              >
                <AntDesign name="checkcircle" size={15} color="green" />
                <Text style={styles.fare}>₹200</Text>
              </View>
              <View style={styles.paymentType}>
                <FontAwesome name="money" size={14} color="white" />
                <Text
                  style={{
                    fontSize: 8,
                    fontWeight: "500",
                    lineHeight: 12,
                    color: "#fff",
                  }}
                >
                  Cash payment
                </Text>
              </View>
            </View>
          </View>
          <View>
            <View style={styles.row}>
              <View style={styles.iconContainer}>
                <MaterialIcons name="location-on" size={24} color="green" />
                <View style={styles.dottedLine} />
                <MaterialIcons name="location-on" size={24} color="red" />
              </View>
              <View style={styles.detailsContainer}>
                <Text style={styles.timeText}>Pick Up 10:38 AM</Text>
                <Text>Neemuch RD: Gopalbari, Bari Sad</Text>
                <View style={{flexDirection:'row'}}>
                  <EvilIcons name="clock" size={24} color="black" />
                  <Text>45 mins </Text>
                </View>
                <Text style={styles.timeText}>Drop 11:50 AM</Text>
                <Text>N/107D, Khayala, Vishnu Garden, New Delhi</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <EarningsAccordion
        isOpen={isAccordionOpen}
        toggleAccordion={toggleAccordion}
      />
    </ScrollView>
  );
};

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
  OrderDetails: {
    backgroundColor: "#fff",
    pading: 10,
    elevation: 2,
    borderRadius: 15,
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
    fontSize: 13,
    fontWeight: "400",
    color: "#6E6767",
    lineHeight: 19.5,
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
    fontSize: 13,
    color: Color.colorDarkslategray,
    marginRight: 5,
    lineHeight: 19.5,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsRegular,
    marginTop: 10,
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
    fontSize: 10,
    color: "#595F75",
    lineHeight: 15,
    fontWeight: "400",
    fontFamily: FontFamily.poppinsRegular,
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
    paddingHorizontal: 8,
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 4,

    gap: 5,
    backgroundColor: Color.green,
  },
  fare: {
    fontSize: 20,
    fontWeight: "500",
    lineHeight: 30,
    fontFamily: FontFamily.poppinsBold,
    color: Color.appDefaultColor,
  },
  row: {
    flexDirection: "row",
  },
  iconContainer: {
    alignItems: "center",
    marginRight: 10,
  },
  dottedLine: {
    width: 1,
    flexGrow: 1,
    borderStyle: "dotted",
    borderWidth: 2,
    borderColor: Color.green,
    marginVertical: 10,
  },
  detailsContainer: {
    flex: 1,
  },
  timeText: {
    fontWeight: "400",
    color: "#878CA1",
    fontSize: 12,
    lineHeight: 18,
  },
});

export default OrderDetailsScreen;
