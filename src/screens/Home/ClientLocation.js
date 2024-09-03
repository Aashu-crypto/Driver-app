import React, { useState, useEffect } from "react";
import { StyleSheet, View, Dimensions, Text, Image } from "react-native";
import MapView, { Polyline, Marker } from "react-native-maps";
import * as Location from "expo-location";
import axios from "axios";
import { Color, FontFamily, height, width } from "../../../GlobalStyles";
import Feather from "@expo/vector-icons/Feather";
import Divider from "../../components/Divider";
import { MaterialIcons, FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import Button from "../../components/Button";
import * as Progress from "react-native-progress";
export default function ClientLocation() {
  const [location, setLocation] = useState(null);
  const [destination, setDestination] = useState({
    latitude: 31.634,
    longitude: 74.872261,
  });
  const [routeCoordinates, setRouteCoordinates] = useState([]);
  const [clientLocated, setClientLocated] = useState(true);
  const [secondsLeft, setSecondsLeft] = useState(300);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        alert("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
      console.log("My location", location.coords);

      fetchRoute(location.coords, destination);
    })();
  }, []);

  const fetchRoute = async (startLoc, destinationLoc) => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc.latitude},${startLoc.longitude}&destination=${destinationLoc.latitude},${destinationLoc.longitude}&key=AIzaSyAM0lkfWt1VuqHglZFjtlU_d7hV3cOKcl8`
      );

      console.log("API Response:", response.data);

      if (response.data.routes.length) {
        const points = decodePolyline(
          response.data.routes[0].overview_polyline.points
        );

        console.log("Decoded Points:", points);

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
        <View style={styles.bottomCard}>
          <Progress.Bar progress={0.3} width={width} />
          <View style={{ flexDirection: "row", padding: 10 }}>
            <View
              style={{
                alignSelf: "center",
                fontSize: 16,

                flex: 1,
              }}
            >
              <Text
                style={{
                  alignSelf: "center",
                  fontSize: 16,
                }}
              >
                Waiting for rider
              </Text>
              <Text
                style={{
                  alignSelf: "center",
                  fontSize: 16,
                  borderWidth: 1,
                  paddingHorizontal: 15,
                  borderRadius: 10,
                  paddingVertical: 2,
                  marginTop: 1,
                }}
              >
                4:34
              </Text>
            </View>

            <View
              style={{
                alignItems: "flex-end",
              }}
            >
              <Feather name="menu" size={28} color="#9CABE2" />
            </View>
          </View>
          <Divider />
          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <Image
              style={styles.riderImage}
              source={require("../../../assets/img/riderPic.png")}
            />
            <View>
              <Text>Picking Up Ajay</Text>
              <Text>Cash Ride</Text>
            </View>
            <View style={{ flexDirection: "row", gap: 10 }}>
              <View style={styles.iconContainer}>
                <MaterialIcons name="message" size={24} color="white" />
              </View>
              <View style={styles.iconContainer}>
                <FontAwesome5 name="phone-alt" size={24} color="white" />
              </View>
            </View>
          </View>
        </View>
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

    backgroundColor: "white",
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
  riderImage: {
    height: 60,
    width: 60,
    borderRadius: 30,
    margin: 10,
  },
  iconContainer: {
    backgroundColor: Color.appDefaultColor,
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    padding:5
  },
});
