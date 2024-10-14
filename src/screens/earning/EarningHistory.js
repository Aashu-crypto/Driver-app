import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { BarChart } from "react-native-chart-kit";
import EarningCard from "../../components/Earningcard";
import { Color, FontFamily, width } from "../../../GlobalStyles";

const data = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      data: [150, 120, 80, 200, 150, 100, 120],
      color: (opacity = 1) => `rgba(0, 0, 128, ${opacity})`, // Earnings Color
    },
    {
      data: [0, 0, 0, 50, 0, 0, 0],
      color: (opacity = 1) => `rgba(34, 139, 34, ${opacity})`, // Incentive Color
    },
  ],
  legend: ["Earnings", "Incentive"],
};

const chartConfig = {
  backgroundGradientFrom: "#ffffff",
  backgroundGradientTo: "#ffffff",
  decimalPlaces: 0, // No decimal places
  color: (opacity = 1) => `rgba(28, 75, 255, ${opacity})`, // Label Color
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  barPercentage: 0.8,
  style: {
    borderRadius: 16,
  },
};

const EarningsScreen = () => {
  const [active, setActive] = useState(1);
  const [activeWeek, setActiveWeek] = useState(0);
  const [activeMonth, setActiveMonth] = useState(0);

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const week = ["2-6 Jun", "7-12 Jun", "12-16 Jun"];
  const dates = Array.from({ length: 18 }, (_, i) => i + 1);

  const scrollViewRef = useRef(null);

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
      {/* Tab Section */}
      <View style={styles.tabContainer}>
        {["Today", "Week", "Month"].map((item, index) => (
          <Pressable
            key={index}
            style={[
              styles.tabButton,
              { backgroundColor: active === index ? Color.appDefaultColor : "transparent" },
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
          <Pressable onPress={scrollLeft} style={{ justifyContent: "center" }}>
            <Feather name="arrow-left" size={24} color="black" />
          </Pressable>
          {week.map((range, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.activeDateRange,
                {
                  backgroundColor: activeWeek === index ? Color.appDefaultColor : Color.backGroundColor,
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
                  { backgroundColor: activeMonth === index ? "#007BFF" : "#F3F6FF" },
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
          withHorizontalLabels
          withInnerLines={false}
        />
        <View style={styles.legendContainer}>
          <View style={styles.legendItem}>
            <View style={[styles.legendColor, { backgroundColor: "rgba(34, 128, 255, 1)" }]} />
            <Text>Earnings</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendColor, { backgroundColor: "rgba(76, 175, 80, 1)" }]} />
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
                  item.isTotal && styles.totalLabel,
                ]}
              >
                {item.label}
              </Text>
              <Text
                style={[
                  styles.weeklyValue,
                  item.isTotal && styles.totalValue,
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
  highestEarningCard: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: "#333",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  highestEarningLabel: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#333",
  },
  highestEarningDate: {
    fontSize: 15,
    marginBottom: 10,
  },
  legendContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  legendColor: {
    width: 10,
    height: 10,
    marginRight: 5,
  },
  statsContainer: {
    marginBottom: 20,
  },
  statsLabel: {
    fontSize: 10,
    fontWeight: "bold",
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
    justifyContent: "space-between",
    alignItems: "center",
  },
  statsText: {
    fontSize: 15,
  },
  weeklyBreakupContainer: {
    marginBottom: 20,
  },
  weeklyBreakupLabel: {
    fontSize: 10,
    fontWeight: "bold",
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
  },
  weeklyValue: {
    fontSize: 15,
  },
  totalLabel: {
    fontSize: 15,
    fontWeight: "500",
  },
  totalValue: {
    fontSize: 15,
    fontWeight: "500",
    color: Color.appDefaultColor,
  },
});
