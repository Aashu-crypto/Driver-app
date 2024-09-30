import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  StatusBar,
} from "react-native";
import React from "react";
import { Feather, EvilIcons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { Color, FontFamily } from "../../GlobalStyles";
import { UserStatus } from "../Redux/Slice/UserStatusSlice";
import { useNavigation } from "@react-navigation/native";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  interpolate,
} from "react-native-reanimated";

const HomeScreenHeader = () => {
  const status = useSelector((state) => state.status.status);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const isOn = useSharedValue(status === "Online");
  const height = useSharedValue(0);
  const width = useSharedValue(0);

  // Handle the press to toggle the switch
  const handlePress = () => {
    isOn.value = !isOn.value;
    dispatch(UserStatus(status === "Online" ? "Offline" : "Online"));
  };

  // Track animation style - controls the track's background color
  const trackAnimatedStyle = useAnimatedStyle(() => {
    // Interpolate between red and green based on isOn.value
   

    const color = interpolateColor(isOn.value, [0, 1], ["red", "green"]);
    const colorValue = withTiming(color, { duration: 400 });
    return {
      backgroundColor: colorValue,
      borderRadius: height.value / 2,
    };
  });

  // Thumb animation style - controls the position of the thumb
  const thumbStyle = useAnimatedStyle(() => {
    // Interpolate the translateX value to move the thumb

    
    const moveValue = interpolate(
      Number(isOn.value),
      [0, 1],
      [0, width.value - height.value]
    );
    const translateValue = withTiming(moveValue, { duration: 400 });

    return {
      transform: [{ translateX: translateValue }],
      borderRadius: height.value / 2,
    };
  });
  const switchStyles = StyleSheet.create({
    track: {
      alignItems: 'flex-start',
      width: 100,
      height: 40,
      padding: 5,
    },
    thumb: {
      height: '100%',
      aspectRatio: 1,
      backgroundColor: 'white',
    },
  });
  return (
    <View style={styles.safeArea}>
      <View
        style={[
          styles.header,
          {
            backgroundColor:
              status === "Offline"
                ? Color.colorDarkgray
                : Color.appDefaultColor,
          },
        ]}
      >
        {/* Menu button to open the drawer */}
        <Pressable onPress={() => navigation.openDrawer()}>
          <Feather name="menu" size={28} color="#9CABE2" />
        </Pressable>

        {/* Animated Toggle Switch */}
        <Pressable onPress={handlePress}>
          <Animated.View
            style={[{ width: 120, height: 40, padding: 5 }, trackAnimatedStyle]}
            onLayout={(e) => {
              height.value = e.nativeEvent.layout.height;
              width.value = e.nativeEvent.layout.width;
            }}
          >
            <Animated.View
              style={[
                {
                  height: 30,
                  width: 30,
                  backgroundColor: "#FFFF",
                  justifyContent: "center",
                  alignItems: "center",
                },
                thumbStyle,
              ]}
            />
            <Text style={styles.statusText}>{status}</Text>
          </Animated.View>
        </Pressable>

        <EvilIcons name="search" size={28} color="white" />
      </View>
    </View>
  );
};

export default HomeScreenHeader;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: Platform.OS === "android" ? Color.appDefaultColor : "#fff",
    paddingTop: Platform.OS === "android" ? 20 : 0,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: Platform.OS === "android" ? 15 : 10,
    paddingTop: Platform.OS === "ios" && 45,
  },
  statusText: {
    position: "absolute", // Position the text within the switch
    left: "54%", // Center the text horizontally
    top: "64%", // Center the text vertically
    transform: [{ translateX: -20 }, { translateY: -10 }], // Adjust the text position
    color: "white",
    fontWeight: "500",
    fontSize: 13,
    fontFamily: FontFamily.poppinsRegular,
  },
});
