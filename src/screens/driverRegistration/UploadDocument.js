import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Color, FontFamily, width } from "../../../GlobalStyles";
import ImageIcon from "../../../assets/img/imageIcon.svg"; // Your SVG image icon
import { LinearGradient } from "expo-linear-gradient";
import axios from "axios";
import { backend_Host } from "../../../config";
import ContentLoader from "../../components/ContentLoader";
import { Button } from "react-native-zaptric-ui";
import UploadPhoto from "../../components/UploadPhoto";
import { Route } from "../../../routes";
import { Divider, Modal, Portal } from "react-native-paper";
import ClearPicture from "../../../assets/img/ClearPicture.png";
import WithSunglasses from "../../../assets/img/withSunglasses.png";
import withGroup from "../../../assets/img/withGroup.png";
import { useSelector } from "react-redux";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
const UploadDocument = ({ navigation }) => {
  const [vehicleDocument, setVehicleDocument] = useState([]);
  const [driverDocument, setDriverDocument] = useState();
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false); // Modal state for UploadPhoto
  const driver = useSelector((state) => state.driver.data);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const hideProfileModal = () => setProfileModalVisible(false);
  const imgData = [
    { imgPath: ClearPicture, title: "Clear Picture", status: true },
    { imgPath: WithSunglasses, title: "Avoid Sunglasses", status: false },
    { imgPath: withGroup, title: "No Group picture", status: false },
  ];
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // Start loading

        // Fetch vehicle documents
        const vehicleResponse = await axios.get(
          `${backend_Host}/vehicle/vehicle-documents/${driver.id}`
        );

        setVehicleDocument(vehicleResponse.data);
        console.log(vehicleResponse.data);

        // Fetch driver documents
        const driverResponse = await axios.get(
          `${backend_Host}/driver/driver-documents/${driver.id}`
        );
        setDriverDocument(driverResponse.data);
      } catch (err) {
        console.error("Error fetching documents:", err);
      } finally {
        setLoading(false); // End loading
      }
    };

    fetchData();
  }, [visible, profileModalVisible]);
  const [type, setType] = useState("");
  const [profileModalVisible, setProfileModalVisible] = useState(false);
  const areAllDocumentsSubmitted = () => {
    // Combine both vehicle and driver documents
    const allDocuments = [...vehicleDocument, ...driverDocument];

    // Check if any document has status "NOT_SUBMITTED"
    return allDocuments.every((doc) => doc.approvalStatus !== "NOT_SUBMITTED");
  };
  const [selectedId, setSelectedId] = useState();
  const onPress = (id, title, type, statusText) => {
    // Open the modal for other documents
    if (statusText === "To be submitted" || statusText === "ERROR_OCCURED") {
      if (title == "Profile Picture" && type == "Driver") {
        setProfileModalVisible(true);
        setType(type);
        setSelectedId(id);
      } else if (title == "Aadhar Card" && type == "Driver") {
        navigation.navigate(Route.AADHAARCARD);
        setType(type);
      } else if (type == "Vehicle") {
        showModal();
        setSelectedId(id);
        setType(type);
      } else {
        showModal();
        setType(type);
        setSelectedId(id);
      }
    }
  };


  const DocumentCard = ({ title, status, id, type }) => {
    // Define color and icon based on the status
    let borderColor, backgroundColor, textColor, iconName, statusText;

    switch (status) {
      case "APPROVED":
        borderColor = "green";
        backgroundColor = "#E0F7E9"; // light green
        textColor = "green";
        iconName = "checkcircle";
        statusText = "Document Uploaded";
        break;
      case "UNDER_REVIEW":
        borderColor = "#EFD239";
        backgroundColor = "#E5E2A0"; // light orange
        textColor = "#EFD239";
        iconName = "clockcircle";
        statusText = "Document Under Review";
        break;
      case "ERROR_OCCURED":
        borderColor = "#FF5050";
        backgroundColor = "#FFB9AA"; // light red
        textColor = "#FF5050";
        iconName = "exclamationcircle";
        statusText = "Document not clear. Please re-upload.";
        break;
      case "NOT_SUBMITTED":
      default:
        borderColor = "#E5E5E5"; // light gray
        backgroundColor = "#ffff"; // light gray
        textColor = "#A9A9A9"; // gray
        iconName = "upload";
        statusText = "To be submitted";
        break;
    }

    return (
      <Pressable
        style={[
          styles.documentCard,
          {
            borderColor: borderColor,
            backgroundColor: backgroundColor,
          },
        ]}
        onPress={() => onPress(id, title, type, statusText)} // Open modal on card press
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <ImageIcon />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.documentTitle}>{title}</Text>
            <Text style={[styles.documentStatus, { color: textColor }]}>
              {statusText}
            </Text>
          </View>
        </View>
        <View
          style={[
            styles.statusIconContainer,
            { backgroundColor: backgroundColor },
          ]}
        >
          <AntDesign name={iconName} size={18} color={textColor} />
        </View>
      </Pressable>
    );
  };
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: Color.AlmostWhiteBackGround }}
    >
      {loading ? (
        <ContentLoader />
      ) : (
        <ScrollView
          contentContainerStyle={{ paddingHorizontal: 10, paddingTop: 5 }}
        >
          <Text style={styles.description}>
            Earnings are only a few steps away.
          </Text>
          <Text style={styles.sectionTitle}>Driver’s documents</Text>
          {driverDocument.map((item) => (
            <DocumentCard
              key={item.id}
              id={item.id}
              title={item.documentName}
              status={item.approvalStatus}
              type="Driver"
            />
          ))}

          <Text style={styles.mandatoryText}>
            * All these fields are compulsory
          </Text>

          <Text style={styles.sectionTitle}>Vehicle documents</Text>
          {vehicleDocument.map((item) => (
            <DocumentCard
              key={item.id}
              id={item.id}
              title={item.documentName}
              status={item.approvalStatus}
              type="Vehicle"
            />
          ))}

          <View style={styles.footer}>
            <Pressable
              style={{ alignItems: "center" }}
              onPress={() => setModalVisible(true)} // Show modal when pressed
            >
              <Text style={styles.cancelText}>Cancel & Reset</Text>
            </Pressable>
            <View style={{ marginBottom: 10 }}>
              <Button
                placeholder={"Next"}
                onPress={() => navigation.navigate(Route.VEHICLESELFINSPECION)}
                btnWidth={width * 0.9}
                // disabled={!areAllDocumentsSubmitted()}
              />
            </View>
          </View>
        </ScrollView>
      )}

      <LinearGradient
        colors={["transparent", "rgba(255,255,255,0.8)", "#fff"]}
        style={styles.bottomFade}
      />

      {/* Modal for Upload Photo */}
      <UploadPhoto
        visible={visible}
        hideModal={hideModal}
        id={selectedId}
        type={type}
      />
      <Portal>
        <Modal
          visible={profileModalVisible}
          onDismiss={hideProfileModal}
          contentContainerStyle={styles.modalContainer}
        >
          <Text style={styles.modalTitle}>Photograph Upload Instructions</Text>
          <View style={styles.optionStyle}>
            <View>
              <View style={{ flexDirection: "row" }}>
                <MaterialCommunityIcons
                  name="lightbulb-on"
                  size={18}
                  color={Color.appDefaultColor}
                />

                <Text style={styles.optionText}> Tips</Text>
              </View>
              <Text style={styles.optionSubText}>
                Make sure image is not blurred
              </Text>
            </View>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            {imgData.map((item, index) => (
              <View key={index} style={{ alignItems: "center" }}>
                <Image source={item.imgPath} style={styles.imageStyle} />
                <View style={styles.approvePosition}>
                  {item.status ? (
                    <AntDesign name="checkcircle" size={23} color="green" />
                  ) : (
                    <Entypo name="circle-with-cross" size={23} color="red" />
                  )}
                </View>

                <Text style={styles.imgText}>{item.title}</Text>
              </View>
            ))}
          </View>

          <View style={[styles.optionStyle, { marginLeft: 5 }]}>
            <FontAwesome
              name="hand-o-right"
              size={22}
              color={Color.appDefaultColor}
            />

            <Text style={[styles.optionSubText, { marginLeft: 5 }]}>
              Follow these tips to get verified faster
            </Text>
          </View>
          <Divider />
          <Pressable
            style={{ alignItems: "center", paddingTop: 10 }}
            onPress={() => {
              setProfileModalVisible(false), showModal();
            }}
          >
            <Text
              style={{
                color: Color.appDefaultColor,
                fontSize: 16,
                fontFamily: FontFamily.poppinsRegular,
              }}
            >
              OK, Got it!
            </Text>
          </Pressable>
        </Modal>
      </Portal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  description: {
    fontSize: 11,
    lineHeight: 16.5,
    color: Color.textGraycolor,
    fontFamily: FontFamily.poppinsRegular,
  },
  modalTitle: {
    fontSize: 14,
    fontWeight: "500",

    color: Color.colorGray,
    fontFamily: FontFamily.poppinsRegular,
  },
  modalContainer: {
    backgroundColor: "white",
    paddingHorizontal: 30,
    paddingVertical: 20,
    marginHorizontal: 20,
    borderRadius: 10,
    justifyContent: "center",
  },
  sectionTitle: {
    color: "#677093",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 21,
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
    color: Color.colorDarkslategray,
  },
  documentStatus: {
    fontSize: 10,
    lineHeight: 15,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsBold,
    color: "#677093",
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
    alignSelf: "center",
    width: width * 0.9,
    marginVertical: 10,
  },
  cancelText: {
    color: "#FF3333",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
  },
  bottomFade: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 30,
  },
  optionStyle: {
    flexDirection: "row",
    marginVertical: 10,
    alignItems: "center",
  },
  optionText: {
    color: Color.gray,
    fontSize: 14,
    fontFamily: FontFamily.poppinsRegular,
    marginLeft: 1,
  },
  optionSubText: {
    color: Color.gray,
    fontSize: 12,
    fontFamily: FontFamily.poppinsRegular,
    marginLeft: 25,
  },

  imageStyle: {
    height: 80,
    width: 80,
    borderRadius: 15,
    resizeMode: "contain",
  },
  imgText: {
    fontSize: 12,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 14,
    color: Color.gray,
    width: "60%",
    textAlign: "center",
  },
  approvePosition: {
    position: "relative",
    top: -12,
    left: 25,
    backgroundColor: "white",
    borderRadius: 25,
  },
  iconStyle: {
    alignItems: "center",
  },
});

export default UploadDocument;
