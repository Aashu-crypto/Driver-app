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
import { Color } from "../../../GlobalStyles";

export default function QuizScreen({ navigation }) {
  const [selectedOptions, setSelectedOptions] = useState({}); // Store selected options per question

  // Define unique options for each question
  const questions = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      options: [
        { id: "1-1", text: "Option 1" },
        { id: "1-2", text: "Option 2" },
        { id: "1-3", text: "Option 3" },
        { id: "1-4", text: "Option 4" },
      ],
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      options: [
        { id: "2-1", text: "Option 1" },
        { id: "2-2", text: "Option 2" },
        { id: "2-3", text: "Option 3" },
        { id: "2-4", text: "Option 4" },
      ],
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      options: [
        { id: "3-1", text: "Option 1" },
        { id: "3-2", text: "Option 2" },
        { id: "3-3", text: "Option 3" },
        { id: "3-4", text: "Option 4" },
      ],
    },
  ];

  const handleOptionSelect = (questionId, optionId) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [questionId]: optionId, // Store selected option's id for each question
    }));
  };

  const allQuestionsAnswered = Object.keys(selectedOptions).length === questions.length;

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Quiz</Text>
          <TouchableOpacity onPress={() => navigation.navigate(Route.APPLICATIONSUBMITTED)}>
            <Text style={styles.skip}>Skip</Text>
          </TouchableOpacity>
        </View>

        {questions.map((question) => (
          <View key={question.id} style={styles.questionContainer}>
            <Text style={styles.questionText}>
              {question.id}. {question.text}
            </Text>
            <View style={styles.optionsContainer}>
              {question.options.map((option) => (
                <TouchableOpacity
                  key={option.id}
                  style={[
                    styles.optionButton,
                    selectedOptions[question.id] === option.id && styles.optionButtonSelected,
                  ]}
                  onPress={() => handleOptionSelect(question.id, option.id)}
                >
                  <Text
                    style={[
                      styles.optionText,
                      selectedOptions[question.id] === option.id && styles.optionTextSelected,
                    ]}
                  >
                    {option.text}
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
          disabled={!allQuestionsAnswered} // Disable button if not all questions are answered
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#fff",
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
    color: Color.appDefaultColor,
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
    borderColor: Color.appDefaultColor,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    width: "48%", // Make sure two options fit per row
    alignItems: "center",
  },
  optionButtonSelected: {
    backgroundColor: Color.appDefaultColor,
  },
  optionText: {
    color: Color.appDefaultColor,
    fontSize: 14,
  },
  optionTextSelected: {
    color: "#fff",
  },
});
