import React from "react";
import { View, Platform, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const BottomGradient = () => {
  return (
    <View style={styles.container}>
      {Platform.OS === 'ios' && (
        <LinearGradient
          colors={["transparent", "rgba(255,255,255,0.8)", "#fff"]}
          style={styles.bottomFadeIOS}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        />
      )}

      {Platform.OS === 'android' && (
        <LinearGradient
          colors={["transparent", "rgba(255,255,255,0.8)", "#ccc"]}
          style={styles.bottomFadeAndroid}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
  bottomFadeIOS: {
    height: 60, // Increased height for iOS gradient
  },
  bottomFadeAndroid: {
    height: 30, // Default height for Android
  },
});

export default BottomGradient;
