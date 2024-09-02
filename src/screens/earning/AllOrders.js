import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  FlatList,
  Image,
} from "react-native";
import React, { useState } from "react";
import { Color, FontFamily, width } from "../../../GlobalStyles";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Route } from "../../../routes";

const AllOrders = ({navigation}) => {
  const [active, setActive] = useState(0);
  const orders = [
    {
      id: 1,
      type: "Sedan",
      time: "10:38 AM",
      date: "6 Jun 2024",
      icon: "sun-o",
      fare: 200,
      paymentType: "Cash payment",
      paymentMethodIcon: "credit-card",
      location: "Neemuch RD. Gopalbari, Bari Sad...",
      status: "Completed",
    },
    {
      id: 2,
      type: "Mini",
      time: "10:38 AM",
      date: "6 Jun 2024",
      icon: "cloud",
      fare: 250,
      paymentType: "UPI payment",
      paymentMethodIcon: "mobile",
      location: "Neemuch RD. Gopalbari, Bari Sad...",
      status: "Completed",
    },
    {
      id: 3,
      type: "Today",
      time: "10:38 PM",
      date: "6 Jun 2024",
      icon: "moon-o",
      fare: 320,
      paymentType: "Cash payment",
      paymentMethodIcon: "credit-card",
      location: "Neemuch RD. Gopalbari, Bari Sad...",
      status: "Completed",
    },
    {
      id: 4,
      type: "Today",
      time: "10:38 PM",
      date: "6 Jun 2024",
      icon: "moon-o",
      fare: 320,
      paymentType: "UPI payment",
      paymentMethodIcon: "mobile",
      location: "Neemuch RD. Gopalbari, Bari Sad...",
      status: "Completed",
    },
  ];
  const btn = ["Completed", "All", "Cancelled", "Missed"];
  const renderItem = ({ item }) => {
    return (
      <Pressable style={styles.orderContainer} onPress={()=>navigation.navigate(Route.ORDERDETAILS)}>
        <View style={{ gap: 10 }}>
          <View>
            <Text style={styles.title}>
              {item.type} | {item.time}
            </Text>
            <Text style={styles.subTitle}>City Ride</Text>
          </View>
          <View style={{ gap: 10 }}>
            <View style={{ flexDirection: "row", gap: 5 }}>
              <FontAwesome name="map-marker" size={15} color="green" />
              <Text style={styles.location}>{item.location}</Text>
            </View>
            <View style={{ flexDirection: "row", gap: 5 }}>
              <FontAwesome name="map-marker" size={15} color="red" />
              <Text style={styles.location}>{item.location}</Text>
            </View>
          </View>
        </View>
        <View>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <AntDesign name="checkcircle" size={15} color="green" />
            <Text style={styles.fare}>₹{item.fare}</Text>
          </View>
          <View
            style={[
              {
                backgroundColor:
                  item.paymentType === "Cash payment"
                    ? Color.green
                    : "transparent",
                borderWidth: item.paymentType === "Cash payment" ? 0 : 1,
                borderColor:
                  item.paymentType === "Cash payment" ? 0 : "#F07039",
              },
              styles.paymentType,
            ]}
          >
            {item.paymentType === "Cash payment" ? (
              <FontAwesome name="money" size={18} color="white" />
            ) : (
              <Image
                source={require("../../../assets/icons/upi-icon.png")}
                style={{ height: 18, width: 24 }}
              />
            )}

            <Text
              style={[
                {
                  color:
                    item.paymentType === "Cash payment" ? "white" : "#F07039",
                },
                styles.paymentTypeText,
              ]}
            >
              {item.paymentType}
            </Text>
          </View>
        </View>
      </Pressable>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tabContainer}>
        {btn.map((item, index) => (
          <Pressable
            key={index}
            style={[
              styles.tabButton,
              { backgroundColor: active === index ? "blue" : "transparent" },
            ]}
            onPress={() => setActive(index)}
          >
            <Text
              style={[
                styles.tabText,
                { color: active === index ? "white" : Color.gray },
              ]}
            >
              {item}
            </Text>
          </Pressable>
        ))}
      </View>
      <Text
        style={{
          padding: 5,
          margin: 10,
          fontSize: 13,
          fontWeight: "400",
          fontFamily: FontFamily.poppinsRegular,
          color: "#6E6767",
        }}
      >
        6 June 2024
      </Text>
      <FlatList
        data={orders}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

export default AllOrders;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
    backgroundColor: Color.backGroundColor,

    borderRadius: 20,

    overflow: "hidden",
    marginHorizontal: 10,
    marginTop: 10,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: "#E0E0E0",
  },
  tabButton: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    borderRadius: 20,
  },
  tabText: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: "500",
    color: "#888888",
  },
  activeTab: {
    backgroundColor: Color.appDefaultColor,
  },
  orderContainer: {
    flexDirection: "row",

    width: width * 0.95,
    alignSelf: "center",
    margin: 5,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: "#fff",
    elevation: 2,
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 13,
    fontWeight: "500",
    lineHeight: 19.5,
    color: "#6E6767",
    fontFamily: FontFamily.poppinsRegular,
  },
  subTitle: {
    fontSize: 10,
    fontWeight: "400",
    lineHeight: 15,
    fontFamily: FontFamily.poppinsRegular,
  },
  location: {
    fontSize: 10,
    fontWeight: "400",
    lineHeight: 15,
    fontFamily: FontFamily.poppinsRegular,
    color: "#595F75",
  },
  fare: {
    fontSize: 20,
    fontWeight: "500",
    lineHeight: 30,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.appDefaultColor,
  },
  paymentType: {
    borderRadius: 10,
    paddingHorizontal: 5,
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 3,
    gap: 5,
  },
  paymentTypeText: {
    fontSize: 8,
    lineHeight: 12,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsRegular,
  },
});
