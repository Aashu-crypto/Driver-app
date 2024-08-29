import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";
import Button from "../../components/Button";
import { Route } from "../../../routes";

export default function QuizScreen({ navigation }) {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [progress, setProgress] = useState(0);

  const questions = [
    { id: 1, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?" },
    { id: 2, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?" },
    { id: 3, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?" },
  ];

  const options = ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"];

  const handleOptionSelect = (questionId, option) => {
    if (!selectedOptions[questionId]) {
      setProgress(progress + 1 / questions.length); // Increase progress
    }
    setSelectedOptions((prevState) => ({ ...prevState, [questionId]: option }));
  };

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Quiz</Text>
          <Text style={styles.skip}>Skip</Text>
        </View>

        <View style={styles.progressBarContainer}>
          <View style={[styles.progressBar, { width: `${progress * 100}%` }]} />
        </View>

        {questions.map((question) => (
          <View key={question.id} style={styles.questionContainer}>
            <Text style={styles.questionText}>
              {question.id}. {question.text}
            </Text>
            <View style={styles.optionsContainer}>
              {options.map((option, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.optionButton,
                    selectedOptions[question.id] === option &&
                      styles.optionButtonSelected,
                  ]}
                  onPress={() => handleOptionSelect(question.id, option)}
                >
                  <Text
                    style={[
                      styles.optionText,
                      selectedOptions[question.id] === option &&
                        styles.optionTextSelected,
                    ]}
                  >
                    {option}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}

        <Button
          placeholder={"Next"}
          onPress={() => {
            navigation.navigate(Route.APPLICATIONSUBMITTED);
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#F0F4FA",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  skip: {
    fontSize: 16,
    color: "#1976D2",
  },
  progressBarContainer: {
    height: 4,
    backgroundColor: "#E0E0E0",
    borderRadius: 2,
    marginBottom: 20,
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#1976D2",
    borderRadius: 2,
  },
  questionContainer: {
    marginBottom: 20,
  },
  questionText: {
    fontSize: 16,
    marginBottom: 10,
  },
  optionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  optionButton: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#1976D2",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    width: "48%",
    alignItems: "center",
  },
  optionButtonSelected: {
    backgroundColor: "#1976D2",
  },
  optionText: {
    color: "#1976D2",
    fontSize: 14,
  },
  optionTextSelected: {
    color: "#fff",
  },
  doneButton: {
    backgroundColor: "#1976D2",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  doneButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
