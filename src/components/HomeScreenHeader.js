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
    <SafeAreaView style={styles.safeArea}>
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
        <Feather name="menu" size={28} color="#9CABE2" />
        <Pressable
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
        </Pressable>
        <EvilIcons name="search" size={28} color="white" />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreenHeader;

const styles = StyleSheet.create({
  safeArea: {
    flex: 0,
    backgroundColor: Platform.OS === "android" ? Color.appDefaultColor : "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: Platform.OS === "android" ? 10 : 10,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 10,
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
    fontWeight: "600",
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "white",
  },
});
