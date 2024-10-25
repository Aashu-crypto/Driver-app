import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  FlatList,
} from "react-native";
import { Color, FontFamily, width } from "../../../GlobalStyles";
import HeaderComponent from "../../components/HeaderComponent";

import { Route } from "../../../routes";
import BottomGradient from "../../components/BottomGradient";
import { useSelector, useDispatch } from "react-redux";
import { vehicleInfo } from "../../Redux/Slice/VehicleRegistrationSlice";
import { Button } from "react-native-zaptric-ui";
import { backend_Host } from "../../../config";
import axios from "axios";
// Mapping enums to user-friendly text
const ratingLabels = {
  EXCELLENT: "Excellent",
  VERY_GOOD: "Very Good",
  GOOD: "Good",
};

const optionLabels = {
  YES: "Yes",
  NO: "No",
};

const OptionSelector = ({
  options,
  selectedOption,
  setSelectedOption,
  labelMap,
}) => {
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
        {labelMap[item] || item} {/* Display user-friendly label */}
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
  labelMap,
}) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.subHeader}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <OptionSelector
        options={options}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        labelMap={labelMap}
      />
    </View>
  );
};

export default function VehicleInspectionScreen({ navigation }) {
  const [vehicleBodyCondition, setVehicleBodyCondition] = useState(null);
  const [headlightsWorking, setHeadlightsWorking] = useState(null);
  const [tailLightsWorking, setTailLightsWorking] = useState(null);
  const [indicatorsWorking, setIndicatorsWorking] = useState(null);
  const [windowsCondition, setWindowsCondition] = useState(null);
  const [windowsFunctionality, setWindowsFunctionality] = useState(null);
  const [wipersWorking, setWipersWorking] = useState(null);
  const [treadDepth, setTreadDepth] = useState(null);
  const [tirePressure, setTirePressure] = useState(null);
  const [spareTireCondition, setSpareTireCondition] = useState(null);

  const dispatch = useDispatch();
  const vehicle = useSelector((state) => state.vehicle.data);
  const driver = useSelector((state) => state.driver.data);
  console.log(driver);

  console.log("vehicle info", vehicle);

  // Check if all fields are selected before enabling the button
  const isFormComplete = [
    vehicleBodyCondition,
    headlightsWorking,
    tailLightsWorking,
    indicatorsWorking,
    windowsCondition,
    windowsFunctionality,
    wipersWorking,
    treadDepth,
    tirePressure,
    spareTireCondition,
  ].every(Boolean); // Ensure all fields have values

  const onNext = async () => {
    if (isFormComplete) {
      // Step 1: Collect and dispatch vehicle info to the Redux store
      const vehicleData = {
        condition: vehicleBodyCondition,
        headLights: headlightsWorking,
        tailLights: tailLightsWorking,
        indicators: indicatorsWorking,
        windowCondition: windowsCondition,
        windowFunctionality: windowsFunctionality,
        wiperCondition: wipersWorking,
        tireTreadDepth: treadDepth,
        tirePressure: tirePressure,
        spareTireCondition: spareTireCondition,
        vehicleType: vehicle.vehicleType,
        vehicleNumber: vehicle.vehicleNumber,
      };

      // Dispatch to Redux store
     

      try {
        // Step 2: Make API call with the full vehicle data
        const response = await axios.post(
          `${backend_Host}/vehicle/registration/${driver.id}`, // Adjust the URL as per your backend requirements
          vehicleData
        );

        // Step 3: Check for successful response
        if (response.status === 200) {
          // Navigate to the next screen if the API call was successful
          dispatch(vehicleInfo(response.data));
          navigation.navigate(Route.UPLOADDOCUMENT);
        } else {
          Alert.alert(
            "Error",
            "Something went wrong with vehicle registration."
          );
        }
      } catch (error) {
        // Handle API error
        console.error("Vehicle registration failed:", error);
        Alert.alert(
          "Error",
          "Failed to register the vehicle. Please try again."
        );
      }
    } else {
      // Handle incomplete form case
      Alert.alert("Error", "Please complete the form before proceeding.");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Color.backGroundColor }}>
      <HeaderComponent title={"Vehicle Self-Inspection via App"} />
      <ScrollView style={styles.container}>
        <View style={{marginTop:10}}/>
        <Section
          title="1. Condition"
          description="Check for dents, scratches, or any damage."
          options={["EXCELLENT", "VERY_GOOD", "GOOD"]}
          selectedOption={vehicleBodyCondition}
          setSelectedOption={setVehicleBodyCondition}
          labelMap={ratingLabels}
        />

        <Text style={styles.sectionHeader}>Tell us about Lights?</Text>

        <Section
          title="1. Are Headlights working properly"
          description="Verify both low and high beams are functional."
          options={["YES", "NO"]}
          selectedOption={headlightsWorking}
          setSelectedOption={setHeadlightsWorking}
          labelMap={optionLabels}
        />

        <Section
          title="2. Are Tail Lights working properly"
          description="Check that tail lights, brake lights, and reverse lights are working."
          options={["YES", "NO"]}
          selectedOption={tailLightsWorking}
          setSelectedOption={setTailLightsWorking}
          labelMap={optionLabels}
        />

        <Section
          title="3. Are Indicators working properly"
          description="Ensure all turn signals and hazard lights are operational."
          options={["YES", "NO"]}
          selectedOption={indicatorsWorking}
          setSelectedOption={setIndicatorsWorking}
          labelMap={optionLabels}
        />

        <Text style={styles.sectionHeader}>
          Tell us about Windows and Windshield?
        </Text>

        <Section
          title="1. Condition"
          description="Inspect for cracks or chips"
          options={["EXCELLENT", "VERY_GOOD", "GOOD"]}
          selectedOption={windowsCondition}
          setSelectedOption={setWindowsCondition}
          labelMap={ratingLabels}
        />

        <Section
          title="2. Functionality"
          description="Ensure windows roll up and down smoothly"
          options={["YES", "NO"]}
          selectedOption={windowsFunctionality}
          setSelectedOption={setWindowsFunctionality}
          labelMap={optionLabels}
        />

        <Section
          title="3. Wipers are working?"
          description="Test windshield wipers for proper operation and check washer fluid levels"
          options={["YES", "NO"]}
          selectedOption={wipersWorking}
          setSelectedOption={setWipersWorking}
          labelMap={optionLabels}
        />

        <Text style={styles.sectionHeader}>Tires</Text>

        <Section
          title="1. Tread Depth"
          description="Ensure tires have adequate tread depth (at least 1.6 mm)"
          options={["8-9mm", "7-2mm", "1.6mm"]}
          selectedOption={treadDepth}
          setSelectedOption={setTreadDepth}
          labelMap={{ "8-9mm": "8-9mm", "7-2mm": "7-2mm", "1.6mm": "1.6mm" }} // no need to map these as they are already readable
        />

        <Section
          title="2. Pressure"
          description="Check tire pressure and inflate to the recommended level"
          options={["YES", "NO"]}
          selectedOption={tirePressure}
          setSelectedOption={setTirePressure}
          labelMap={optionLabels}
        />

        <Section
          title="3. Spare Tire condition?"
          description="Verify the spare tire is in good condition and properly inflated"
          options={["EXCELLENT", "VERY_GOOD", "GOOD"]}
          selectedOption={spareTireCondition}
          setSelectedOption={setSpareTireCondition}
          labelMap={ratingLabels}
        />
        <View style={{ marginBottom: 20 }}>
          <Button
            placeholder={"Next"}
            onPress={onNext}
            disabled={!isFormComplete} // Disable button if form is not complete
            btnWidth={width * 0.9}
          />
        </View>
      </ScrollView>
      <BottomGradient />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Color.backGroundColor,
  },
  sectionContainer: {
    backgroundColor: "#F4F4F4",
    borderRadius: 15,
    padding: 10,
    marginBottom:8
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
});
