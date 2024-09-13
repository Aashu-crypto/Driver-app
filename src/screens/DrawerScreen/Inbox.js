import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Color, FontFamily } from "../../../GlobalStyles";

const data = [
  {
    id: "1",
    title: "Zaptric points you towards savings 😃",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius...",
    time: "17 hr",
  },
  {
    id: "2",
    title: "Need oil change? 🚗",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius...",
    time: "4 May",
  },
  {
    id: "3",
    title: "Zaptric points you towards savings 😃",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius...",
    time: "7 May",
  },
  {
    id: "4",
    title: "Zaptric points towards savings 😄👑",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius...",
    time: "2 May",
  },
  {
    id: "5",
    title: "Zaptric pointss savings 😄👑",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius...",
    time: "1 May",
  },
];

const InboxScreen = () => {
  const renderNotification = ({ item }) => (
    <View style={styles.notificationCard}>
      <View style={styles.cardHeader}>
        <Image
          source={require("../../../assets/img/zaptricColor.png")}
          style={{ width: 50, resizeMode: "contain", height: 20 }}
        />
        <TouchableOpacity>
          <MaterialIcons name="close" size={22} color={Color.appDefaultColor} />
        </TouchableOpacity>
      </View>
      <Text style={styles.notificationTitle}>{item.title}</Text>
      <Text style={styles.notificationDescription}>{item.description}</Text>
      <Text style={styles.notificationTime}>{item.time}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderNotification}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

export default InboxScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECF0FF",
    paddingVertical: 10,
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  notificationCard: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },

  notificationTitle: {
    fontSize: 15,
    fontWeight: "700",
    lineHeight: 22.5,
    fontFamily: FontFamily.poppinsRegular,
    color: "#677093",
    marginBottom: 10,
  },
  notificationDescription: {
    color: "#7D86A9",
    fontSize: 12,
    lineHeight: 18,
    marginBottom: 8,
    fontWeight: "400",
    fontFamily: FontFamily.poppinsRegular,
  },
  notificationTime: {
    color: "#7D86A9",
    fontSize: 11,
    alignSelf: "flex-end",
    lineHeight: 16.5,

    fontWeight: "400",
    fontFamily: FontFamily.poppinsRegular,
  },
});
