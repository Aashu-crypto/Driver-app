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
import { Ionicons, FontAwesome5 } from "@expo/vector-icons"; // For icons
import { Color, FontFamily } from "../../../GlobalStyles";
import Stroke from "../../../assets/icons/Stroke.svg";
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
  const [active, setActive] = useState(1);
  return (
    <SafeAreaView style={styles.container}>
      {/* Tabs */}

      {/* Date */}

      {/* Ride Cards */}
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.tabContainer}>
          {["Available Pickups", "My pickups"].map((item, index) => (
            <Pressable
              key={index}
              style={[
                styles.tabButton,
                {
                  backgroundColor:
                    active === index ? Color.appDefaultColor : "transparent",
                },
              ]}
              onPress={() => setActive(index)}
            >
              <Text
                style={[
                  styles.tabText,
                  { color: active === index ? "white" : Color.gray },
                ]}
              >
                {item}
              </Text>
            </Pressable>
          ))}
        </View>
        <Text style={styles.dateText}>26 July 2024</Text>
        {rides.map((ride) => (
          <View key={ride.id} style={styles.rideCard}>
            <View style={styles.rideInfo}>
              <View>
                <Text style={styles.rideTime}>Ride scheduled</Text>
                <Text style={styles.rideEstimate}>{ride.time}</Text>
              </View>
              <View>
                <Text style={styles.estimateText}>Estimate fare</Text>
                <Text style={styles.rideFare}>{ride.fare}</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
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

            <Button placeholder={"View Details"} />
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
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: Color.backGroundColor,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginLeft: 10,
  },

  tabTextActive: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  tabTextInactive: {
    color: "#333333",
  },
  dateText: {
    fontSize: 13,
    fontWeight: "400",
    color: "#595F75",
    paddingLeft: 16,
    marginVertical: 16,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight:19.5
  },
  scrollViewContent: {
    padding: 16,
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
  rideFare: {
    fontFamily: FontFamily.poppinsRegular,
    fontWeight: "500",
    fontSize: 13,
    lineHeight: 16,
    color: Color.appDefaultColor,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 4,
  },
  locationContainerIcon: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 2,
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
    padding: 2,
    borderRadius: 8,
    marginTop: 8,
    width: 100,
    justifyContent: "center",
    position: "relative",
    right: -20,
  },
  cashRideText: {
    marginLeft: 5,
    color: "#FFFFFF",
    fontWeight: "400",
    fontSize: 10,
    lineHeight: 15,
    fontFamily: FontFamily.poppinsRegular,
  },
  detailsButton: {
    backgroundColor: "#3D6DFF",
    borderRadius: 10,
    paddingVertical: 10,
    marginTop: 16,
    alignItems: "center",
  },
  detailsButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
    backgroundColor: Color.backGroundColor,
    borderRadius: 20,
    overflow: "hidden",
    marginHorizontal: 10,
  },
  tabButton: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    borderRadius: 20,
  },
  tabText: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: "500",
  },
  estimateText: {
    fontFamily: FontFamily.poppinsRegular,
    fontWeight: "500",
    fontSize: 13,
    lineHeight: 20,
    color: Color.colorGray,
  },
});

export default ScheduledRidesScreen;
