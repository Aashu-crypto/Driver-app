import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
 
  SafeAreaView,
} from "react-native";
import HeaderComponent from "../../../components/HeaderComponent";
import Button from "../../../components/Button";

const PhotoUploadScreen = () => {
  const [selectedImage, setSelectedImage] = useState(1); // To track the selected image

  const imageOptions = [
    {
      id: 1,
      label: "Front",
      imageUrl: require("../../../../assets/img/front.png"),
    },
    {
      id: 2,
      label: "Left",
      imageUrl: require("../../../../assets/img/left.png"),
    },
    {
      id: 3,
      label: "Right",
      imageUrl: require("../../../../assets/img/right.png"),
    },
    {
      id: 4,
      label: "Back",
      imageUrl: require("../../../../assets/img/back.png"),
    },
  ];

  const handleSelectImage = (id) => {
    setSelectedImage(id);
  };

  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent title="Photo Uploads" />
      <View style={styles.imageGrid}>
        {imageOptions.map((option) => (
          <TouchableOpacity
            key={option.id}
            activeOpacity={0.7}
            onPress={() => handleSelectImage(option.id)}
            style={[
              styles.imageContainer,
              selectedImage === option.id && styles.selectedImage,
            ]}
          >
            <Image source={option.imageUrl} style={styles.image} />
            <Text style={styles.label}>{option.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
     <Button placeholder={"Next"}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F6FF",
  },
  header: {
    fontSize: 20,
    color: "#000",
    fontWeight: "bold",
    marginBottom: 20,
  },
  imageGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 20,
    paddingHorizontal:10
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
    elevation:3,
    backgroundColor:'#fff'
  },
  selectedImage: {
    borderColor: "#11C564",
    borderWidth: 2,
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

export default PhotoUploadScreen;
