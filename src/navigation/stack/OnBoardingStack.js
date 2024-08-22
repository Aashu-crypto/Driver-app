import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import OnBoarding from "../../screens/OnBoarding/OnBoarding";
import { Route } from "../../../routes";
import NumberVerfication from "../../screens/Auth/NumberVerification";
import OTPVerificationScreen from "../../screens/Auth/OtpScreen";
import DriverRegistration from "../../screens/driverRegistration/DriverRegistration";

const OnBoardingStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Route.ONBOARDING} component={OnBoarding} />
      <Stack.Screen
        name={Route.NUMBERVERFICATION}
        component={NumberVerfication}
      />
      <Stack.Screen
        name={Route.OTPVERFICATION}
        component={OTPVerificationScreen}
      />
      <Stack.Screen
        name={Route.DRIVERREGISTRATION}
        component={DriverRegistration}
      />
    </Stack.Navigator>
  );
};

export default OnBoardingStack;
