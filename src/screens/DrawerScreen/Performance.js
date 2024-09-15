import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Color, FontFamily } from "../../../GlobalStyles";
import MultiColorProgressBar from "../../components/MultiColorProgressBar";

export default function PerformanceScreen() {
  const [activeTab, setActiveTab] = useState("Daily Rides");
  const [activeDate, setActiveDate] = useState("7-12 Jun");
  const [expanded, setExpanded] = useState(null); // to toggle FAQ

  const handleFAQToggle = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const renderFAQ = (index, question) => (
    <TouchableOpacity onPress={() => handleFAQToggle(index)} key={index}>
      <View style={styles.faqItem}>
        <Text style={styles.faqText}>{question}</Text>
        <AntDesign
          name={expanded === index ? "up" : "down"}
          size={18}
          color={Color.appDefaultColor}
        />
      </View>
      {expanded === index && (
        <Text style={styles.faqAnswer}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
      )}
      <View style={{ borderWidth: 0.5 }} />
    </TouchableOpacity>
  );

  const renderProgressBar = (progress, color) => (
    <View style={styles.progressBarBackground}>
      <View
        style={[
          styles.progressBarFill,
          { width: `${progress * 100}%`, backgroundColor: color },
        ]}
      />
    </View>
  );
  const [active, setActive] = useState(1);
  const [activeWeek, setActiveWeek] = useState(0);
  const [activeMonth, setActiveMonth] = useState(0);

  return (
    <ScrollView style={styles.container}>
      {/* Tab Navigation */}
      <View style={styles.tabContainer}>
        {["Daily Rides", "Rentals", "Shared"].map((item, index) => (
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

      {/* Acceptance Rate */}
      <View style={styles.metricContainer}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text style={styles.metricLabel}>Acceptance rate</Text>
            <Text style={styles.metricDetails}>65/98 accepted rides</Text>
          </View>

          <Text style={styles.metricValue}>64%</Text>
        </View>
        <MultiColorProgressBar progress={0.64} />

        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>Start accepting more rides</Text>
        </TouchableOpacity>
      </View>

      {/* Cancellation Rate */}
      <View style={styles.metricContainer}>
        <View>
          <View>
            <Text style={styles.metricLabel}>Cancellation rate</Text>
            <Text style={styles.metricDetails}>21/65 rides cancelled</Text>
          </View>
          <Text style={styles.metricValue}>82%</Text>
        </View>

        <MultiColorProgressBar progress={0.82} />

        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>Stop cancelling so many rides</Text>
        </TouchableOpacity>
      </View>

      {/* FAQ Section */}
      <View style={styles.faqContainer}>
        <Text style={styles.faqTitle}>FAQs</Text>
        {[
          "Lorem ipsum dolor sit amet...",
          "Consectetur adipiscing elit...",
          "Sed do eiusmod tempor...",
        ].map((faq, index) => renderFAQ(index, faq))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F8",
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 16,
  },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  activeTabButton: {
    backgroundColor: Color.appDefaultColor,
  },
  tabText: {
    fontSize: 16,
    color: "gray",
  },
  activeTabText: {
    fontSize: 16,
    color: "#FFF",
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  dateButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#D3D3D3",
  },
  activeDateButton: {
    backgroundColor: Color.appDefaultColor,
    borderColor: Color.appDefaultColor,
  },
  dateText: {
    fontSize: 14,
    color: "gray",
  },
  activeDateText: {
    fontSize: 14,
    color: "#FFF",
  },
  metricContainer: {
    backgroundColor: "#FFF",
    padding: 16,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  metricLabel: {
    fontSize: 14,
    color: Color.colorGray,
    fontWeight: "500",
    lineHeight: 21,
    fontFamily: FontFamily.poppinsRegular,
  },
  metricDetails: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: "400",
    fontFamily: FontFamily.poppinsRegular,
  },
  metricValue: {
    fontSize: 32,
    fontWeight: "600",
    color: "#F7A42E",
    textAlign: "right",
    lineHeight: 48,
    fontFamily: FontFamily.poppinsRegular,
  },

  actionButton: {
    marginTop: 10,
    backgroundColor: "#FFE5CC",
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#FFE3C2",
  },
  actionText: {
    color: "#F7A42E",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 21,
    fontFamily: FontFamily.poppinsRegular,
  },
  faqContainer: {
    marginBottom: 40,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
  },
  faqTitle: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 21,
    fontFamily: FontFamily.poppinsRegular,
    color: "#677093",
  },
  faqItem: {
    backgroundColor: "#FFF",

    borderRadius: 10,
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  faqText: {
    fontSize: 12,
    fontWeight: "400",
    lineHeight: 18,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorGray,
  },
  faqAnswer: {
    padding: 16,
    backgroundColor: "#F9F9F9",
    borderRadius: 10,
    color: "#7B7B7B",
    fontSize: 14,
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
  progressBar: {
    height: 10,
    width: "100%",
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
    flexDirection: "row",
    overflow: "hidden",
  },
  progressSegment: {
    height: "100%",
  },
});
