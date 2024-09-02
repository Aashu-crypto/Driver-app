import React, { useState } from "react";
import {
  FlatList,
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
import photoVerfication from "../../../assets/img/photoVerfication.png";
import videoVerfication from "../../../assets/img/videoVerfication.png";
import { Color } from "../../../GlobalStyles";
import Checkbox from "expo-checkbox";
import Button from "../../components/Button";
import { Route } from "../../../routes";

const VehicleSelfInspection = ({ navigation }) => {
  const data = [
    { img: exteriorInspection, name: "Exterior Inspection" },
    { img: interiorInspection, name: "Interior Inspection" },
    { img: photoVerfication, name: "Photo verification" },
    { img: videoVerfication, name: "Video verification" },
  ];
  const [isChecked, setChecked] = useState(false);
  const renderItem = ({ item, navigation }) => {
    return (
      <View
        style={{
          borderWidth: 1,
          margin: 10,
          padding: 8,
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          marginHorizontal: 20,
          borderColor: "green",
          borderRadius: 15,
        }}
      >
        <Image
          source={item.img}
          style={{ width: 100, height: 100, resizeMode: "contain" }}
        />
        <Text
          style={{
            fontSize: 14,
            fontWeight: "400",
            lineHeight: 21,
            color: Color.textGraycolor,
          }}
        >
          {item.name}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView>
        <HeaderComponent title="Vehicle Self-Inspection via App" />
        <View style={{ flex: 1 }}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.name}
          />
        </View>
        <View style={{ padding: 20 }}>
          <TouchableOpacity onPress={() => console.log("Agreement Clicked")}>
            <Text style={styles.agreementText}>
              Click to read{" "}
              <Text style={styles.link}>Agreement, terms & conditions</Text>
            </Text>
          </TouchableOpacity>
          <View style={styles.checkboxContainer}>
            <Checkbox value={isChecked} onValueChange={setChecked} />
            <Text style={styles.checkboxText}>
              I confirm that the details provided have received training as per
              all the applicable government regulations
            </Text>
          </View>
        </View>
        <Button
          placeholder={"Next"}
          onPress={() => {
            navigation.navigate(Route.VEHICLEQUIZ);
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default VehicleSelfInspection;

const styles = StyleSheet.create({
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
    marginBottom: 20,
  },
  checkboxText: {
    marginLeft: 10,
    fontSize: 14,
  },
});
