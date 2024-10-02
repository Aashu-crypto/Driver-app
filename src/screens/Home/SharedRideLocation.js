import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import MapView, { Polyline, Marker } from "react-native-maps";
import * as Location from "expo-location";
import axios from "axios";
import { Color, FontFamily, height, width } from "../../../GlobalStyles";
import Feather from "@expo/vector-icons/Feather";
import Divider from "../../components/Divider";

import {
  MaterialIcons,
  FontAwesome,
  FontAwesome5,
  AntDesign,
} from "@expo/vector-icons";
import Button from "../../components/Button";
import * as Progress from "react-native-progress";
import DestinationIcon from "../../components/DestinationIcon";
import { useNavigation } from "@react-navigation/native";
import { Route } from "../../../routes";
import { LinearGradient } from "expo-linear-gradient";
import { ProgressBar } from "react-native-paper";
import PhotoWithRating from "../../components/PhotoWithRating";
export default function SharedRideLocation() {
  const [location, setLocation] = useState(null);
  const [destination, setDestination] = useState({
    latitude: 31.634,
    longitude: 74.872261,
  });
  const [routeCoordinates, setRouteCoordinates] = useState([]);
  const [clientLocated, setClientLocated] = useState(true);
  const [secondsLeft, setSecondsLeft] = useState(300);
  const [cancelPressed, setCancelPressed] = useState(false);
  const [isServiceEnabled, setIsServiceEnabled] = useState(false);
  const navigation = useNavigation();
  const toggleSwitch = () =>
    setIsServiceEnabled((previousState) => !previousState);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        alert("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);

      fetchRoute(location.coords, destination);
    })();
  }, []);

  const fetchRoute = async (startLoc, destinationLoc) => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc.latitude},${startLoc.longitude}&destination=${destinationLoc.latitude},${destinationLoc.longitude}&key=AIzaSyAM0lkfWt1VuqHglZFjtlU_d7hV3cOKcl8`
      );

      //   console.log("API Response:", response.data);

      if (response.data.routes.length) {
        const points = decodePolyline(
          response.data.routes[0].overview_polyline.points
        );

        // console.log("Decoded Points:", points);

        // Check if any of the points have undefined or null values
        const validPoints = points.filter(
          (point) =>
            point.latitude !== undefined && point.longitude !== undefined
        );

        if (validPoints.length !== points.length) {
          console.warn("Some points were invalid and have been filtered out.");
        }

        setRouteCoordinates(validPoints);
      } else {
        console.log("No routes found");
        alert("No route found between these locations.");
      }
    } catch (error) {
      console.error("Error fetching route:", error.message);
      alert("Error fetching route. Please try again.");
    }
  };

  const decodePolyline = (encoded) => {
    let points = [];
    let index = 0,
      len = encoded.length;
    let lat = 0,
      lng = 0;

    while (index < len) {
      let b,
        shift = 0,
        result = 0;
      do {
        b = encoded.charCodeAt(index++) - 63;
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 0x20);
      let dlat = result & 1 ? ~(result >> 1) : result >> 1;
      lat += dlat;

      shift = 0;
      result = 0;
      do {
        b = encoded.charCodeAt(index++) - 63;
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 0x20);
      let dlng = result & 1 ? ~(result >> 1) : result >> 1;
      lng += dlng;

      points.push({
        latitude: lat / 1e5,
        longitude: lng / 1e5,
      });
    }

    return points;
  };
  const data = [
    {
      icon: "supervised-user-circle",
      title: "Services",
    },
    { icon: "handshake", title: "Partner Care" },
    { icon: "directions-car", title: "Ride Request" },
  ];
  return (
    <View style={styles.container}>
      {location && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker coordinate={location} title="Your Location" />
          <Marker coordinate={destination} title="Destination" />
          <Polyline
            coordinates={routeCoordinates}
            strokeWidth={4}
            strokeColor="blue"
          />
        </MapView>
      )}
      {clientLocated ? (
        !cancelPressed ? (
          <View style={styles.bottomCard}>
            <LinearGradient colors={["transparent", "#C6CEED"]}>
              <View style={{ alignSelf: "center" }}>
                <Progress.Bar progress={0.3} width={width * 0.95} />
              </View>

              <Text
                style={{
                  fontSize: 16,
                  lineHeight: 24,
                  fontWeight: "500",
                  fontFamily: FontFamily.poppinsRegular,
                  color: "#677093",
                  textAlign: "center",
                  marginTop: 10,
                }}
              >
                Picking up Ajay
              </Text>

              <View style={styles.riderDetails}>
                <DestinationIcon height={25} />
                <View style={{ marginLeft: 5 }}>
                  <View style={styles.locationContainer}>
                    <Text style={styles.locationTitle}>
                      Pick Up (2 Km 5 min away)
                    </Text>
                    <Text style={styles.locationText}>
                      Neemuch RD. Gopalbari, Bari Sad
                    </Text>
                  </View>
                  <View style={styles.locationContainer}>
                    <Text style={styles.locationTitle}>Drop 2</Text>
                    <Text style={styles.locationText}>
                      N/107D, Khayala, Vishnu Garden, New Delhi
                    </Text>
                  </View>
                </View>
              </View>

              <View
                style={{
                  width: "85%",
                  alignSelf: "center",
                  gap: 15,
                  backgroundColor: "#fff",
                  borderRadius: 10,
                  padding: 10,
                  marginVertical: 10,
                }}
              >
                {data.map((item) => (
                  <View
                    key={item.id}
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <View style={{ flexDirection: "row", gap: 10 }}>
                      <MaterialIcons
                        name={item.icon}
                        color={Color.appDefaultColor}
                        size={24}
                      />
                      <Text
                        style={{
                          fontSize: 12,
                          lineHeight: 18,
                          fontWeight: "400",
                          fontFamily: FontFamily.poppinsRegular,
                        }}
                      >
                        {item.title}
                      </Text>
                    </View>

                    <AntDesign
                      name="right"
                      size={20}
                      color={Color.appDefaultColor}
                    />
                  </View>
                ))}
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                  marginVertical: 10,
                }}
              >
                <View style={styles.riderImageContainer}>
                 <PhotoWithRating img={"riderPic.png"}/> 
                  <View style={{ marginLeft: 15 }}>
                    <Text style={styles.name}>Ajay Singh</Text>
                    <Text style={styles.carType}>Sedan</Text>
                  </View>
                </View>

                <View style={{ flexDirection: "row", columnGap: 10 }}>
                  <Image
                    source={require("../../../assets/img/call.png")}
                    style={{ width: 35, height: 35 }}
                  />
                  <Pressable
                    onPress={() => {
                      navigation.navigate(Route.DRIVERCHATSCREEN);
                    }}
                  >
                    <Image
                      source={require("../../../assets/img/sms.png")}
                      style={{ width: 35, height: 35 }}
                    />
                  </Pressable>
                </View>
              </View>

              <Pressable
                style={{
                  borderWidth: 1,
                  borderColor: Color.red,
                  width: "85%",
                  alignSelf: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 9,
                  padding: 15,
                  marginTop: 10,
                  marginBottom: 15,
                }}
                onPress={() => {
                  setCancelPressed(true);
                }}
              >
                <Text
                  style={{
                    color: Color.red,
                    fontSize: 14,
                    lineHeight: 21,
                    fontWeight: "500",
                    fontFamily: FontFamily.poppinsRegular,
                  }}
                >
                  Cancel Booking
                </Text>
              </Pressable>
              <View style={{ marginBottom: 10 }} />
            </LinearGradient>
          </View>
        ) : (
          <View style={styles.bottomCard}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "400",
                lineHeight: 21,
                color: "#677093",
                fontFamily: FontFamily.poppinsRegular,
                paddingLeft: 23,
                paddingTop: 10,
              }}
            >
              Do you want to cancel this ride?
            </Text>
            <Button
              placeholder={"Continue Trip"}
              onPress={() => {
                console.log("Pressed");

                setCancelPressed(false);
              }}
              btnWidth={"85%"}
            />
            <Pressable
              style={{
                borderWidth: 1,
                borderColor: Color.red,
                width: "85%",
                alignSelf: "center",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 9,
                padding: 15,
                marginTop: 10,
                marginBottom: 15,
              }}
              onPress={() => {}}
            >
              <Text
                style={{
                  color: Color.red,
                  fontSize: 14,
                  lineHeight: 21,
                  fontWeight: "500",
                  fontFamily: FontFamily.poppinsRegular,
                }}
              >
                Cancel Booking
              </Text>
            </Pressable>
          </View>
        )
      ) : (
        <View style={styles.bottomCard}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              width: width,
              padding: 15,
            }}
          >
            <Text style={styles.name}>Pickup Ajay Singh</Text>
            <Feather name="menu" size={28} color="#9CABE2" />
          </View>
          <Divider />
          <View style={styles.rideDetail}>
            <View style={styles.locationIconContainer}>
              <FontAwesome name="map-marker" size={20} color="green" />
            </View>
            <View style={styles.rideTextContainer}>
              <Text style={styles.rideAddress}>
                K-20, Bhalswa Janakpuri, Janakpuri, New delhi, 110033, IndiaD.
                Gopalbari, Bari Sad
              </Text>
            </View>
          </View>
          <Button placeholder={"Client Located"} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
  },
  map: {
    width: width,
    height: height,
  },
  bottomCard: {
    width: width,
    minHeight: 100,

    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    position: "absolute",
    alignSelf: "center", // Center the bottom card horizontally
    bottom: 0,
    backgroundColor: "#fff",
  },
  name: {
    fontSize: 15,
    fontWeight: "500",
    lineHeight: 22.5,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorGrayNormal,
  },
  rideDetail: {
    flexDirection: "row",

    padding: 10,
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
    color: "#4.169e1",
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
 
  iconContainer: {
    backgroundColor: Color.appDefaultColor,
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
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
  riderDetails: {
    flexDirection: "row",
    flex: 1, // Ensures this view takes the remaining space in the row
    alignItems: "flex-start", // Aligns content vertically at the top
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    paddingTop: 10,
    // backgroundColor:'#000'
  },
  riderImageContainer: {
    alignItems: "center", // Center image and name vertically within this container
    marginRight: 15, // Adds space between image/name and destination details
    flexDirection: "row",
  },
  riderImage: {
    height: 50, // Consistent image size
    width: 50, // Consistent image size
    borderRadius: 25, // Rounded image (circular)
    marginBottom: 5, // Adds space between image and name
  },
 
  carType: {
    fontSize: 13,
    lineHeight: 19.5,
    fontWeight: "400",
    fontFamily: FontFamily.poppinsRegular,
    color: "#656565",
  },
});
