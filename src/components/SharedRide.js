import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React, { useCallback, useMemo, useRef } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import { Color, FontFamily, width } from "../../GlobalStyles";
import DestinationIcon from "./DestinationIcon";
import Button from "./Button";
import { useNavigation } from "@react-navigation/native";
import { Route } from "../../routes";
// Reusable Component for Riders' Information
const RiderInfo = ({ name, pickupText, pickupLocation, dropLocation }) => {
  return (
    <View style={styles.riderContainer}>
      <View style={styles.riderImageContainer}>
        <Image
          source={require("../../assets/img/riderPic.png")}
          style={styles.riderImage}
        />
        <View style={styles.ratingView}>
          <Text style={styles.rating}>⭐ 4.75</Text>
        </View>
        <Text style={styles.name}>{name}</Text>
      </View>

      <View style={styles.riderDetails}>
        <DestinationIcon />
        <View>
          <View style={styles.locationContainer}>
            <Text style={styles.locationTitle}>{pickupText}</Text>
            <Text style={styles.locationText}>{pickupLocation}</Text>
          </View>
          <View style={styles.locationContainer}>
            <Text style={styles.dropTitle}>Drop 2</Text>
            <Text style={styles.locationText}>{dropLocation}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const SharedRide = () => {
  const navigation = useNavigation();
  const bottomSheetRef = useRef(null);

  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  const snapPoints = useMemo(() => ["70%"], []);

  // Step 1: Define rider data in JSON format
  const riderData = [
    {
      name: "Ajay Singh",
      pickupText: "Pick Up (2 Km 5 min away)",
      pickupLocation: "Neemuch RD. Gopalbari, Bari Sad",
      dropLocation: "N/107D, Khayala, Vishnu Garden, New Delhi",
    },
    {
      name: "Ajay Singh",
      pickupText: "Pick Up (2 Km 5 min away)",
      pickupLocation: "Neemuch RD. Gopalbari, Bari Sad",
      dropLocation: "N/107D, Khayala, Vishnu Garden, New Delhi",
    },
  ];

  return (
    <View style={styles.bottomCard}>
      <View style={styles.imageWrapper}>
        <Image
          source={require("../../assets/img/BottomSheetCar.png")}
          style={styles.carImage}
        />
      </View>

      {/* Ride Details Header */}
      <View style={styles.header}>
        <Text style={styles.rideDetailsText}>Shared Ride Request</Text>
        <Text style={styles.amountText}>₹250</Text>
      </View>

      {/* Step 2: Use map to render RiderInfo components */}

      {riderData.map((rider, index) => (
        <RiderInfo
          key={index}
          name={rider.name}
          pickupText={rider.pickupText}
          pickupLocation={rider.pickupLocation}
          dropLocation={rider.dropLocation}
        />
      ))}

      {/* Accept Button */}
      <View style={styles.acceptButtonContainer}>
        <Button
          placeholder={"Accept"}
          onPress={() => navigation.navigate(Route.SHAREDRIDELOCATION)}
        />
      </View>
    </View>
  );
};

export default SharedRide;

const styles = StyleSheet.create({
  // Bottom card styling
  bottomCard: {
    width: width,
    backgroundColor: "#fff",
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
    bottom: 0,
  },
  // Floating image on top of the bottom sheet
  imageWrapper: {
    position: "absolute",
    top: -30,
    alignSelf: "center",
    zIndex: 1000,
    backgroundColor: "#fff",
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 2 },
  },
  carImage: {
    height: 40,
    width: 40,
    padding: 15,
  },
  // Ride request header section
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    width: width,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  rideDetailsText: {
    fontSize: 16,
    color: "#677093",
    textAlign: "center",
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsRegular,
  },
  name: {
    maxWidth: 100,
  },
  amountText: {
    fontSize: 26,
    fontWeight: "500",
    color: Color.appDefaultColor,
    lineHeight: 39,
    fontFamily: FontFamily.poppinsRegular,
  },
  // Rider information section
  riderContainer: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#E0E0E0",
    padding: 20,
    alignItems: "center", // Ensures alignment of image and text vertically
  },
  riderImageContainer: {
    alignItems: "center", // Center image and name vertically within this container
    marginRight: 15, // Adds space between image/name and destination details
  },
  riderImage: {
    height: 50, // Consistent image size
    width: 50, // Consistent image size
    borderRadius: 25, // Rounded image (circular)
    marginBottom: 5, // Adds space between image and name
  },
  name: {
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center", // Center text horizontally
    color: "#333", // Example text color
    marginTop: 15,
  },
  riderDetails: {
    flexDirection: "row",
    flex: 1, // Ensures this view takes the remaining space in the row
    alignItems: "flex-start", // Aligns content vertically at the top
  },
  locationContainer: {
    marginVertical: 4, // Adds space between pickup and drop locations
  },
  locationTitle: {
    fontSize: 12,
    fontWeight: "400",
    color: "#878CA1", // Custom color for titles
  },
  locationText: {
    marginLeft: 8,
    fontSize: 12,
    color: "#595F75",
    lineHeight: 18,
    width: "90%",
  },
  dropTitle: {
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 18,
    color: "#878CA1",
    fontFamily: FontFamily.poppinsRegular,
  },
  ratingView: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 30,
    left: 16,
    borderRadius: 4,
    padding: 2,
    borderWidth: 1,
    borderColor: Color.borderColor,
    zIndex: 10,
  },
  rating: {
    color: "#595F75",
    fontSize: 9,
    marginTop: 4,
    textAlignVertical: "center",
  },
  // Accept button styling
  acceptButtonContainer: {
    marginVertical: 20,
  },
});
