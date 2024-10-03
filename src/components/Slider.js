  import { StyleSheet, View, Text, Pressable } from "react-native";
  import React from "react";
  import { Color, FontFamily, width } from "../../GlobalStyles";
  import { LinearGradient } from "expo-linear-gradient";
  import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring,
  } from "react-native-reanimated";
  import { Gesture, GestureDetector } from "react-native-gesture-handler";
  import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import { Route } from "../../routes";
  const INITIAL_BOX_SIZE = 50;
  const SLIDER_WIDTH = width * 0.9 * 0.89 - 25;
  const SLIDER_BALL = 55;

  const Slider = () => {
    const isPressed = useSharedValue(false);
    const offsetX = useSharedValue(0);
    const navigation = useNavigation()

    const gesture = Gesture.Pan().onChange((event) => {
      const newOffset = offsetX.value + event.changeX;
      console.log("new", newOffset);
      console.log("event.changex", event.changeX);

      // Clamp the slider within the bounds of 0 and SLIDER_WIDTH
      if (newOffset < 0) {
        offsetX.value = 0;
      } else if (newOffset > SLIDER_WIDTH) {
        offsetX.value = SLIDER_WIDTH;
        console.log("Reached end");
        navigation.navigate(Route.OTPSTARTRIDE)
      } else {
        offsetX.value = newOffset;
      }
    });

    const animatedStyles = useAnimatedStyle(() => {
      return {
        transform: [{ translateX: offsetX.value }],
      };
    });

    return (
      <LinearGradient
        colors={[Color.appDefaultColor, Color.secondaryColor]}
        style={styles.container}
      >
        <GestureDetector gesture={gesture}>
          <Animated.View style={[styles.slider, animatedStyles]}>
            <AntDesign
              name="doubleright"
              size={24}
              color={Color.appDefaultColor}
            />
          </Animated.View>
        </GestureDetector>
        <Pressable style={styles.textWrapper} onPress={()=>{navigation.navigate(Route.OTPSTARTRIDE)}}>
          <Text style={styles.title}>Slide to start Ride</Text>
          <Text style={styles.subtitle}>{SLIDER_WIDTH}</Text>
        </Pressable>
      </LinearGradient>
    );
  };

  export default Slider;

  const styles = StyleSheet.create({
    container: {
      height: 60,
      width: width * 0.9,
      alignSelf: "center",
      borderRadius: 30,
      justifyContent: "center",

      marginVertical: 20,
      position: "relative",
    },
    slider: {
      height: SLIDER_BALL,
      width: SLIDER_BALL,
      backgroundColor: "#fff",
      borderRadius: 27.5,
      alignItems: "center",
      justifyContent: "center",
      elevation: 4, // Adds shadow for Android
      shadowColor: "#000", // Adds shadow for iOS
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      position: "absolute",
      left: 2,
    },
    textWrapper: {
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
    },
    title: {
      fontSize: 16,
      fontWeight: "400",
      color: "#fff",
      textAlign: "center",
      fontFamily: FontFamily.poppinsRegular,
      lineHeight: 24,
    },
    subtitle: {
      fontSize: 10,
      color: "#fff",
      textAlign: "center",
      marginTop: 5,
      fontFamily: FontFamily.poppinsRegular,
      fontWeight: "400",
      lineHeight: 15,
    },
  });
