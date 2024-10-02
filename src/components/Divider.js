import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Color } from "../../GlobalStyles";

const Divider = () => {
  const styles = StyleSheet.create({
    divider: {
      borderTopWidth: 0.5,

      width: "100%",
      height: 0,
      borderColor:Color.borderColor
    },
  });
  return <View style={styles.divider} />;
};

export default Divider;
