import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
  BackHandler,
} from "react-native";
import HeaderComponent from "../../../components/HeaderComponent";
import { Button } from "react-native-zaptric-ui";
import { width } from "../../../../GlobalStyles";
import { backend_Host } from "../../../../config";
import * as ImagePicker from "expo-image-picker";
import { useSelector } from "react-redux";

const ExteriorInspection = ({ navigation, route }) => {
  const [selectedImageId, setSelectedImageId] = useState(null); // To track the selected image
  const [uploadedImages, setUploadedImages] = useState([]); // To track uploaded images
  const [images, setImages] = useState({}); // To track images by option ID
  const [vehiclePhotoDetails, setVehiclePhotoDetails] = useState([]); // For vehicle photo details from the API
  const vehicle = useSelector((state) => state.vehicle.data);

  const value = route.params.value;
  console.log(value);

  // Image picker function
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
  const [allUploaded, setAllUploaded] = useState();
  // Fetch vehicle photo details from the API
  useEffect(() => {
    const fetchVehiclePhotos = async () => {
      try {
        const response = await fetch(
          `${backend_Host}/vehicle/vehicle-photo/${vehicle.id}?photoType=EXTERIOR`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch vehicle photos");
        }

        const data = await response.json();
        const uploadedAll = data.every((item) => item.uploadStatus === true);
        console.log("UploadAll", uploadedAll);
        setAllUploaded(uploadedAll);
        console.log("Vehicle Photos:", data);
        setVehiclePhotoDetails(data);
      } catch (error) {
        console.error("Error fetching vehicle photos:", error);
      }
    };

    fetchVehiclePhotos();
  }, [uploadedImages]);

  useEffect(() => {
    const backAction = () => {
      Alert.alert("Hold on!", "Please Upload all the Photos", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel",
        },
        { text: "YES", onPress: () => navigation.goBack() },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  // Image options with default images
  const imageOptions = [
    {
      id: 1,
      label: "Front",
      imageUrl: require("../../../../assets/img/front.png"),
      photoType: "EXTERIOR_FRONT",
    },
    {
      id: 2,
      label: "Left",
      imageUrl: require("../../../../assets/img/left.png"),
      photoType: "EXTERIOR_LEFT",
    },
    {
      id: 3,
      label: "Right",
      imageUrl: require("../../../../assets/img/right.png"),
      photoType: "EXTERIOR_RIGHT",
    },
    {
      id: 4,
      label: "Back",
      imageUrl: require("../../../../assets/img/back.png"),
      photoType: "EXTERIOR_BACK",
    },
  ];

  // Merge vehiclePhotoDetails with imageOptions
  const mergedPhotos = imageOptions.map((option) => {
    const apiPhoto = vehiclePhotoDetails.find(
      (photo) => photo.photoType === option.photoType
    );
    return {
      ...option,
      photoUrl: apiPhoto ? apiPhoto.photoUrl : null, // Use API photoUrl if available
      uploadStatus: apiPhoto ? apiPhoto.uploadStatus : false, // Use API status if available
    };
  });

  // Handle image selection and upload
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
    const randomFileName = `image_${Math.floor(Math.random() * 1000000)}.jpeg`;
    formData.append("document", {
      uri: selectedImageUri, // The image URI from the picker
      name: randomFileName, // A unique name for the image file
      type: "image/jpeg", // The image MIME type
    });

    try {
      console.log("Starting Upload of Exterior");
      
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
        console.log(result);
        
      

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
      console.log(error);
      
      Alert.alert("Error", "An error occurred while uploading the image.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent title="Photo Uploads" />
      <View style={styles.imageGrid}>
        {vehiclePhotoDetails.map((option) => (
          <TouchableOpacity
            key={option.id}
            activeOpacity={0.7}
            onPress={() => handleSelectImage(option.id)}
            disabled={option.uploadStatus} // Disable the button if the image is already uploaded
            style={[
              styles.imageContainer,
              option.uploadStatus && styles.disabledImage, // Change style if disabled
            ]}
          >
            {/* Show picked image or default image */}
            <Image
              source={
                images[option.id]
                  ? { uri: images[option.id] }
                  : option.photoUrl
                  ? { uri: option.photoUrl }
                  : option.imageUrl
              }
              style={styles.image}
            />
            <Text style={styles.label}>{option.vehiclePhotoName}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {allUploaded && (
        <View style={{ alignItems: "center" }}>
          <Button
            title={"Go Back"}
            btnWidth={width * 0.9}
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F6FF",
  },
  imageGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 20,
    paddingHorizontal: 10,
  },
  imageContainer: {
    width: "45%",
    height: 150,
    marginBottom: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "transparent",
    elevation: 3,
    backgroundColor: "#fff",
  },
  disabledImage: {
    opacity: 0.5,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  label: {
    marginTop: 10,
    fontSize: 16,
    color: "#000",
  },
});

export default ExteriorInspection;
