import React, { useState } from "react";
import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import HomeScreenHeader from "../../components/HomeScreenHeader";
import { Color, FontFamily, width } from "../../../GlobalStyles";
import { useSelector } from "react-redux";
import Button from "../../components/Button";
import { Route } from "../../../routes";

const HomeScreen = ({ navigation }) => {
  const status = useSelector((state) => state.status.status);
  const [findRide, setFindRide] = useState();
  return (
    <SafeAreaView style={styles.container}>
      <HomeScreenHeader />

      <View style={styles.cardsContainer}>
        <View style={styles.card}>
          <View style={styles.iconWrapper}>
            <FontAwesome name="rupee" size={20} color="white" />
          </View>
          <View>
            <Text style={styles.cardText}>Today's Earning</Text>
            <Text style={styles.cardValue}>₹250.0</Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.iconWrapper}>
            <FontAwesome name="car" size={20} color="white" />
          </View>
          <View>
            <Text style={styles.cardText}>Today's Bookings</Text>
            <Text style={styles.cardValue}>2</Text>
          </View>
        </View>
      </View>

      {status === "Offline" && (
        <View style={styles.mainContent}>
          <Image
            source={require("../../../assets/img/phone.png")}
            style={styles.mainImage}
          />
          <Text style={styles.greeting}>Good Morning, Partner</Text>
          <Text style={styles.onDutyText}>
            Go <Text style={styles.onDutyHighlight}>ON DUTY</Text> to Start
            Earning
          </Text>
        </View>
      )}
      {status === "Online" && (
        <View style={styles.bottomCard}>
          <View style={styles.iconContainer}>
            <FontAwesome name="user" size={24} color="#4169e1" />
          </View>
          {/* <Text style={styles.findingText}>Finding rider....</Text> */}

          <View style={styles.paymentContainer}>
            <Text style={styles.paymentText}>Cash Payment</Text>
          </View>
          <Text style={styles.amountText}>₹250</Text>
          <Text style={styles.rideDetailsText}>Sedan · 2 km · 5 mins away</Text>

          {/* Ride Info */}
          <View style={styles.rideInfoContainer}>
            <View style={styles.rideDetail}>
              <View style={styles.locationIconContainer}>
                <FontAwesome name="map-marker" size={20} color="green" />
              </View>
              <View style={styles.rideTextContainer}>
                <Text style={styles.rideLocation}>Janakpuri, New Delhi</Text>
                <Text style={styles.rideAddress}>
                  K-20, Bhalaswa Janakpuri, Janakpuri, New Delhi, 110033, India
                </Text>
              </View>
            </View>

            <View style={[styles.rideDetail, { marginLeft: 15 }]}>
              <View style={styles.locationIconContainer}>
                <MaterialIcons name="access-time" size={20} color="#4169e1" />
              </View>
              <View style={styles.rideTextContainer}>
                <Text style={styles.rideDetails}>
                  25 mins Trip · 7.5 Km Distance
                </Text>
              </View>
            </View>

            <View style={styles.rideDetail}>
              <View style={styles.locationIconContainer}>
                <FontAwesome name="map-marker" size={20} color="red" />
              </View>
              <View style={styles.rideTextContainer}>
                <Text style={styles.rideLocation}>Rohini, New Delhi</Text>
                <Text style={styles.rideAddress}>
                  Government Sarvodaya Vidyalaya, Sector 8E, Rohni, New Delhi
                </Text>
              </View>
            </View>
          </View>
          <View>
            <Button
              placeholder={"Accept"}
              onPress={() => navigation.navigate(Route.CLIENTLOCATION)}
            />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.backGroundColor,
  },

  cardsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    elevation: 1,
  },
  iconWrapper: {
    backgroundColor: Color.appDefaultColor,
    height: 42,
    width: 42,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  cardText: {
    color: Color.textGraycolor,
    marginTop: 10,
    fontSize: 10,
    lineHeight: 15,
    fontFamily: FontFamily.poppinsRegular,
  },
  cardValue: {
    color: Color.colorDarkslategray,
    fontSize: 18,
    lineHeight: 27,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsRegular,
  },
  mainContent: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  mainImage: {
    width: 130,
    height: 130,
    marginBottom: 20,
  },
  greeting: {
    fontSize: 18,
    color: "gray",
  },
  onDutyText: {
    fontSize: 18,
    color: "gray",
  },
  onDutyHighlight: {
    color: "green",
    fontWeight: "bold",
  },
  bottomCard: {
    width: width,
    minHeight: 100,

    backgroundColor: "white",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,

    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    position: "absolute",
    alignSelf: "center", // Center the bottom card horizontally
    bottom: 10,
    backgroundColor: "#fff",
  },
  iconContainer: {
    position: "absolute",
    top: -28,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#4169e1",
    borderWidth: 2,
  },
  findingText: {
    marginTop: 20,
    fontSize: 16,
    color: "#4169e1",
  },
  paymentContainer: {
    backgroundColor: "green",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    marginTop: 35,
  },
  paymentText: {
    color: "white",
    fontSize: 14,
    fontFamily: FontFamily.poppinsRegular,
  },
  amountText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#4169e1",
    marginTop: 10,
  },
  rideDetailsText: {
    fontSize: 16,
    color: "#8f8f8f",
    marginTop: 5,
    marginBottom: 20,
  },
  rideInfoContainer: {
    width: "95%",
    backgroundColor: "#f0f4f8",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  rideDetail: {
    flexDirection: "row",
    marginBottom: 10,
  },
  locationIconContainer: {
    width: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  rideTextContainer: {
    flex: 1,
    marginRight: 15,
  },
  rideLocation: {
    fontSize: 13,
    color: "#4169e1",
    fontFamily: FontFamily.poppinsRegular,
  },
  rideAddress: {
    fontSize: 11,
    color: "#8f8f8f",
  },
  rideDetails: {
    fontSize: 12,
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.poppinsRegular,
  },
});

export default HomeScreen;
