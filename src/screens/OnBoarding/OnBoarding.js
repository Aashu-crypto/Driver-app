import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Animated,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import OnBoarding1 from "../../../assets/img/onBoarding1.svg";
import OnBoarding2 from "../../../assets/img/OnBoarding2.svg";
import OnBoarding3 from "../../../assets/img/onBoarding3.svg";
import * as Svg from "react-native-svg";
import { Color, height, width } from "../../../GlobalStyles";
import Paginator from "../../components/Paginator";
import { CommonActions } from "@react-navigation/native";
import Button from "../../components/Button";
import { Route } from "../../../routes";
import { useNavigation } from "@react-navigation/native";
const OnBoarding = () => {
  const navigation = useNavigation();
  const onNext = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: Route.NUMBERVERFICATION,
      })
    );
  };
  const handlePress = () => {};
  const slidesRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const obj = [
    {
      title: "Register Vehicle",
      description:
        "Don't worry if you have trouble determining your goals, We can help you determine your goals and track your goals",
      svg: OnBoarding1,
    },
    {
      title: "Upload Documents",
      description:
        "Let’s keep burning, to achieve your goals, it hurts only temporarily if you give up now you will be in pain forever",
      svg: OnBoarding2,
    },
    {
      title: "Earn Money",
      description:
        "Let's start a healthy lifestyle with us, we can determine your diet every day. healthy eating is fun",
      svg: OnBoarding3,
    },
  ];
  const scrollX = useRef(new Animated.Value(0)).current;
  console.log("x", scrollX);

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    console.log(viewableItems);

    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const renderItem = ({ item }) => {
    return (
      <View style={{ flex: 1, width: width }}>
        <View style={styles.lowerView}>
          <Text style={styles.textTitle}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <item.svg width={width * 0.9} height={height / 2} />
        </View>
      </View>
    );
  };
  useEffect(() => {
    console.log(scrollX);
  }, [scrollX]);

  return (
    <SafeAreaView>
      <FlatList
        data={obj}
        horizontal
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        decelerationRate="fast"
        scrollEventThrottle={32}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
          }
        )}
      />
      <Paginator data={obj} scrollX={scrollX} />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <Button placeholder={"Next"} onPress={onNext} />
      </View>
    </SafeAreaView>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  lowerView: {
    padding: 10,
    margin: 20,
    marginTop: 30,
  },
  nextBtn: {
    position: "absolute",
    bottom: 20,
    right: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  textTitle: {
    fontSize: 30,
    fontFamily: "Poppins-Bold",
    color: Color.appDefaultColor,
    lineHeight: 45,
    textAlign: "center",
  },
  description: {
    fontFamily: "Poppins-Regular",
    maxWidth: width * 0.8,
    lineHeight: 24,
    textAlign: "center",
    fontSize: 16,
    color: Color.gray,
  },
});
