import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // For the back arrow icon
import { Color, FontFamily } from "../../../../GlobalStyles";

const DocumentUploadScreen = ({ navigation }) => {
  const documents = [
    { id: 1, title: "Bank passbook/Cheque" },
    { id: 2, title: "Driving License, Front & Back" },
    { id: 3, title: "PAN Card" },
    { id: 4, title: "Profile Photo" },
    { id: 5, title: "Aadhar card, Front & Back" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {documents.map((doc) => (
          <TouchableOpacity
            key={doc.id}
            style={styles.item}
            onPress={() => {
              /* Handle navigation */
            }}
          >
            <Text style={styles.itemText}>{doc.title}</Text>
            <Ionicons
              name="chevron-forward-outline"
              size={24}
              color="#3D6DFF"
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  scrollViewContent: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 16,
    marginVertical: 8,
    borderRadius: 10,
    shadowRadius: 4,
    elevation: 5,
    borderWidth: 1,
    borderColor: Color.borderColor,
    justifyContent: "space-between",
  },
  itemText: {
    fontSize: 15,
    color: "#595F75",
    lineHeight: 22.5,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsRegular,
  },
});

export default DocumentUploadScreen;
