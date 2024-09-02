import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Pressable,
} from "react-native";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { BarChart } from "react-native-chart-kit";
import EarningCard from "../../components/EarningCard";
import Animated, { useSharedValue } from "react-native-reanimated";
import { Color, FontFamily, width } from "../../../GlobalStyles";
// Constants for colors and font sizes
import Feather from "@expo/vector-icons/Feather";
// Dynamic data for the graph
const data = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      data: [150, 120, 80, 200, 150, 100, 120],
      color: (opacity = 1) => `rgba(0, 0, 128, ${opacity})`, // Dark Blue color for Earnings
    },
    {
      data: [0, 0, 0, 50, 0, 0, 0],
      color: (opacity = 1) => `rgba(34, 139, 34, ${opacity})`, // Green color for Incentive
    },
  ],
  legend: ["Earnings", "Incentive"],
};
const date = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
const chartConfig = {
  backgroundGradientFrom: "#ffffff",
  backgroundGradientTo: "#ffffff",
  decimalPlaces: 0, // For no decimal places
  color: (opacity = 1) => `rgba(28,75, 255, 1)`, // Adjust the color of labels, axes
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  barPercentage: 0.8,
  useShadowColorFromDataset: false, // This should be false to prevent shadow color usage
  style: {
    borderRadius: 16,
  },
  strokeWidth: 0, // Remove or set to 0 to avoid affecting bar colors
};
const EarningsScreen = () => {
  const translateX = useSharedValue(0);
  const btn = ["Today", "Week", "Month"];
  const [active, setActive] = useState(0);
  const [activeWeek, setActiveWeek] = useState(0);
  const week = ["2-6 Jun", "7-12 Jun", "12-16 Jun"];
  console.log(active);
  const scrollViewRef = useRef(null);
  const scrollLeft = () => {
    scrollViewRef.current.scrollTo({
      x: scrollViewRef.value - 300, // Adjust scroll offset for left
      animated: true,
    });
  };

  const scrollRight = () => {
    scrollViewRef.current.scrollTo({
      x: scrollViewRef.value + 300, // Adjust scroll offset for right
      animated: true,
    });
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Tab Section */}
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

      {/* Date Range Selector */}
      {active === 1 && (
        <View style={styles.dateRangeContainer}>
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
        </View>
      )}
      {active == 0 && (
        <View style={styles.dateRangeContainer}>
          <Pressable onPress={scrollLeft}>
            <Feather name="arrow-left" size={24} color="black" />
          </Pressable>

          <ScrollView
            horizontal
            ref={scrollViewRef}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ alignItems: "center", gap: 10 }}
          >
            {date.map((item, index) => (
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

      {/* Earning Card */}
      <EarningCard amount={"7500"} ridesCount={"2"} />

      {/* Highest Earning Card */}
      <View style={styles.highestEarningCard}>
        <Text style={styles.highestEarningLabel}>₹250 Highest earning</Text>
        <Text style={styles.highestEarningDate}>On 10 June</Text>
        <BarChart
          data={data}
          width={width - 80}
          height={220}
          yAxisLabel="₹"
          chartConfig={chartConfig}
          verticalLabelRotation={0}
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
          showBarTops={false}
          fromZero
          withHorizontalLabels={true}
          withInnerLines={false}
          withStackedBars={true}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginRight: 15,
            }}
          >
            <View
              style={{
                width: 10,
                height: 10,
                backgroundColor: "rgba(34, 128, 255, 1)",
                marginRight: 5,
              }}
            />
            <Text>Earnings</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                width: 10,
                height: 10,
                backgroundColor: "rgba(76, 175, 80, 1)",
                marginRight: 5,
              }}
            />
            <Text>Incentive</Text>
          </View>
        </View>
      </View>

      {/* Stats */}
      <View style={styles.statsContainer}>
        <Text style={styles.statsLabel}>Stats</Text>
        <View style={styles.statsCard}>
          <Text style={styles.statsText}>Online time</Text>
          <Text style={styles.statsText}>9h 20m</Text>
        </View>
      </View>

      {/* Weekly Breakup */}
      <View style={styles.weeklyBreakupContainer}>
        <Text style={styles.weeklyBreakupLabel}>Weekly break up</Text>
        <View style={styles.weeklyBreakupCard}>
          {[
            { label: "Add Net Fare", value: "₹250" },
            { label: "Incentive", value: "₹80" },
            { label: "Taxes", value: "₹70" },
            { label: "Total Earning", value: "₹700", isTotal: true },
          ].map((item, index) => (
            <View key={index} style={styles.weeklyRow}>
              <Text
                style={[
                  styles.weeklyLabel,
                  item.isTotal && styles.totalLabel, // Style for total
                ]}
              >
                {item.label}
              </Text>
              <Text
                style={[
                  styles.weeklyValue,
                  item.isTotal && styles.totalValue, // Style for total value
                ]}
              >
                {item.value}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default EarningsScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 15,
    color: Color.appDefaultColor,
    fontWeight: "bold",
  },
  helpText: {
    fontSize: 10,
    color: Color.appDefaultColor,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
    backgroundColor: Color.backGroundColor,

    borderRadius: 20,

    overflow: "hidden",
  },
  tab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: "#E0E0E0",
  },
  activeTab: {
    backgroundColor: Color.appDefaultColor,
  },
  tabText: {
    fontSize: 10,
    color: "#333",
  },
  tabTextActive: {
    color: "#fff",
  },
  dateRangeContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  dateRange: {
    fontSize: 10,
    color: Color.backGroundColor,
  },
  activeDateRange: {
    backgroundColor: Color.backGroundColor,

    borderRadius: 20,
    padding: 10,
  },

  highestEarningCard: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: Color.colorDarkslategray,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    
    elevation: 2,
  },
  highestEarningLabel: {
    fontSize: 10,
    fontWeight: "bold",
    color: Color.colorDarkslategray,
  },
  highestEarningDate: {
    fontSize: 15,
    color: Color.colorDarkslategray,
    marginBottom: 10,
  },
  statsContainer: {
    marginBottom: 20,
    flex: 1,
  },
  statsLabel: {
    fontSize: 10,
    fontWeight: "bold",
    color: Color.colorDarkslategray,
    marginBottom: 10,
  },
  statsCard: {
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 12,
    shadowColor: "#333",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  statsText: {
    fontSize: 15,
    color: Color.colorGray,
    lineHeight: 22.5,
    fontFamily: FontFamily.poppinsRegular,
  },
  statsValue: {
    fontSize: 15,
    fontWeight: "bold",
    color: Color.colorDarkslategray,
    marginTop: 5,
  },
  weeklyBreakupContainer: {
    marginBottom: 20,
  },
  weeklyBreakupLabel: {
    fontSize: 10,
    fontWeight: "bold",
    color: Color.colorDarkslategray,
    marginBottom: 10,
  },
  weeklyBreakupCard: {
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 12,
    shadowColor: "#333",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  weeklyRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  weeklyLabel: {
    fontSize: 15,
    color: Color.colorDarkslategray,
  },
  weeklyValue: {
    fontSize: 15,
    color: Color.colorDarkslategray,
  },
  totalLabel: {
    fontSize: 15,
    fontWeight: "500",
    lineHeight: 22.5,
  },
  totalValue: {
    fontSize: 15,
    fontWeight: "500",
    color: Color.appDefaultColor,
    lineHeight: 22.5,
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
});
