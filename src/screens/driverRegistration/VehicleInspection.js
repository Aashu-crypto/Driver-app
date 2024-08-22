import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Color } from "../../../GlobalStyles";

const OptionSelector = ({ options, selectedOption, setSelectedOption }) => {
  return (
    <View style={styles.optionsContainer}>
      {options.map((option) => (
        <TouchableOpacity
          key={option}
          style={[
            styles.optionButton,
            selectedOption === option && styles.selectedOption,
          ]}
          onPress={() => setSelectedOption(option)}
        >
          <Text
            style={[
              styles.optionText,
              selectedOption === option && styles.selectedOptionText,
            ]}
          >
            {option}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const Section = ({
  title,
  subtitle,
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

export default function VehicleInspectionScreen() {
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
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Vehicle Self-Inspection via App</Text>

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

        <TouchableOpacity style={styles.nextButton}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#f0f4fa",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    color: Color.appDefaultColor,
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
    color: Color.appDefaultColor
  },
  subHeader: {
    fontSize: 16,
    marginVertical: 5,
  },
  description: {
    fontSize: 14,
    color: "#555",
    marginBottom: 10,
  },
  optionsContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  optionButton: {
    borderWidth: 2,
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
});
