import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import HeaderComponent from "../../components/HeaderComponent";
import exteriorInspection from "../../../assets/img/exteriorInspection.png";
import interiorInspection from "../../../assets/img/interiorInspection.png";
import photoVerification from "../../../assets/img/photoVerfication.png";
import videoVerification from "../../../assets/img/videoVerfication.png";
import { Color } from "../../../GlobalStyles";
import Checkbox from "expo-checkbox";
import Button from "../../components/Button";
import { Route } from "../../../routes";

const VehicleSelfInspection = ({ navigation }) => {
  const data = [
    {
      img: exteriorInspection,
      name: "Exterior Inspection",
      route: Route.EXTERIORINSPECTION,
    },
    {
      img: interiorInspection,
      name: "Interior Inspection",
      route: Route.INTERIORININSPECTION,
    },
    {
      img: photoVerification,
      name: "Photo Verification",
      route: Route.PHOTOVERIFICATION,
    },
    {
      img: videoVerification,
      name: "Video Verification",
      route: Route.VIDEOVERIFICATION,
    },
  ];

  const [isChecked, setChecked] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <HeaderComponent title="Vehicle Self-Inspection via App" />
        <View style={{ flex: 1 }}>
          {data.map((item) => (
            <TouchableOpacity
              key={item.name}
              style={styles.inspectionItem}
              onPress={() => navigation.navigate(item.route)}
            >
              <Image source={item.img} style={styles.inspectionImage} />
              <Text style={styles.inspectionText}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.agreementContainer}>
          <TouchableOpacity onPress={() => console.log("Agreement Clicked")}>
            <Text style={styles.agreementText}>
              Click to read{" "}
              <Text style={styles.link}>Agreement, terms & conditions</Text>
            </Text>
          </TouchableOpacity>
          <View style={styles.checkboxContainer}>
            <Checkbox value={isChecked} onValueChange={setChecked} />
            <Text style={styles.checkboxText}>
              I confirm that the details provided have been reviewed as per all
              applicable government regulations.
            </Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            placeholder={"Next"}
            onPress={() => {
              navigation.navigate(Route.VEHICLEQUIZ);
            }}
            disabled={!isChecked} // Disable button if checkbox is not checked
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default VehicleSelfInspection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  inspectionItem: {
    borderWidth: 1,
    margin: 10,
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    borderColor: "green",
    borderRadius: 15,
    marginHorizontal: 20,
  },
  inspectionImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  inspectionText: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 21,
    color: "#4A4A4A",
    marginLeft: 10,
  },
  agreementContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  agreementText: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    marginBottom: 10,
  },
  link: {
    color: "#1976D2",
    textDecorationLine: "underline",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  checkboxText: {
    marginLeft: 10,
    fontSize: 14,
    color: "#4A4A4A",
  },
  buttonContainer: {
    paddingHorizontal: 20,
  marginBottom:10
  },
});
