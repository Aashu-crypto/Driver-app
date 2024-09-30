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
import Animated, { useAnimatedStyle, useSharedValue } from "react-native-reanimated";

const HomeScreenHeader = () => {
  const status = useSelector((state) => state.status.status);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const handleToggleStatus = () => {
    dispatch(UserStatus(status === "Online" ? "Offline" : "Online"));
  };
  const height = useSharedValue(0);
  const width = useSharedValue(0);
  const trackAnimatedStyle = useAnimatedStyle(() => {
    const color = interpolateColor(
      value.value,
      [0, 1],
      [trackColors.off, trackColors.on]
    );
    const colorValue = withTiming(color, { duration });

    return {
      backgroundColor: colorValue,
      borderRadius: height.value / 2,
    };
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
        <Pressable>
          <View style={{ width: 100, height: 30, backgroundColor: "black" }}>
            <Animated.View
              style={{ height: 30, backgroundColor: "#FFFF", width: 30 }}
            />
          </View>
        </Pressable>
        {/* <Pressable
          style={[
            styles.status,
            {
              backgroundColor: status === "Offline" ? "#FF5252" : "#23B94D",
            },
          ]}
          onPress={handleToggleStatus}
        >
          {status === "Offline" && <View style={styles.circle} />}
          <Text style={styles.offlineText}>{status}</Text>
          {status === "Online" && <View style={styles.circle} />}
        </Pressable> */}
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
  status: {
    padding: 10,
    borderRadius: 20,
    flexDirection: "row",
    width: 93,
    gap: 10,
    alignItems: "center",
  },
  offlineText: {
    color: "white",
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 18,
    fontFamily: FontFamily.poppinsRegular,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "white",
  },
});
