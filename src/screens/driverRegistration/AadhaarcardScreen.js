import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Color, height, width } from "../../../GlobalStyles";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { Button } from "react-native-zaptric-ui";
import { backend_Host } from "../../../config";
import { useSelector } from "react-redux";
const AdhaarcardScreen = ({route}) => {
  const [frontImage, setFrontImage] = useState(null);
  const [backImage, setBackImage] = useState(null);
const documentId = route.params.id
console.log("docuemntId",documentId);
const driver =useSelector(state=>state.driver.data)
  // Function to pick an image from gallery or camera
  const pickImage = async (side) => {
    // Request permission to access media library and camera
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert(
        "Permission denied",
        "You need to grant permission to access the gallery."
      );
      return;
    }

    // Let user pick an image from the gallery or camera
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);

    if (!result.canceled) {
      if (side === "front") {
        setFrontImage(result.assets[0].uri);
      } else if (side === "back") {
        setBackImage(result.assets[0].uri);
      }
    }
  };

  // Function to upload both the document data and image
  const uploadDocumentAndImage = async () => {
    const formData = new FormData();

    // Append the document data (driverId and documentId)
    formData.append("driverId",driver.id);
    formData.append("documentId",documentId);

    // Append the image (file) to the formData
    if (frontImage) {
      formData.append("document", {
        uri: frontImage,
        name: "Aadhar-image.jpg", // You can customize the file name
        type: "image/jpeg", // Image MIME type
      });
    }
    console.log("form Data ", formData);

    try {
      const response = await fetch(
        `${backend_Host}/driver/${driver.id}/driver-document-upload/${documentId}`,
        {
          method: "PUT",
          body: formData, // The body should be FormData
          headers: {
            // DO NOT set 'Content-Type' here, let fetch handle it automatically
            Accept: "application/json", // Optional, depending on your backend setup
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to upload the document");
      }

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.log("Error occurred while uploading:", error.message);
    }
    // Make the API call to the backend to upload the document and image
  };
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/img/aadhaarCard.png")}
        style={{ width: width * 0.9, height: 200 }}
      />
      <View style={styles.uploadContainer}>
        <Text style={styles.label}>Adhaar Card</Text>

        {/* Front Side Upload */}
        <TouchableOpacity
          style={styles.uploadBox}
          onPress={() => pickImage("front")}
          activeOpacity={0.7}
        >
          {frontImage ? (
            <Image source={{ uri: frontImage }} style={styles.uploadedImage} />
          ) : (
            <>
              <Ionicons
                name="camera-outline"
                size={32}
                color={Color.appDefaultColor}
              />
              <Text style={styles.uploadText}>Upload front side</Text>
            </>
          )}
        </TouchableOpacity>

        {/* Back Side Upload */}
        <TouchableOpacity
          style={styles.uploadBox}
          onPress={() => pickImage("back")}
          activeOpacity={0.7}
        >
          {backImage ? (
            <Image source={{ uri: backImage }} style={styles.uploadedImage} />
          ) : (
            <>
              <Ionicons
                name="camera-outline"
                size={32}
                color={Color.appDefaultColor}
              />
              <Text style={styles.uploadText}>Upload back side</Text>
            </>
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.btnPosition}>
        <Button
          title="Done"
          btnWidth={width * 0.9}
          onPress={uploadDocumentAndImage}
        />
      </View>
    </View>
  );
};

export default AdhaarcardScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
  },
  imageContainer: {
    alignItems: "center",
    marginTop: 16,
  },
  adharImage: {
    width: 250,
    height: 150,
    resizeMode: "contain",
  },
  instructionsContainer: {
    marginTop: 24,
    paddingHorizontal: 8,
  },
  instruction: {
    fontSize: 14,
    color: "#333",
    marginBottom: 8,
    textAlign: "center",
  },
  uploadContainer: {
    marginTop: 24,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    color: Color.colorDarkgray,
    marginBottom: 16,
    textAlign: "center",
  },
  uploadBox: {
    height: height / 4.5,
    backgroundColor: Color.backGroundColor,
    borderRadius: 8,
    borderColor: Color.borderColor,
    borderWidth: 1.5,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    width: width * 0.8,
    borderStyle: "dashed",
  },
  uploadedImage: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  uploadText: {
    marginTop: 8,
    fontSize: 11,
    color: Color.gray,
  },
  btnPosition: {
    position: "absolute",
    bottom: 10,
  },
});
