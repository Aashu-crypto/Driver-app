import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Button } from 'react-native';

const PhotoUploadScreen = () => {
  const [selectedImage, setSelectedImage] = useState(1); // To track the selected image

  const imageOptions = [
    { id: 1, label: 'Front', imageUrl: require('./assets/front.png') },
    { id: 2, label: 'Left', imageUrl: require('./assets/left.png') },
    { id: 3, label: 'Right', imageUrl: require('./assets/right.png') },
    { id: 4, label: 'Back', imageUrl: require('./assets/back.png') },
  ];

  const handleSelectImage = (id) => {
    setSelectedImage(id);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Photo Uploads</Text>
      <View style={styles.imageGrid}>
        {imageOptions.map((option) => (
          <TouchableOpacity
            key={option.id}
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
      <Button title="Next" onPress={() => alert('Next Step')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F6FF',
    padding: 20,
  },
  header: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  imageContainer: {
    width: '45%',
    height: 150,
    marginBottom: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedImage: {
    borderColor: '#00A2FF',
    borderWidth: 2,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  label: {
    marginTop: 10,
    fontSize: 16,
    color: '#000',
  },
});

export default PhotoUploadScreen;
