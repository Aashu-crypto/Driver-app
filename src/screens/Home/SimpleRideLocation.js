import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Route } from "../../../routes";
import { Color, FontFamily, width } from "../../../GlobalStyles";
import Button from "../../components/Button";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import Entypo from "@expo/vector-icons/Entypo";
import DestinationIcon from "../../components/DestinationIcon";
const SimpleRideLocation = ({ navigation }) => {
  return (
    <View style={styles.bottomCard}>
      <View style={styles.iconContainer}>
        <FontAwesome name="user" size={24} color={Color.appDefaultColor} />
      </View>

      <View style={styles.paymentContainer}>
        <Text style={styles.paymentText}>Cash Payment</Text>
      </View>
      <Text style={styles.amountText}>₹250</Text>
      <Text style={styles.rideDetailsText}>Sedan · 2 km · 5 mins away</Text>

      <View style={styles.rideInfoContainer}>
        {/* <View style={styles.rideDetail}>
          <View style={styles.locationIconContainer}>
            <FontAwesome name="map-marker" size={20} color="green" />
          </View>
          <View style={styles.locationIconContainer}>
            <MaterialIcons name="access-time" size={20} color={Color.appDefaultColor} />
          </View>
          <View style={styles.locationIconContainer}>
            <FontAwesome name="map-marker" size={20} color="red" />
          </View>
        </View> */}
        <View>
            <DestinationIcon height={50}/>
        </View>
        <View>
          <View style={styles.rideTextContainer}>
            <Text style={styles.rideLocation}>Janakpuri, New Delhi</Text>
            <Text style={styles.rideAddress}>
              K-20, Bhalaswa Janakpuri, Janakpuri, New Delhi, 110033, India
            </Text>
          </View>

          <View
            style={[styles.rideDetail, { marginLeft: 15, marginVertical: 10 }]}
          >
            <View
              style={[
                styles.rideTextContainer,
                { flexDirection: "row", gap: 5 },
              ]}
            >
              <Entypo
                name="back-in-time"
                size={18}
                color={Color.appDefaultColor}
              />
              <Text
                style={{
                  fontSize: 12,
                  lineHeight: 18,
                  fontFamily: FontFamily.poppinsRegular,
                  fontWeight: "400",
                  color: "#595F75",
                }}
              >
                25 mins Trip · 7.5 Km Distance
              </Text>
            </View>
          </View>

          <View style={styles.rideDetail}>
            <View style={styles.rideTextContainer}>
              <Text style={styles.rideLocation}>Rohini, New Delhi</Text>
              <Text style={styles.rideAddress}>
                Government Sarvodaya Vidyalaya, Sector 8E, Rohni, New Delhi
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={{ marginBottom: 15 }}>
        <Button
          placeholder={"Accept"}
          onPress={() => navigation.navigate(Route.CLIENTLOCATION)}
        />
      </View>
    </View>
  );
};

export default SimpleRideLocation;

const styles = StyleSheet.create({
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
    alignSelf: "center",
    bottom: 0,
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
    borderColor: Color.appDefaultColor,
    borderWidth: 2,
    padding: 5,
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
    fontSize: 13,
    fontFamily: FontFamily.poppinsRegular,
    fontWeight: "400",
    lineHeight: 19.5,
  },
  amountText: {
    fontSize: 31,
    fontWeight: "500",
    color: Color.appDefaultColor,
    lineHeight: 46.5,
    fontFamily: FontFamily.poppinsRegular,
    marginTop: 5,
  },
  rideDetailsText: {
    fontSize: 12,
    color: Color.gray,
    fontWeight: "500",
    lineHeight: 18,
    marginBottom: 20,
    fontFamily: FontFamily.poppinsRegular,
  },
  rideInfoContainer: {
    width: "95%",
    backgroundColor: "#f0f4f8",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    flexDirection:'row'
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
    color: "#595F75",
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 19.5,
    fontWeight: "400",
  },
  rideAddress: {
    fontSize: 11,
    color: Color.colorGray,
    lineHeight: 16.5,
    fontWeight: "400",
  },
  rideDetails: {
    fontSize: 12,
    color: Color.colorDarkslategray,
    fontFamily: FontFamily.poppinsRegular,
  },
});
