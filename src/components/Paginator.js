import { StyleSheet, Text, View, Animated } from "react-native";
import React from "react";
import { width } from "../../GlobalStyles";



const Paginator=({ data, scrollX }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 64,
        flex: 1,
        justifyContent: "center",
     
      }}
    >
      {data.map((_, i) => {
        console.log(i);

        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: "clamp",
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.5, 1, 0.5],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            style={[styles.dot, { width: dotWidth, opacity }]}
            key={i}
          />
        );
      })}
    </View>
  );
};

export default Paginator;

const styles = StyleSheet.create({
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: "black",
    marginHorizontal: 8,
  },
});