import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState, useRef } from "react";
import { Color, FontFamily } from "../../../GlobalStyles";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
const Incentives = () => {
  const [active, setActive] = useState(1);
  const [activeWeek, setActiveWeek] = useState(0);
  const [activeMonth, setActiveMonth] = useState(0);
  const dates = Array.from({ length: 18 }, (_, i) => i + 1);

  const scrollViewRef = useRef(null);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const week = ["2-6 Jun", "7-12 Jun", "12-16 Jun"];

  const scrollLeft = () => {
    scrollViewRef.current?.scrollTo({
      x: scrollViewRef.current.contentOffset.x - 300,
      animated: true,
    });
  };

  const scrollRight = () => {
    scrollViewRef.current?.scrollTo({
      x: scrollViewRef.current.contentOffset.x + 300,
      animated: true,
    });
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.tabContainer}>
        {["Today", "Week", "Bonus"].map((item, index) => (
          <Pressable
            key={index}
            style={[
              styles.tabButton,
              {
                backgroundColor:
                  active === index ? Color.appDefaultColor : "transparent",
              },
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
      {active === 1 && (
        <View style={styles.dateRangeContainer}>
          <Pressable onPress={scrollLeft} style={{ justifyContent: "center" }}>
            <Feather name="arrow-left" size={24} color="black" />
          </Pressable>
          {week.map((range, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.activeDateRange,
                {
                  backgroundColor:
                    activeWeek === index
                      ? Color.appDefaultColor
                      : Color.backGroundColor,
                },
              ]}
              onPress={() => setActiveWeek(index)}
            >
              <Text
                style={[
                  styles.tabText,
                  { color: activeWeek === index ? "white" : Color.gray },
                ]}
              >
                {range}
              </Text>
            </TouchableOpacity>
          ))}
          <Pressable onPress={scrollRight} style={{ justifyContent: "center" }}>
            <Feather name="arrow-right" size={24} color="black" />
          </Pressable>
        </View>
      )}

      {active === 2 && (
        <View style={styles.dateRangeContainer}>
          <Pressable onPress={scrollLeft} style={{ justifyContent: "center" }}>
            <Feather name="arrow-left" size={24} color="black" />
          </Pressable>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.scrollContainer}
            ref={scrollViewRef}
          >
            {months.map((month, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.activeDateRange,
                  {
                    backgroundColor:
                      activeMonth === index ? "#007BFF" : "#F3F6FF",
                  },
                ]}
                onPress={() => setActiveMonth(index)}
              >
                <Text
                  style={[
                    styles.tabText,
                    { color: activeMonth === index ? "white" : "gray" },
                  ]}
                >
                  {month}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <Pressable onPress={scrollRight} style={{ justifyContent: "center" }}>
            <Feather name="arrow-right" size={24} color="black" />
          </Pressable>
        </View>
      )}

      {active === 0 && (
        <View style={styles.dateRangeContainer}>
          <Pressable onPress={scrollLeft}>
            <Feather name="arrow-left" size={24} color="black" />
          </Pressable>
          <ScrollView
            horizontal
            ref={scrollViewRef}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ alignItems: "center" }}
          >
            {dates.map((item, index) => (
              <Pressable key={index} style={styles.activeDateRange}>
                <Text style={styles.tabText}>{item}</Text>
              </Pressable>
            ))}
          </ScrollView>
          <Pressable onPress={scrollRight}>
            <Feather name="arrow-right" size={24} color="black" />
          </Pressable>
        </View>
      )}
      <View style={styles.earningCard}>
        <Text style={styles.incentiveText}>
          Complete 5 more trips to earn ₹250 & unlock another offer
        </Text>
        <Image source={require("../../../assets/icons/unlock.png")} />
      </View>
      <View style={styles.timeline}>
        {/* <View style={styles.line} /> */}
        {["25", "35", "45", "55"].map((amount, index) => (
          <View key={index} style={styles.timelineItem}>
            <View style={styles.circle} />
            <View style={styles.timelineContent}>
              <Text style={styles.timelineText}>
                Completed 6 rides and 24 km
              </Text>
              <Text style={styles.missedText}>
                Missed! you did not complete your targets
              </Text>
            </View>
            <Text style={styles.amountText}>₹{amount}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Incentives;

const styles = StyleSheet.create({
  earningCard: {
    flexDirection: "row",
    padding: 20,
    backgroundColor: "#FFFBEF",

    borderRadius: 12,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  incentiveText: {
    maxWidth: "80%",
    color: Color.appDefaultColor,
    fontSize: 13,
    fontWeight: "400",
    lineHeight: 19.5,
    fontFamily: FontFamily.poppinsRegular,
  },
  container: {
    flexGrow: 1,
    padding: 20,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
    backgroundColor: Color.backGroundColor,
    borderRadius: 20,
    overflow: "hidden",
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
  },
  dateRangeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  activeDateRange: {
    backgroundColor: Color.backGroundColor,
    borderRadius: 20,
    padding: 10,
  },
  timelineItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    padding:15,
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 10,
    elevation: 5,
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Color.appDefaultColor,
    marginRight: 10,
  },
  timelineContent: {
    flex: 1,
    gap: 10,
  },
  timelineText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  missedText: {
    fontSize: 12,
    color: "#F44336",
  },
  amountText: {
    fontSize: 16,
    fontWeight: "bold",
    color: " Color.appDefaultColor",
  },
  timeline: {
    marginTop: 20,
   
  },
  line: {
    position: "absolute",
    left: 20,
    top: 10,
    bottom: 0,
    width: 2,
    backgroundColor: " Color.appDefaultColor",
  },
});
