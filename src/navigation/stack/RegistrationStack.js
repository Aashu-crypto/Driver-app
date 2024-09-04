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
      <Stack.Screen name={Route.VEHICLETYPE} component={VehicleType} />
      <Stack.Screen
        name={Route.VEHICLEINSPECION}
        component={VehicleInspection}
      />
      <Stack.Screen name={Route.UPLOADDOCUMENT} component={UploadDocument} />
      <Stack.Screen
        name={Route.VEHICLESELFINSPECION}
        component={VehicleSelfInspection}
      />
      <Stack.Screen name={Route.VEHICLEQUIZ} component={QuizScreen} />

      <Stack.Screen
        name={Route.APPLICATIONSUBMITTED}
        component={ApplicationSubmittedScreen}
      />
    </Stack.Navigator>
  );
};

export default RegistrationStack;
