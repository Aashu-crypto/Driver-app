import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Divider, Modal, Portal, Button } from "react-native-paper";
import { Camera, useCameraPermissions } from "expo-camera";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Color, FontFamily } from "../../GlobalStyles";
import { backend_Host } from "../../config";
import { useSelector } from "react-redux";
import FontAwesome from '@expo/vector-icons/FontAwesome';
const UploadPhoto = ({ visible, hideModal,id ,type}) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
//   const [type, setType] = useState(Camera.Constants.Type.back);
  const [image, setImage] = useState(null);
  const [permission, requestPermission] = useCameraPermissions();
const driver = useSelector(state=>state.driver.data)
const vehicle = useSelector(state=>state.vehicle.data)
console.log("Vehicle Info");

  // Requesting camera permission in useEffect
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  // Function to flip the camera
  const toggleCameraFacing = () => {
    // setType(
    //   type === Camera.Constants.Type.back
    //     ? Camera.Constants.Type.front
    //     : Camera.Constants.Type.back
    // );
  };

  // Function to take a photo
  const takePhoto = async () => {
    if (cameraRef) {
      let photo = await cameraRef.takePictureAsync();
      console.log("Photo captured: ", photo.uri);
      setImage(photo.uri);
      hideModal(); // Close modal after taking a photo
    }
  };
  const uploadDocumentAndImage = async () => {
    const formData = new FormData();
  
    // Append the document data (driverId and documentId)
    formData.append("driverId", driver.id);
    formData.append("documentId", id);
  
    // Generate a random name for the image
    const randomFileName = `image_${Math.floor(Math.random() * 1000000)}.jpg`;
  
    // Append the image (file) to the formData
    if (image) {
      formData.append("document", {
        uri: image,
        name: randomFileName, // Use the generated random name
        type: "image/jpeg", // Image MIME type
      });
    }
    console.log(type);
    
  if(type == "Driver"){
    try {
      console.log("Uploading data of driver");
      
      const response = await fetch(
        `${backend_Host}/driver/${driver.id}/driver-document-upload/${id}`,
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
        // Provide a more detailed error message
        let message = "An error occurred. Please try again.";
        
        if (response.status === 400) {
          message = "Invalid request. Please check the document data.";
        } else if (response.status === 500) {
          message = "Server error. Please try again later.";
        }
        
        throw new Error(message);
      }
  
      const result = await response.json();
      console.log("Upload successful:", result);
  
      // Success alert
      Alert.alert("Success", "Document uploaded successfully!");
    } catch (error) {
      console.error("Error occurred while uploading:", error.message);
  
      // Detailed alert for error
      if (error.message.includes("Network request failed")) {
        Alert.alert("Network Error", "Please check your internet connection and try again.");
      } else {
        Alert.alert("Upload Failed", error.message || "An unexpected error occurred.");
      }
    }
  }
  else if (type=="Vehicle"){
    try {
      console.log("Uploading data of Vehicle");
      
      const response = await fetch(
        `${backend_Host}/vehicle/vehicle-document-upload/${id}`,
        {
          method: "PUT",
          body: formData, // The body should be FormData
          headers: {
            // DO NOT set 'Content-Type' here, let fetch handle it automatically
            Accept: "application/json", // Optional, depending on your backend setup
          },
        }
      );
      console.log(response);
      
  
      if (!response.ok) {
        // Provide a more detailed error message
        let message = "An error occurred. Please try again.";
        
        if (response.status === 400) {
          message = "Invalid request. Please check the document data.";
        } else if (response.status === 500) {
          message = "Server error. Please try again later.";
        }
        
        throw new Error(message);
      }
  
      const result = await response.json();
      console.log("Upload successful:", result);
  
      // Success alert
      Alert.alert("Success", "Document uploaded successfully!");
    } catch (error) {
      console.error("Error occurred while uploading:", error.message);
  
      // Detailed alert for error
      if (error.message.includes("Network request failed")) {
        Alert.alert("Network Error", "Please check your internet connection and try again.");
      } else {
        Alert.alert("Upload Failed", error.message || "An unexpected error occurred.");
      }
    }
  }
  
  };
  
  // Function to pick an image from gallery
  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
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
      setImage(result.assets[0].uri);
      console.log("Image chosen: ", result.assets[0].uri);
      uploadDocumentAndImage()
      hideModal();
    }
  };

  // Handling permission not granted yet
  if (!permission) {
    return <View />;
  }

 

  return (
    <View style={{ flex: 1 }}>
      {/* Camera View */}
      {/* {hasPermission && visible && (
        <Camera
          style={styles.camera}
        //   type={type}
          ref={(ref) => setCameraRef(ref)}
        >
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.flipButton} onPress={toggleCameraFacing}>
              <Text style={styles.text}>Flip Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.captureButton} onPress={takePhoto}>
              <Text style={styles.text}>Capture</Text>
            </TouchableOpacity>
          </View>
        </Camera>
      )} */}

      {/* Modal for Upload Options */}
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.modalContainer}>
          <Text style={styles.modalTitle}>Select upload option</Text>
          <TouchableOpacity style={styles.optionStyle} onPress={takePhoto}>
            <AntDesign name="camera" size={24} color={Color.appDefaultColor} />
            <Text style={styles.optionText}>Take a Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionStyle} onPress={pickImage}>
            <AntDesign name="picture" size={24} color={Color.appDefaultColor} />
            <Text style={styles.optionText}>Choose from Gallery</Text>
          </TouchableOpacity>
          <Divider />
        </Modal>
      </Portal>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  camera: {
    flex: 1,
    zIndex: 1000,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  flipButton: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
  },
  captureButton: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
  },
  modalContainer: {
    backgroundColor: "white",
    paddingHorizontal: 30,
    paddingVertical: 20,
    marginHorizontal: 20,
    borderRadius: 10,
    justifyContent: "center",
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 20,
    color: Color.colorGray,
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
    marginLeft: 20,
  },
  text: {
    color: "white",
    fontSize: 18,
  },
});
