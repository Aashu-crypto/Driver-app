import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Color } from "../../GlobalStyles";

const PhotoWithRating = ({img}) => {
  return (
    <View>
      <Image
        source={require(`../../assets/img/riderPic.png`)}  //change to uri once backend implemented
        style={styles.riderImage}
      />
      <View style={styles.ratingView}>
        <Text style={styles.rating}>⭐ 4.75</Text>
      </View>
    </View>
  );
};

export default PhotoWithRating;

const styles = StyleSheet.create({
  riderImage: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  ratingView: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",

    borderRadius: 4,
    padding: 2,
    borderWidth: 1,
    borderColor: Color.borderColor,
    zIndex: 10,
    width: "70%",
    alignSelf:'center',
    position:'relative',
    top:-10
  },
  rating: {
    color: "#595F75",
    fontSize: 8,
  },
});
