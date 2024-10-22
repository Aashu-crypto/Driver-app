import { StyleSheet, Text, TouchableOpacity, View, Image, Alert } from "react-native";
import React, { useState } from "react";
import { Color, height, width } from "../../../../GlobalStyles";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

const PhotoUploadScreen = () => {
  const [image, setImage] = useState(null);

  const openCamera = async () => {
    // Ask for camera permissions
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    
    if (permissionResult.granted === false) {
      Alert.alert("Camera Access Denied", "You need to allow camera access to take a photo.");
      return;
    }

    // Open the camera
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.uploadBox} onPress={openCamera}>
        {image ? (
          <Image source={{ uri: image }} style={styles.uploadedImage} />
        ) : (
          <>
            <Ionicons
              name="camera-outline"
              size={32}
              color={Color.appDefaultColor}
            />
            <Text style={styles.uploadText}>Upload Interior Photo</Text>
          </>
        )}
      </TouchableOpacity>
      {image && (
        <TouchableOpacity style={styles.submitButton} onPress={() => Alert.alert("Photo uploaded successfully!")}>
          <Text style={styles.submitButtonText}>Submit Photo</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default PhotoUploadScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.AlmostWhiteBackGround,
    alignItems: 'center',
    justifyContent: 'center'
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
  uploadText: {
    marginTop: 8,
    color: Color.textColor,
    fontSize: 16,
  },
  uploadedImage: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  submitButton: {
    backgroundColor: Color.appDefaultColor,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  }
});
