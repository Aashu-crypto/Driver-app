import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  ImageBackground,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import HomeScreenHeader from "../../components/HomeScreenHeader";
import { Color, FontFamily, width } from "../../../GlobalStyles";
import { useSelector } from "react-redux";
import { backend_Host } from "../../../config";
import Svg, { Circle } from "react-native-svg";
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import SimpleRideLocation from "./SimpleRideLocation";
import SharedRide from "./SharedRide";

const HomeScreen = ({ navigation }) => {
  const status = useSelector((state) => state.status.status);

  const [findRide, setFindRide] = useState([false]);
  const [typeOfRide, setTypeOfRide] = useState("Shared");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const rotation = useSharedValue(0);
  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, { duration: 1000, easing: Easing.linear }),
      -1
    );
  }, []);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value}deg` }],
  }));

  useEffect(() => {
    const fetchRideAvailability = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${backend_Host}/ride-available`);
        const data = await response.json();
        setFindRide(data);
      } catch (error) {
        setError("Failed to fetch ride availability");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    setTimeout(() => {
      fetchRideAvailability();
    }, 6000);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Color.appDefaultColor} />
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
          <ImageBackground
            source={require("../../../assets/img/phoneBackground.png")}
            style={styles.mainImageBackground}
          >
            <Image
              source={require("../../../assets/img/phone.png")}
              style={styles.mainImage}
            />
          </ImageBackground>
          <Text style={styles.greeting}>Good Morning, Partner</Text>
          <Text style={styles.onDutyText}>
            Go <Text style={styles.onDutyHighlight}>ON DUTY</Text> to Start
            Earning
          </Text>
        </View>
      )}

      {status === "Online" && !findRide && (
        <View style={styles.bottomCard}>
          <View style={styles.iconContainerLoader}>
            <Animated.View style={[styles.loader, animatedStyles]}>
              <Svg height="70" width="70" viewBox="0 0 140 140">
                <Circle
                  cx="70"
                  cy="70"
                  r="56"
                  stroke="#4169e1"
                  strokeWidth="5"
                  fill="none"
                  strokeDasharray="140,80"
                />
              </Svg>
            </Animated.View>
            <View style={styles.iconWrapperCentered}>
              <FontAwesome
                name="user"
                size={24}
                color={Color.appDefaultColor}
              />
            </View>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={styles.findingText}>Finding customers...</Text>
          </View>
        </View>
      )}

      {status === "Online" && typeOfRide === "simple" && findRide && (
        <SimpleRideLocation />
      )}
      {status === "Online" && typeOfRide === "Shared" && findRide && (
    <SharedRide/>
      )}
    </View>
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
  mainImageBackground: {
    width: 160,
    height: 128,
    resizeMode: "contain",
    alignItems: "center",
    justifyContent: "center",
  },
  greeting: {
    fontSize: 16,
    color: "#878CA1",
    fontFamily: FontFamily.poppinsRegular,
    marginTop: 20,
    fontWeight: "400",
    lineHeight: 24,
  },
  onDutyText: {
    fontSize: 17,
    color: "#595F75",
    fontFamily: FontFamily.poppinsRegular,
    fontWeight: "500",
    lineHeight: 25.5,
  },
  onDutyHighlight: {
    fontSize: 17,
    color: Color.green,
    fontFamily: FontFamily.poppinsRegular,
    marginTop: 20,
    fontWeight: "500",
    lineHeight: 25.5,
  },
  bottomCard: {
    width: width,
    minHeight: 100,
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
    backgroundColor: "#fff",
  },
  iconContainerLoader: {
    position: "absolute",
    top: -28,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#4169e1",
    padding: 5,
  },
  iconWrapperCentered: {
    position: "absolute",
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  loader: {
    position: "absolute",
    zIndex: -1,
  },
  findingText: {
    color: Color.appDefaultColor,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsRegular,
  },
});

export default HomeScreen;
