import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

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

const RegistrationStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={Route.DRIVERREGISTRATION}
    >
      <Stack.Screen
        name={Route.DRIVERREGISTRATION}
        component={DriverRegistration}
      />
      <Stack.Screen name={Route.WELCOME} component={Welcome} />
      <Stack.Screen name={Route.PROFILESETTING} component={ProfileSetting} />
      <Stack.Screen name={Route.EDITPROFILE} component={EditProfile} />
      <Stack.Screen name={Route.SETLANGUAGE} component={ChooseLanguageScreen} />
      <Stack.Screen name={Route.VEHICLETYPE} component={VehicleType} />
      <Stack.Screen
        name={Route.VEHICLEINSPECION}
        component={VehicleInspection}
      />
      <Stack.Screen name={Route.VEHICLEQUIZ} component={QuizScreen} />

      <Stack.Screen
        name={Route.VEHICLESELFINSPECION}
        component={VehicleSelfInspection}
      />
      <Stack.Screen name={Route.UPLOADDOCUMENT} component={UploadDocument} />
      <Stack.Screen
        name={Route.EXTERIORINSPECTION}
        component={ExteriorInspection}
      />
      <Stack.Screen
        name={Route.INTERIORININSPECTION}
        component={InteriorInspection}
      />
      <Stack.Screen
        name={Route.PHOTOVERIFICATION}
        component={PhotoUploadScreen}
      />
      <Stack.Screen
        name={Route.VIDEOVERIFICATION}
        component={VideoVerificationScreen}
      />

      <Stack.Screen
        name={Route.APPLICATIONSUBMITTED}
        component={ApplicationSubmittedScreen}
      />
    </Stack.Navigator>
  );
};

export default RegistrationStack;
