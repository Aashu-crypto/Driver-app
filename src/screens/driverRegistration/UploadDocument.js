import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Modal,
  TouchableOpacity,
  ScrollView
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import HeaderComponent from "../../components/HeaderComponent";
import { Color, FontFamily, width } from "../../../GlobalStyles";
import ImageIcon from "../../../assets/img/imageIcon.svg"; // Your SVG image icon
import Button from "../../components/Button";
import { Route } from "../../../routes";

const UploadDocument = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false); // Modal state

  // Reusable component for document cards
  const DocumentCard = ({ title, status, statusColor, onPress }) => (
    <Pressable
      style={[styles.documentCard, { borderColor: statusColor }]}
      onPress={onPress}
    >
      <View style={{ flexDirection: "row" }}>
        <ImageIcon />
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.documentTitle}>{title}</Text>
          <Text style={[styles.documentStatus, { color: statusColor }]}>
            {status}
          </Text>
        </View>
      </View>
      <View
        style={[
          styles.statusIconContainer,
          { backgroundColor: statusColor === "green" ? "#E5FFE5" : "#E5E5E5" },
        ]}
      >
        <AntDesign
          name={statusColor === "green" ? "checkcircle" : "upload"}
          size={24}
          color={statusColor === "green" ? "green" : "black"}
        />
      </View>
    </Pressable>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <HeaderComponent title="Upload Documentation" />
      <ScrollView contentContainerStyle={{ paddingHorizontal: 10 }}>
        <Text style={styles.description}>
          Earnings are only a few steps away.
        </Text>
        <Text style={styles.sectionTitle}>Driver’s documents</Text>

        {/* Document Cards */}
        <DocumentCard
          title="Profile Picture"
          status="Document Uploaded"
          statusColor="green"
          onPress={() => {}}
        />
        <DocumentCard
          title="Aadhar Card"
          status="Document Under Review"
          statusColor="orange"
          onPress={() => {}}
        />
        <DocumentCard
          title="Pan Card"
          status="Document is not clear"
          statusColor="red"
          onPress={() => {}}
        />
        <DocumentCard
          title="Cancelled Cheques"
          status="To be submitted"
          statusColor="gray"
          onPress={() => {}}
        />
        <DocumentCard
          title="Commercial Driver’s License"
          status="To be submitted"
          statusColor="gray"
          onPress={() => {}}
        />
        <DocumentCard
          title="Proof of Address"
          status="To be submitted"
          statusColor="gray"
          onPress={() => {}}
        />
        <DocumentCard
          title="Police Clearance Certificate"
          status="To be submitted"
          statusColor="gray"
          onPress={() => {}}
        />

        <Text style={styles.mandatoryText}>
          * All these fields are compulsory
        </Text>

        <Text style={styles.sectionTitle}>Vehicle documents</Text>

        <DocumentCard
          title="Vehicle Registration"
          status="To be submitted"
          statusColor="gray"
          onPress={() => {}}
        />
        <DocumentCard
          title="Vehicle Fitness Certificate"
          status="Lorem Ipsum is simply dummy text of the..."
          statusColor="gray"
          onPress={() => {}}
        />
        <DocumentCard
          title="Registration Certificate"
          status="Lorem Ipsum is simply dummy text of the..."
          statusColor="gray"
          onPress={() => {}}
        />
        <DocumentCard
          title="NOC / Lease Agreement"
          status="(If car is not on driver’s name)"
          statusColor="gray"
          onPress={() => {}}
        />
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <Pressable
          style={{ alignItems: "center" }}
          onPress={() => setModalVisible(true)} // Show modal when pressed
        >
          <Text style={styles.cancelText}>Cancel & Reset</Text>
        </Pressable>
        <Button
          placeholder={"Next"}
          onPress={() => navigation.navigate(Route.VEHICLESELFINSPECION)}
        />
      </View>

      {/* Confirmation Modal */}
      <Modal
        transparent={true}
        visible={isModalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <AntDesign name="exclamationcircle" size={32} color="red" />
            <Text style={styles.modalTitle}>Are you sure?</Text>
            <Text style={styles.modalText}>
              By continuing, all the documents and information you’ve entered
              will be deleted.
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>Go back</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.modalButtonPrimary]}
                onPress={() => {
                  // Handle cancel application logic here
                  setModalVisible(false);
                  navigation.goBack();
                }}
              >
                <Text style={styles.modalButtonPrimaryText}>
                  Cancel application
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  description: {
    fontSize: 11,
    lineHeight: 16.5,
    color: Color.textGraycolor,
    fontFamily: FontFamily.poppinsRegular,
    marginBottom: 10,
  },
  sectionTitle: {
    color: "#4A4A4A",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
    fontFamily: FontFamily.poppinsRegular,
    marginVertical: 10,
  },
  documentCard: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: "#fff",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  documentTitle: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsRegular,
  },
  documentStatus: {
    fontSize: 10,
    lineHeight: 15,
    fontWeight: "400",
  },
  statusIconContainer: {
    padding: 8,
    borderRadius: 20,
    justifyContent: "flex-end",
  },
  mandatoryText: {
    color: "red",
    fontSize: 12,
    marginTop: 10,
    fontWeight: "400",
    fontFamily: FontFamily.poppinsRegular,
  },
  footer: {
    position: "absolute",
    bottom: 10,
    alignSelf: "center",
    width: width * 0.9,
  },
  cancelText: {
    color: "red",
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 20,
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    width: width * 0.8,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  modalText: {
    fontSize: 14,
    color: "#4A4A4A",
    textAlign: "center",
    marginVertical: 15,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  modalButton: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#ddd",
    marginHorizontal: 5,
  },
  modalButtonText: {
    color: "#4A4A4A",
    fontWeight: "500",
  },
  modalButtonPrimary: {
    backgroundColor: Color.appDefaultColor,
  },
  modalButtonPrimaryText: {
    color: "#fff",
    fontWeight: "500",
  },
});

export default UploadDocument;
