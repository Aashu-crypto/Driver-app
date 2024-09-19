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
import { Color } from "../../GlobalStyles";
import { UserStatus } from "../Redux/Slice/UserStatusSlice";
import { useNavigation } from "@react-navigation/native";
const HomeScreenHeader = () => {
  const status = useSelector((state) => state.status.status);
  const dispatch = useDispatch();
  const navigation = useNavigation();
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
        {/* Menu button to open the drawer */}
        <Pressable onPress={() => navigation.openDrawer()}>
          <Feather name="menu" size={28} color="#9CABE2" />
        </Pressable>
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
    marginTop: Platform.OS === "android" ? 20 : 0,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: Platform.OS === "android" ? 10 : 10,
    paddingTop: Platform.OS === "android" ? 10 : 10,
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
