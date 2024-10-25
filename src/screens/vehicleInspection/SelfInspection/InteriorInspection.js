import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState, useEffect } from "react";
import { Color, height, width } from "../../../../GlobalStyles";
import { Ionicons } from "@expo/vector-icons";

import { backend_Host } from "../../../../config";
import * as ImagePicker from "expo-image-picker";
import ContentLoader from "../../../components/ContentLoader";
import { useSelector } from "react-redux";
const InteriorInspection = () => {
  const [vehiclePhotoDetails, setVehiclePhotoDetails] = useState([]); // For vehicle photo details from the API
  const [uploadedImages, setUploadedImages] = useState([]);
  const [Loading, setLoading] = useState(true);
  const vehicle = useSelector((state) => state.vehicle.data);
  useEffect(() => {
    const fetchVehiclePhotos = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${backend_Host}/vehicle/vehicle-photo/${vehicle.id}?photoType=INTERIOR`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch vehicle photos");
        }

        const data = await response.json();
        console.log("Vehicle Photos:", data);
        setVehiclePhotoDetails(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching vehicle photos:", error);
      }
    };

    fetchVehiclePhotos();
  }, [uploadedImages]);

  const pickImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert("Permission denied", "You need to grant gallery access.");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      return result.assets[0].uri; // Return image URI
    }
  };
  const handleSubmit = async ( selectedImageUri) => {
    const formData = new FormData();
    formData.append("id", vehiclePhotoDetails[0].id);
    const randomFileName = `image_${Math.floor(Math.random() * 1000000)}.jpeg`;
    formData.append("document", {
      uri: selectedImageUri, // The image URI from the picker
      name: randomFileName, // A unique name for the image file
      type: "image/jpeg", // The image MIME type
    });

    try {
      const response = await fetch(
        `${backend_Host}/vehicle/vehicle-photo-upload`,
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        const result = await response.json();

      

        console.log("Upload successful:", result);

        setUploadedImages((prev) => [...prev, vehiclePhotoDetails[0].id]); // Update uploaded images state

        Alert.alert("Success", "Image uploaded successfully.");
      } else {
        const errorResponse = await response.json();
        Alert.alert(
          "Error",
          errorResponse.error || "Failed to upload the image."
        );
      }
    } catch (error) {
      console.log(error);

      Alert.alert("Error", "An error occurred while uploading the image.");
    }
  };
  const [images, setImages] = useState({});
  const handleSelectImage = async () => {
    const pickedImageUri = await pickImage(); // Call the image picker

    if (pickedImageUri) {
      setImages(pickedImageUri); // Store image by ID

      console.log("Image picked: ", pickedImageUri);

      await handleSubmit( pickedImageUri); // Automatically upload the image after picking
    }
  };
  return (
    <View style={styles.container}>
      {!Loading ? (
        <TouchableOpacity
          style={styles.uploadBox}
          onPress={() => {
            if (vehiclePhotoDetails[0].uploadStatus) {
              Alert.alert("Photo has already been Uploded");
            } else {
              handleSelectImage();
            }
          }}
          // disabled={vehiclePhotoDetails[0].uploadStatus}
        >
          <Ionicons
            name="camera-outline"
            size={32}
            color={Color.appDefaultColor}
          />
          <Text style={styles.uploadText}>Upload Interior Photo</Text>
        </TouchableOpacity>
      ) : (
        <ContentLoader />
      )}
    </View>
  );
};

export default InteriorInspection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.AlmostWhiteBackGround,
    alignItems: "center",
    justifyContent: "center",
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
});
