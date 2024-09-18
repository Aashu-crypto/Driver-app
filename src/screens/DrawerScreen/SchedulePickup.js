import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Pressable,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons"; // For icons
import { Color, FontFamily, width } from "../../../GlobalStyles";
import DestinationIcon from "../../components/DestinationIcon";
import Button from "../../components/Button";

const ScheduledRidesScreen = ({ navigation }) => {
  const rides = [
    {
      id: 1,
      time: "10:00 AM Estimate",
      fare: "₹200.0",
      pickupLocation: "Neemuch RD. Gopalbari, Bari Sad",
      dropLocation: "Neemuch RD. Gopalbari, Bari Sad",
    },
    {
      id: 2,
      time: "10:00 AM Estimate",
      fare: "₹200.0",
      pickupLocation: "Neemuch RD. Gopalbari, Bari Sad",
      dropLocation: "Neemuch RD. Gopalbari, Bari Sad",
    },
    {
      id: 3,
      time: "10:00 AM Estimate",
      fare: "₹200.0",
      pickupLocation: "Neemuch RD. Gopalbari, Bari Sad",
      dropLocation: "Neemuch RD. Gopalbari, Bari Sad",
    },
  ];

  const [activeTab, setActiveTab] = useState(0); // For tab management

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Tab Navigation */}
        <View style={styles.tabContainer}>
          {["Available Pickups", "My Pickups"].map((tab, index) => (
            <Pressable
              key={index}
              style={[
                styles.tabButton,
                {
                  backgroundColor:
                    activeTab === index ? Color.appDefaultColor : "transparent",
                },
              ]}
              onPress={() => setActiveTab(index)}
            >
              <Text
                style={[
                  styles.tabText,
                  { color: activeTab === index ? "white" : Color.gray },
                ]}
              >
                {tab}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* Date */}
        <Text style={styles.dateText}>26 July 2024</Text>

        {/* Rides */}
        {rides.map((ride) => (
          <View key={ride.id} style={styles.rideCard}>
            <View style={styles.rideInfo}>
              <View>
                <Text style={styles.rideTime}>Ride scheduled</Text>
                <Text style={styles.rideEstimate}>{ride.time}</Text>
              </View>
              <View>
                <Text style={styles.estimateText}>Estimated fare</Text>
                <Text style={styles.rideFare}>{ride.fare}</Text>
              </View>
            </View>
            <View style={styles.rideLocations}>
              <DestinationIcon />
              <View>
                <View style={styles.locationContainer}>
                  <Text style={styles.locationText}>{ride.pickupLocation}</Text>
                </View>
                <View style={styles.locationContainer}>
                  <Text style={styles.locationText}>{ride.dropLocation}</Text>
                </View>
              </View>
              <View style={styles.cashRide}>
                <FontAwesome5 name="money-bill-wave" size={16} color="white" />
                <Text style={styles.cashRideText}>Cash Ride</Text>
              </View>
            </View>

            <Button placeholder={"View Details"} btnWidth={width * 0.8} />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
  },
  scrollViewContent: {},
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    backgroundColor: Color.backGroundColor,
    borderRadius: 20,
    overflow: "hidden",
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 20,
  },
  tabText: {
    fontSize: 12,
    fontWeight: "500",
    lineHeight: 18,
  },
  dateText: {
    fontSize: 13,
    fontWeight: "400",
    color: "#595F75",
    marginVertical: 16,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 19.5,
  },
  rideCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  rideInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  rideTime: {
    fontFamily: FontFamily.poppinsRegular,
    fontWeight: "500",
    fontSize: 13,
    lineHeight: 20,
    color: Color.colorGray,
  },
  rideEstimate: {
    fontFamily: FontFamily.poppinsRegular,
    fontWeight: "500",
    fontSize: 13,
    lineHeight: 16,
    color: Color.appDefaultColor,
  },
  estimateText: {
    fontFamily: FontFamily.poppinsRegular,
    fontWeight: "500",
    fontSize: 13,
    lineHeight: 20,
    color: Color.colorGray,
  },
  rideFare: {
    fontFamily: FontFamily.poppinsRegular,
    fontWeight: "500",
    fontSize: 13,
    lineHeight: 16,
    color: Color.appDefaultColor,
  },
  rideLocations: {
    flexDirection: "row",
    marginBottom: 8,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
  },
  locationText: {
    marginLeft: 8,
    fontSize: 10,
    color: "#595F75",
    lineHeight: 15,
    fontFamily: FontFamily.poppinsRegular,
  },
  cashRide: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.green,
    padding: 5,
    borderRadius: 8,
    marginTop: 8,
    justifyContent: "center",
    width: 100,
    alignSelf: "flex-start",
    marginLeft: 10,
  },
  cashRideText: {
    marginLeft: 5,
    color: "#FFFFFF",
    fontWeight: "400",
    fontSize: 10,
    lineHeight: 15,
    fontFamily: FontFamily.poppinsRegular,
  },
});

export default ScheduledRidesScreen;
