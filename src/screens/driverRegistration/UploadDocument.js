import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // Make sure to install react-native-vector-icons
import HeaderComponent from "../../components/HeaderComponent";

const UploadDocument = () => {
  const [documents, setDocuments] = useState({
    profilePicture: { status: "approved", message: "Document Uploaded" },
    aadharCard: { status: "under_review", message: "Document Under Review" },
    panCard: {
      status: "failed",
      message:
        "Document is not clear. Please take a clear picture and upload again.",
    },
    cancelledCheques: { status: "pending", message: "To be submitted" },
    commercialDriversLicense: { status: "pending", message: "To be submitted" },
    proofOfAddress: { status: "pending", message: "To be submitted" },
    policeClearanceCertificate: {
      status: "pending",
      message: "To be submitted",
    },
    vehicleRegistration: { status: "pending", message: "To be submitted" },
    vehicleFitnessCertificate: {
      status: "pending",
      message: "To be submitted",
    },
    registrationCertificate: { status: "pending", message: "To be submitted" },
    nocLeaseAgreement: { status: "pending", message: "To be submitted" },
  });

  const getStatusStyle = (status) => {
    switch (status) {
      case "approved":
        return {
          borderColor: "green",
          icon: "check-circle",
          iconColor: "green",
        };
      case "under_review":
        return { borderColor: "yellow", icon: "clock-o", iconColor: "yellow" };
      case "failed":
        return {
          borderColor: "red",
          icon: "exclamation-circle",
          iconColor: "red",
        };
      default:
        return { borderColor: "#ccc", icon: "upload", iconColor: "#ccc" };
    }
  };

  const renderDocumentItem = (key, label, document) => {
    const statusStyle = getStatusStyle(document.status);

    return (
      <View
        key={key}
        style={[
          styles.documentContainer,
          { borderColor: statusStyle.borderColor },
        ]}
      >
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.message}>{document.message}</Text>
        <Icon name={statusStyle.icon} size={20} color={statusStyle.iconColor} />
      </View>
    );
  };

  const handleNext = () => {
    // Handle the next button press
    console.log("Next button pressed");
  };

  const handleReset = () => {
    // Handle the reset button press
    setDocuments((prevDocuments) => {
      const resetDocs = {};
      for (let key in prevDocuments) {
        resetDocs[key] = {
          ...prevDocuments[key],
          status: "pending",
          message: "To be submitted",
        };
      }
      return resetDocs;
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderComponent />
      <ScrollView style={styles.container}>
        <Text style={styles.heading}>Driver’s documents</Text>
        {renderDocumentItem(
          "profilePicture",
          "Profile Picture",
          documents.profilePicture
        )}
        {renderDocumentItem("aadharCard", "Aadhar Card", documents.aadharCard)}
        {renderDocumentItem("panCard", "Pan Card", documents.panCard)}
        {renderDocumentItem(
          "cancelledCheques",
          "Cancelled Cheques",
          documents.cancelledCheques
        )}
        {renderDocumentItem(
          "commercialDriversLicense",
          "Commercial Driver’s License",
          documents.commercialDriversLicense
        )}
        {renderDocumentItem(
          "proofOfAddress",
          "Proof of Address",
          documents.proofOfAddress
        )}
        {renderDocumentItem(
          "policeClearanceCertificate",
          "Police Clearance Certificate",
          documents.policeClearanceCertificate
        )}
        <Text style={styles.heading}>Vehicle documents</Text>
        {renderDocumentItem(
          "vehicleRegistration",
          "Vehicle Registration",
          documents.vehicleRegistration
        )}
        {renderDocumentItem(
          "vehicleFitnessCertificate",
          "Vehicle Fitness Certificate",
          documents.vehicleFitnessCertificate
        )}
        {renderDocumentItem(
          "registrationCertificate",
          "Registration Certificate",
          documents.registrationCertificate
        )}
        {renderDocumentItem(
          "nocLeaseAgreement",
          "NOC / Lease Agreement",
          documents.nocLeaseAgreement
        )}

        <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
          <Text style={styles.resetButtonText}>Cancel & reset</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  documentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: "#333",
  },
  message: {
    fontSize: 14,
    color: "#666",
  },
  resetButton: {
    backgroundColor: "#ff4d4d",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  resetButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  nextButton: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  nextButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default UploadDocument;
