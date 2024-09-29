import React, { useRef, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Animated,
  StatusBar,
  Platform,
} from "react-native";
import OnBoarding1 from "../../../assets/img/onBoarding1.svg";
import OnBoarding2 from "../../../assets/img/OnBoarding2.svg";
import OnBoarding3 from "../../../assets/img/onBoarding3.svg";
import { Color, FontFamily, height, width } from "../../../GlobalStyles";
import Paginator from "../../components/Paginator";
import { Dropdown } from "react-native-element-dropdown";
import Button from "../../components/Button";
import { useNavigation, CommonActions } from "@react-navigation/native";
import { Route } from "../../../routes";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import Entypo from "@expo/vector-icons/Entypo";

const OnBoarding = () => {
  const navigation = useNavigation();
  const slidesRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useTranslation();

  const slidesData = [
    {
      title: t("onboarding.register_vehicle"),
      description: t("onboarding.register_vehicle_desc"),
      svg: OnBoarding1,
    },
    {
      title: t("onboarding.upload_documents"),
      description: t("onboarding.upload_documents_desc"),
      svg: OnBoarding2,
    },
    {
      title: t("onboarding.earn_money"),
      description: t("onboarding.earn_money_desc"),
      svg: OnBoarding3,
    },
  ];

  const [dropdownValue, setDropdownValue] = useState(null);
  const [isDropdownFocused, setIsDropdownFocused] = useState(false);
  const scrollX = useRef(new Animated.Value(0)).current;

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0]?.index ?? 0);
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

  const languageData = [
    { label: "English", value: "en" },
    { label: "हिंदी", value: "hi" },
  ];

  const onNext = () => {
    if (currentIndex < slidesData.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      navigation.dispatch(
        CommonActions.navigate({
          name: Route.NUMBERVERFICATION,
        })
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Dropdown
        style={[
          styles.dropdown,
          isDropdownFocused && { borderColor: Color.appDefaultColor },
        ]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        iconStyle={styles.iconStyle}
        itemTextStyle={{ fontSize: 8 }}
        data={languageData}
        maxHeight={200}
        labelField="label"
        valueField="value"
        placeholder={!isDropdownFocused ? "Select Language" : "..."}
        value={dropdownValue}
        onFocus={() => setIsDropdownFocused(true)}
        onBlur={() => setIsDropdownFocused(false)}
        onChange={(item) => {
          setDropdownValue(item.value);
          i18next.changeLanguage(item.value);
          setIsDropdownFocused(false);
        }}
        renderLeftIcon={() => (
          <Entypo name="language" size={10} color={Color.appDefaultColor} />
        )}
      />
      <FlatList
        data={slidesData}
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
      <Paginator data={slidesData} scrollX={scrollX} />
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
    fontSize: 28,
    fontFamily: FontFamily.poppins,
    color: Color.appDefaultColor,
    lineHeight: 45,
    textAlign: "center",
    marginBottom: 10,
    fontWeight: "500",
  },
  description: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: 14,
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
  dropdown: {
    height: 25,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    width: width / 4.5,
    alignSelf: "flex-end",
    marginRight: 20,
    marginTop: 5,
  },
  placeholderStyle: {
    fontSize: 8,
    alignSelf: "center",
    marginLeft: 5,
  },
  selectedTextStyle: {
    fontSize: 8,
    marginLeft: 5,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});
