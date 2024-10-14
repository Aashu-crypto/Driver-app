import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  FlatList,
  Platform,
} from "react-native";
import { Color, FontFamily } from "../../../GlobalStyles";
import HeaderComponent from "../../components/HeaderComponent";
import Button from "../../components/Button";
import { Route } from "../../../routes";
import { LinearGradient } from "expo-linear-gradient";
import BottomGradient from "../../components/BottomGradient";
const OptionSelector = ({ options, selectedOption, setSelectedOption }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      key={item}
      style={[
        styles.optionButton,
        selectedOption === item && styles.selectedOption,
      ]}
      onPress={() => setSelectedOption(item)}
    >
      <Text
        style={[
          styles.optionText,
          selectedOption === item && styles.selectedOptionText,
        ]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={options}
      horizontal={true}
      renderItem={renderItem}
      keyExtractor={(item) => item}
      contentContainerStyle={styles.optionsContainer}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const Section = ({
  title,
  description,
  options,
  selectedOption,
  setSelectedOption,
}) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.subHeader}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <OptionSelector
        options={options}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
    </View>
  );
};

export default function VehicleInspectionScreen({ navigation }) {
  const [vehicleBodyCondition, setVehicleBodyCondition] = useState("Very Good");
  const [headlightsWorking, setHeadlightsWorking] = useState("No");
  const [tailLightsWorking, setTailLightsWorking] = useState("No");
  const [indicatorsWorking, setIndicatorsWorking] = useState("No");
  const [windowsCondition, setWindowsCondition] = useState("Very Good");
  const [windowsFunctionality, setWindowsFunctionality] = useState("No");
  const [wipersWorking, setWipersWorking] = useState("No");
  const [treadDepth, setTreadDepth] = useState("7-2mm");
  const [tirePressure, setTirePressure] = useState("No");
  const [spareTireCondition, setSpareTireCondition] = useState("Very Good");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderComponent title={"Vehicle Self-Inspection via App"} />
      <ScrollView style={styles.container}>
        <Section
          title="1. Condition"
          description="Check for dents, scratches, or any damage."
          options={["Excellent", "Very Good", "Good"]}
          selectedOption={vehicleBodyCondition}
          setSelectedOption={setVehicleBodyCondition}
        />

        <Text style={styles.sectionHeader}>Tell us about Lights?</Text>

        <Section
          title="1. Are Headlights working properly"
          description="Verify both low and high beams are functional."
          options={["Yes", "No"]}
          selectedOption={headlightsWorking}
          setSelectedOption={setHeadlightsWorking}
        />

        <Section
          title="2. Are Tail Lights working properly"
          description="Check that tail lights, brake lights, and reverse lights are working."
          options={["Yes", "No"]}
          selectedOption={tailLightsWorking}
          setSelectedOption={setTailLightsWorking}
        />

        <Section
          title="3. Are Indicators working properly"
          description="Ensure all turn signals and hazard lights are operational."
          options={["Yes", "No"]}
          selectedOption={indicatorsWorking}
          setSelectedOption={setIndicatorsWorking}
        />

        <Text style={styles.sectionHeader}>
          Tell us about Windows and Windshield?
        </Text>

        <Section
          title="1. Condition"
          description="Inspect for cracks or chips"
          options={["Excellent", "Very Good", "Good"]}
          selectedOption={windowsCondition}
          setSelectedOption={setWindowsCondition}
        />

        <Section
          title="2. Functionality"
          description="Ensure windows roll up and down smoothly"
          options={["Yes", "No"]}
          selectedOption={windowsFunctionality}
          setSelectedOption={setWindowsFunctionality}
        />

        <Section
          title="3. Wipers are working?"
          description="Test windshield wipers for proper operation and check washer fluid levels"
          options={["Yes", "No"]}
          selectedOption={wipersWorking}
          setSelectedOption={setWipersWorking}
        />

        <Text style={styles.sectionHeader}>Tires</Text>

        <Section
          title="1. Tread Depth"
          description="Ensure tires have adequate tread depth (at least 1.6 mm)"
          options={["8-9mm", "7-2mm", "1.6mm"]}
          selectedOption={treadDepth}
          setSelectedOption={setTreadDepth}
        />

        <Section
          title="2. Pressure"
          description="Check tire pressure and inflate to the recommended level"
          options={["Yes", "No"]}
          selectedOption={tirePressure}
          setSelectedOption={setTirePressure}
        />

        <Section
          title="3. Spare Tire condition?"
          description="Verify the spare tire is in good condition and properly inflated"
          options={["Excellent", "Very Good", "Good"]}
          selectedOption={spareTireCondition}
          setSelectedOption={setSpareTireCondition}
        />
<View style={{marginBottom:20}}>
<Button
          placeholder={"Next"}
          onPress={() => {
            navigation.navigate(Route.UPLOADDOCUMENT);
          }}
        />
</View>
       
      </ScrollView>
<BottomGradient/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    color: Color.appDefaultColor,
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsRegular,
    marginVertical: 10,
    color: "#677093",
    lineHeight: 24,
  },
  subHeader: {
    fontSize: 14,

    color: Color.gray,
    lineHeight: 21,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsRegular,
  },
  description: {
    fontSize: 12,
    color: "#858DAB",
    marginBottom: 10,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 18,
  },
  optionsContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  optionButton: {
    borderWidth: 1,
    borderColor: Color.appDefaultColor,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 10,
  },
  selectedOption: {
    backgroundColor: Color.appDefaultColor,
  },
  optionText: {
    fontSize: 14,
    color: Color.appDefaultColor,
  },
  selectedOptionText: {
    color: "#fff",
  },
  nextButton: {
    backgroundColor: Color.appDefaultColor,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  nextButtonText: {
    color: "#fff",
    fontSize: 18,
  },
  bottomFade: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 30,
  },
  bottomFadeIOS: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 60, // Increased height for iOS gradient to make it more visible
  },
  bottomFadeAndroid: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 30, // You can adjust the height if needed
  },
});
