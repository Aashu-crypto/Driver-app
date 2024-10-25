import {
  View,
  Text,

  StyleSheet,
  SafeAreaView,
  Alert,
  BackHandler,
} from "react-native";
import React from "react";
import * as ImagePicker from "expo-image-picker";
const UploadVehiclePhoto = ({ type }) => {
  const [uploadedImages, setUploadedImages] = useState([]);
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
  useEffect(() => {
    const fetchVehiclePhotos = async () => {
      try {
        const response = await fetch(
          `${backend_Host}/vehicle/vehicle-photo/1?photoType=EXTERIOR`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch vehicle photos");
        }

        const data = await response.json();
        console.log("Vehicle Photos:", data);
        setVehiclePhotoDetails(data);
      } catch (error) {
        console.error("Error fetching vehicle photos:", error);
      }
    };

    fetchVehiclePhotos();
  }, [uploadedImages]);
  const handleSelectImage = async (id) => {
    const pickedImageUri = await pickImage(); // Call the image picker

    if (pickedImageUri) {
      setImages((prev) => ({ ...prev, [id]: pickedImageUri })); // Store image by ID
      setSelectedImageId(id);
      console.log("Image picked: ", pickedImageUri);

      await handleSubmit(id, pickedImageUri); // Automatically upload the image after picking
    }
  };

  // Function to handle the submit action and upload the photo to the backend
  const handleSubmit = async (id, selectedImageUri) => {
    const selectedOption = mergedPhotos.find((option) => option.id === id);
    const vehicleId = 1; // Replace with actual vehicle ID

    const formData = new FormData();
    formData.append("id", id);

    formData.append("document", {
      uri: selectedImageUri, // The image URI from the picker
      name: `photo_${selectedOption.label}.jpg`, // A unique name for the image file
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

        setUploadedImages((prev) => [...prev, id]); // Update uploaded images state
        Alert.alert("Success", "Image uploaded successfully.");
      } else {
        const errorResponse = await response.json();
        Alert.alert(
          "Error",
          errorResponse.error || "Failed to upload the image."
        );
      }
    } catch (error) {
      Alert.alert("Error", "An error occurred while uploading the image.");
    }
  };
  return (
    <View>
      <Text>UploadVehiclePhoto</Text>
    </View>
  );
};

export default UploadVehiclePhoto;

const styles = StyleSheet.create({});
