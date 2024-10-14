import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import MapView, { Polyline, Marker } from "react-native-maps";
import * as Location from "expo-location";
import axios from "axios";
import { Color, FontFamily, height, width } from "../../../GlobalStyles";
import Feather from "@expo/vector-icons/Feather";
import Divider from "../../components/Divider";
import { FontAwesome } from "@expo/vector-icons";

import * as Progress from "react-native-progress";
import PhotoWithRating from "../../components/PhotoWithRating";
import { FontAwesome5 } from "@expo/vector-icons";
import { Button, Slider } from "react-native-zaptric-ui";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Route } from "../../../routes";
import Safety from "../../components/Safety";
export default function ClientLocation({navigation}) {
  const [location, setLocation] = useState(null);
  const [destination, setDestination] = useState({
    latitude: 31.634,
    longitude: 74.872261,
  });
  const [routeCoordinates, setRouteCoordinates] = useState([]);
  const [clientLocated, setClientLocated] = useState(true);

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
        `https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc.latitude},${startLoc.longitude}&destination=${destinationLoc.latitude},${destinationLoc.longitude}&key=YOUR_API_KEY`
      );

      if (response.data.routes.length) {
        const points = decodePolyline(
          response.data.routes[0].overview_polyline.points
        );
        setRouteCoordinates(points);
      } else {
      }
    } catch (error) {
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
      <Safety/>
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
          <View style={{ alignItems: "center" }}>
            <Progress.Bar
              progress={0.3}
              width={width * 0.95}
              color={Color.appDefaultColor}
            />
          </View>

          <View style={styles.clientLocatedContainer}>
            <View style={styles.waitingContainer}>
              <Text style={styles.waitingText}>Waiting for rider</Text>
              <Text style={styles.timerText}>4:34</Text>
            </View>
            <View style={styles.menuIconContainer}>
              <Feather name="menu" size={28} color="#9CABE2" />
            </View>
          </View>
          <Divider />
          <View style={styles.riderInfoContainer}>
            <View style={styles.riderImageContainer}>
              <PhotoWithRating />
              <View style={styles.riderDetails}>
                <Text style={styles.name}>Picking up Ajay</Text>
                <View style={styles.cashRide}>
                  <FontAwesome5
                    name="money-bill-wave"
                    size={16}
                    color="white"
                  />
                  <Text style={styles.cashRideText}>Cash Ride</Text>
                </View>
              </View>
            </View>
            <View style={styles.actionButtonsContainer}>
              <Image
                source={require("../../../assets/img/call.png")}
                style={styles.actionButtonIcon}
              />
              <Pressable
                onPress={() => {
                  navigation.navigate(Route.DRIVERCHATSCREEN);
                }}
              >
                <Image
                  source={require("../../../assets/img/sms.png")}
                  style={styles.actionButtonIcon}
                />
              </Pressable>
            </View>
          </View>
<View style={{alignItems:'center',marginBottom:10}}>
          <Slider icon={ <AntDesign
              name="doubleright"
              size={24}
              color={Color.appDefaultColor}
             
            />} placeHolder='Slide to Start Ride' btnWidth={width*0.8} onEnd={()=>{navigation.navigate(Route.OTPSTARTRIDE)
            }}/>
            </View>
         
        </View>
      ) : (
        <View style={styles.bottomCard}>
          <View style={styles.header}>
            <Text style={styles.name}>Pickup Ajay Singh</Text>
            <View style={styles.menuIconContainer}>
              <Feather name="menu" size={28} color={Color.borderColor} />
            </View>
          </View>
          <Divider />
          <View style={styles.rideDetail}>
            <View style={styles.locationIconContainer}>
              <FontAwesome name="map-marker" size={18} color={Color.green} />
            </View>
            <View style={styles.rideTextContainer}>
              <Text style={styles.rideAddress}>
                K-20, Bhalswa Janakpuri, Janakpuri, New delhi, 110033, India
              </Text>
            </View>
          </View>
          <View style={{alignSelf:'center'}}>
          <Button placeHolder={"Client Located"} btnWidth={width * 0.85} />
          </View>
          
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
    height:height-150,
    minHeight:height-200
  
    
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
    alignSelf: "center",
    bottom: 0,
  },
  clientLocatedContainer: {
    flexDirection: "row",
    padding: 10,
  },
  waitingContainer: {
    alignSelf: "center",
    fontSize: 16,
    flex: 1,
  },
  waitingText: {
    alignSelf: "center",
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "400",
    fontFamily: FontFamily.poppinsRegular,
  },
  timerText: {
    alignSelf: "center",
    fontSize: 16,
    borderWidth: 1,
    paddingHorizontal: 20,
    borderRadius: 10,
    paddingVertical: 4,
    marginTop: 4,
    borderColor: Color.appDefaultColor,
    color: Color.appDefaultColor,
  },
  menuIconContainer: {},
  riderInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 10,
  },
  riderImageContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  riderDetails: {
    marginLeft: 15,
  },
  name: {
    fontSize: 15,
    fontWeight: "500",
    lineHeight: 18,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorGray,
  },
  carType: {
    fontSize: 13,
    lineHeight: 19.5,
    fontWeight: "400",
    fontFamily: FontFamily.poppinsRegular,
    color: "#656565",
  },
  actionButtonsContainer: {
    flexDirection: "row",
    columnGap: 10,
  },
  actionButtonIcon: {
    width: 35,
    height: 35,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: width,
    padding: 15,
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
  rideAddress: {
    fontSize: 11,
    color: Color.colorGray,
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
