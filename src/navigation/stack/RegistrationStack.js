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

const RegistrationStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={Route.DRIVERREGISTRATION}
        component={DriverRegistration}
      />
      <Stack.Screen name={Route.WELCOME} component={Welcome} />
      <Stack.Screen name={Route.VEHICLETYPE} component={VehicleType} />
      <Stack.Screen name={Route.VEHICLEINSPECION} component={VehicleInspection}/>
    </Stack.Navigator>
  );
};

export default RegistrationStack;
