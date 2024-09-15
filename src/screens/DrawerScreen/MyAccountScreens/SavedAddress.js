import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import {
  Ionicons,
  FontAwesome,
  MaterialIcons,
  Entypo,
} from "@expo/vector-icons"; // Icons
import { Color, FontFamily } from "../../../../GlobalStyles";

const SavedAddressesScreen = ({ navigation }) => {
  const addresses = [
    {
      id: 1,
      label: "Home",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: "home",
    },
    {
      id: 2,
      label: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: "heart",
    },
    {
      id: 3,
      label: "Home",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: "briefcase",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Address List */}
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {addresses.map((address) => (
          <View key={address.id} style={styles.addressCard}>
            <View style={styles.iconContainer}>
              <FontAwesome
                name={address.icon}
                size={28}
                color={Color.appDefaultColor}
              />
            </View>
            <View style={styles.addressDetails}>
              <Text style={styles.addressLabel}>{address.label}</Text>
              <Text style={styles.addressDescription}>
                {address.description}
              </Text>
            </View>
            <View style={styles.actionIcons}>
              <TouchableOpacity>
                <MaterialIcons name="edit" size={24} color="#878CA1" />
              </TouchableOpacity>
              <TouchableOpacity>
                <MaterialIcons name="delete" size={24} color="red" />
              </TouchableOpacity>
            </View>
          </View>
        ))}

        {/* Add More Button */}
        <TouchableOpacity style={styles.addMoreContainer}>
          <Ionicons name="add-circle-outline" size={24} color={Color.colorDarkgray} />
          <Text style={styles.addMoreText}>Add More</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    backgroundColor: "#3D6DFF",
    paddingHorizontal: 16,
  },
  headerTitle: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold",
    marginLeft: 10,
  },
  scrollViewContent: {
    paddingHorizontal: 16,
    paddingBottom: 30,
    marginTop: 20,
  },
  addressCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    borderWidth: 1,
    borderColor: Color.borderColor,
  },
  iconContainer: {
    padding: 12,
    borderRadius: 50,
  },
  addressDetails: {
    flex: 1,
    marginLeft: 16,
  },
  addressLabel: {
    fontWeight: "500",
    fontSize: 13,
    color: "#6B7084",
    lineHeight: 19.5,
    fontFamily: FontFamily.poppinsRegular,
  },
  addressDescription: {
    fontSize: 10,
    color: "#9CA1B3",
    fontWeight: "400",
    marginTop: 4,
    lineHeight: 15,
    fontFamily: FontFamily.poppinsRegular,
    width: "80%",
  },
  actionIcons: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap:10
  },
  addMoreContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },
  addMoreText: {
    marginLeft: 8,
    color: Color.colorDarkgray,
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default SavedAddressesScreen;
