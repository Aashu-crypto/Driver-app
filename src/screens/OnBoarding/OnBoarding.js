import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Animated,
  StatusBar,
  Platform,
  Pressable,
} from "react-native";
import React, { useRef, useState } from "react";
import OnBoarding1 from "../../../assets/img/onBoarding1.svg";
import OnBoarding2 from "../../../assets/img/OnBoarding2.svg";
import OnBoarding3 from "../../../assets/img/onBoarding3.svg";
import { Color, FontFamily, height, width } from "../../../GlobalStyles";
import Paginator from "../../components/Paginator";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { Route } from "../../../routes";
import { CommonActions } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const OnBoarding = () => {
  const navigation = useNavigation();
  const slidesRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useTranslation();
  const obj = [
    {
      title: "Register Vehicle",
      description: "We help you determine and track your goals efficiently.",
      svg: OnBoarding1,
    },
    {
      title: "Upload Documents",
      description: "Achieve your goals with ease and start tracking today!",
      svg: OnBoarding2,
    },
    {
      title: "Earn Money",
      description: "Start a healthy lifestyle and earn through us.",
      svg: OnBoarding3,
    },
  ];

  const scrollX = useRef(new Animated.Value(0)).current;

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const renderItem = ({ item }) => (
    <View style={[styles.slide, { width: width }]}>
      <Text style={styles.textTitle}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <View style={{ alignItems: "center" }}>
        <item.svg width={width * 0.8} height={height / 2.5} />
      </View>
    </View>
  );

  // Handle the "Next" button click
  const onNext = () => {
    if (currentIndex < obj.length - 1) {
      // Scroll to the next index
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      // If it's the last slide, navigate to the next screen
      navigation.dispatch(
        CommonActions.navigate({
          name: Route.NUMBERVERFICATION,
        })
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={Platform.OS === "android" ? "light-content" : "dark-content"}
      />
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
          { useNativeDriver: false }
        )}
      />
      <Paginator data={obj} scrollX={scrollX} />
      <Pressable onPress={()=>{i18next.changeLanguage('hi')}}>
        <Text>Change to Hindi</Text>
      </Pressable>
      <View style={styles.buttonContainer}>
        <Button placeholder={t("next")} onPress={onNext} />
      </View>
    </SafeAreaView>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  textTitle: {
    fontSize: Platform.OS === "android" ? 28 : 30,
    fontFamily: FontFamily.poppins,
    color: Color.appDefaultColor,
    lineHeight: 45,
    textAlign: "center",
    marginBottom: 10,
    fontWeight: "500",
  },
  description: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: Platform.OS === "android" ? 14 : 16,
    color: Color.gray,
    textAlign: "center",
    maxWidth: width * 0.8,
    lineHeight: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
  },
});
