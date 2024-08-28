import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import React from "react";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { Color } from "../../GlobalStyles";
import { UserStatus } from "../Redux/Slice/UserStatusSlice";
import Feather from "@expo/vector-icons/Feather";
import EvilIcons from "@expo/vector-icons/EvilIcons";
const HomeScreenHeader = () => {
  const status = useSelector((state) => state.status.status);
  const dispatch = useDispatch();

  const handleToggleStatus = () => {
    dispatch(UserStatus(status === "Online" ? "Offline" : "Online"));
  };

  return (
    <SafeAreaView
      style={[
        styles.header,
        {
          backgroundColor:
            status === "Offline" ? Color.colorDarkgray : Color.appDefaultColor,
        },
      ]}
    >
      <Feather name="menu" size={28} color="#9CABE2" />
      <Pressable
        style={[
          styles.status,
          { backgroundColor: status === "Offline" ? "#FF5252" : "#23B94D" },
        ]}
        onPress={handleToggleStatus}
      >
        {status === "Offline" && <View style={styles.circle} />}
        <Text style={styles.offlineText}>{status}</Text>
        {status === "Online" && <View style={styles.circle} />}
      </Pressable>
      <EvilIcons name="search" size={28} color="white" />
    </SafeAreaView>
  );
};

export default HomeScreenHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginTop: Platform.OS === "android" ? 20 : 10,
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
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "white",
  },
});
