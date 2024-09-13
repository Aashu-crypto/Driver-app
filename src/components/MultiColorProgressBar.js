import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Color, width } from "../../GlobalStyles"; // Assuming width is defined in GlobalStyles

const MultiColorProgressBar = ({ progress }) => {
  const progressBarWidth = width * 0.85; // Fixed width for the progress bar

  // Ensure progress is between 0 and 1
  const validProgress = Math.min(Math.max(progress, 0), 1);

  // Calculate the left position of the vertical marker based on the progress
  const markerPosition = validProgress * progressBarWidth - 12; // Offset to center the marker (width of marker/2)

  return (
    <View style={{ flex: 1 }}>
      {/* Progress Bar with Segments */}
      <View style={styles.progressBar}>
        <View
          style={[
            styles.progressSegment,
            { width: `${50}%`, backgroundColor: "red" },
          ]}
        />
        <View
          style={[
            styles.progressSegment,
            { width: `${30}%`, backgroundColor: "orange" },
          ]}
        />
        <View
          style={[
            styles.progressSegment,
            { width: `${20}%`, backgroundColor: "green" },
          ]}
        />

        {/* Moving Vertical Marker */}
        <View
          style={[
            styles.marker,
            { left: markerPosition }, // Dynamic left position
          ]}
        />
      </View>

      {/* Labels for Progress Bar */}
      <View style={styles.labelsContainer}>
        {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((item) => {
          return (
            <View key={item}>
              <Text style={styles.progressBarText}>{item}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default MultiColorProgressBar;

const styles = StyleSheet.create({
  progressBar: {
    height: 10,
    width: width * 0.85,
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
    flexDirection: "row",
    overflow: "hidden",
    position: "relative", // Relative positioning for the marker
  },
  progressSegment: {
    height: "100%",
  },
  marker: {
    height: 14,
    backgroundColor: "#D9D9D9",
    width: 8,
    position: "absolute",
    top: -2, // Adjust to center vertically
    zIndex: 10,
    borderRadius: 5,
  },
  labelsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  progressBarText: {
    color: Color.gray,
    fontSize: 11,
    fontWeight: "500",
    lineHeight: 16.5,
  },
});
