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
import { LinearGradient } from "expo-linear-gradient";
const VehicleSelfInspection = ({ navigation }) => {
  const data = [
    {id:1,
      img: exteriorInspection,
      name: "Exterior Inspection",
      route: Route.EXTERIORINSPECTION,
      value:'EXTERIOR'
    },
    {
      id:2,
      img: interiorInspection,
      name: "Interior Inspection",
      route: Route.INTERIORININSPECTION,
      value:'INTERIOR'
    },
    {
      id:3,
      img: photoVerification,
      name: "Photo Verification",
      route: Route.PHOTOVERIFICATION,
      value:'LIVE_PHOTO'
    },
    {id:4,
      img: videoVerification,
      name: "Video Verification",
      route: Route.VIDEOVERIFICATION,value:'LIVE_PHOTO'
    },
  ];

  const [isChecked, setChecked] = useState(false);
const [selectedId,setSelecteId]=useState()
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      
        <View style={{ flex: 1 }}>
          {data.map((item) => (
            <TouchableOpacity
              key={item.name}
              style={styles.inspectionItem}
              onPress={() => {
                navigation.navigate(item.route,{
                  value:item.value
                })}}
              activeOpacity={0.7}
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
              navigation.navigate(Route.TRAININGANDINDUCTION);
            }}
            disabled={!isChecked} // Disable button if checkbox is not checked
          />
        </View>
      </ScrollView>
      <LinearGradient
        colors={["transparent", "rgba(255,255,255,0.8)", "#fff"]}
        style={styles.bottomFade}
      />
    </SafeAreaView>
  );
};

export default VehicleSelfInspection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.AlmostWhiteBackGround,
  },
  inspectionItem: {
    borderWidth: 1,
    margin: 10,
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    borderColor: Color.appDefaultColor,
    borderRadius: 15,
    marginHorizontal: 20,
    backgroundColor:'#fff',
    elevation:2
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
    marginBottom: 10,
  },
  bottomFade: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 30,
  },
});
