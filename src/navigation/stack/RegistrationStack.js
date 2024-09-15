import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Platform } from "react-native";

import OnBoarding from "../../screens/OnBoarding/OnBoarding";
import { Route } from "../../../routes";
import NumberVerfication from "../../screens/Auth/NumberVerification";
import OTPVerificationScreen from "../../screens/Auth/OtpScreen";
import DriverRegistration from "../../screens/driverRegistration/DriverRegistration";
import Welcome from "../../screens/driverRegistration/Welcome";
import VehicleType from "../../screens/driverRegistration/VehicleType";
import VehicleInspection from "../../screens/driverRegistration/VehicleInspection";
import UploadDocument from "../../screens/driverRegistration/UploadDocument";
import VehicleSelfInspection from "../../screens/vehicleInspection/VehicleSelfInspection";
import QuizScreen from "../../screens/vehicleInspection/VehicleQuiz";
import ApplicationSubmittedScreen from "../../screens/vehicleInspection/ApplicationSubmittedScreen";
import ExteriorInspection from "../../screens/vehicleInspection/SelfInspection/ExteriorInspection";
import InteriorInspection from "../../screens/vehicleInspection/SelfInspection/InteriorInspection";
import PhotoUploadScreen from "../../screens/vehicleInspection/SelfInspection/PhotoUpload";
import VideoVerificationScreen from "../../screens/vehicleInspection/SelfInspection/VideoVerification";
import ProfileSetting from "../../screens/driverRegistration/ProfileSetting";
import EditProfile from "../../screens/driverRegistration/EditProfile";
import ChooseLanguageScreen from "../../screens/driverRegistration/SetLanguage";
import { Color, FontFamily } from "../../../GlobalStyles";

const RegistrationStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerTitleAlign: "left", // Align the title to the left
        headerTintColor: Color.appDefaultColor, // Set header text color to blue
        headerBackTitleVisible: Platform.OS === "ios" ? false : true, // Hide "Back" text on iOS
        headerTitleStyle: {
          fontSize: 16,
          lineHeight: 24,
          fontFamily: FontFamily.poppinsRegular,
          fontWeight: "500",
        },
        headerStyle:{
          backgroundColor:Color.backGroundColor
        }
      }}
      initialRouteName={Route.DRIVERREGISTRATION}
    >
      <Stack.Screen
        name={Route.DRIVERREGISTRATION}
        component={DriverRegistration}
        options={{ title: "Driver Registration", headerShown: false }} // Title for the screen
      />
      <Stack.Screen
        name={Route.WELCOME}
        component={Welcome}
        options={{ title: "Welcome" }} // Title for the screen
      />
      <Stack.Screen
        name={Route.PROFILESETTING}
        component={ProfileSetting}
        options={{ title: "Profile Setting" }} // Title for the screen
      />
      <Stack.Screen
        name={Route.EDITPROFILE}
        component={EditProfile}
        options={{ title: "Edit Profile" }} // Title for the screen
      />
      <Stack.Screen
        name={Route.SETLANGUAGE}
        component={ChooseLanguageScreen}
        options={{ title: "Choose Language" }} // Title for the screen
      />
      <Stack.Screen
        name={Route.VEHICLETYPE}
        component={VehicleType}
        options={{ title: "Vehicle Type" }} // Title for the screen
      />
      <Stack.Screen
        name={Route.VEHICLEINSPECION}
        component={VehicleInspection}
        options={{ title: "Vehicle Inspection" }} // Title for the screen
      />
      <Stack.Screen
        name={Route.VEHICLEQUIZ}
        component={QuizScreen}
        options={{ title: "Vehicle Quiz" }} // Title for the screen
      />
      <Stack.Screen
        name={Route.VEHICLESELFINSPECION}
        component={VehicleSelfInspection}
        options={{ title: "Vehicle Self-Inspection" }} // Title for the screen
      />
      <Stack.Screen
        name={Route.UPLOADDOCUMENT}
        component={UploadDocument}
        options={{ title: "Upload Documents" }} // Title for the screen
      />
      <Stack.Screen
        name={Route.EXTERIORINSPECTION}
        component={ExteriorInspection}
        options={{ title: "Exterior Inspection" }} // Title for the screen
      />
      <Stack.Screen
        name={Route.INTERIORININSPECTION}
        component={InteriorInspection}
        options={{ title: "Interior Inspection" }} // Title for the screen
      />
      <Stack.Screen
        name={Route.PHOTOVERIFICATION}
        component={PhotoUploadScreen}
        options={{ title: "Photo Verification" }} // Title for the screen
      />
      <Stack.Screen
        name={Route.VIDEOVERIFICATION}
        component={VideoVerificationScreen}
        options={{ title: "Video Verification" }} // Title for the screen
      />
      <Stack.Screen
        name={Route.APPLICATIONSUBMITTED}
        component={ApplicationSubmittedScreen}
        options={{ title: "Application Submitted" }} // Title for the screen
      />
    </Stack.Navigator>
  );
};

export default RegistrationStack;
