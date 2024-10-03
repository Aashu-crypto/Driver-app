import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Route } from "../../../routes";
import Home from "../../screens/Home/Home";
import ClientLocation from "../../screens/Home/ClientLocation";
import SharedRideLocation from "../../screens/Home/SharedRideLocation";
import DriverChatScreen from "../../screens/Home/DriverChatScreen";
import OtpStartRide from "../../screens/Home/OtpStartRide";
import { Color, FontFamily } from "../../../GlobalStyles";

const HomeStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={Route.CLIENTLOCATION}
    >
      <Stack.Screen name={Route.HOME} component={Home} />
      <Stack.Screen name={Route.CLIENTLOCATION} component={ClientLocation} />
      <Stack.Screen
        name={Route.SHAREDRIDELOCATION}
        component={SharedRideLocation}
      />
      <Stack.Screen
        name={Route.DRIVERCHATSCREEN}
        component={DriverChatScreen}
      />
      <Stack.Screen
        name={Route.OTPSTARTRIDE}
        component={OtpStartRide}
        options={{
          headerShown: true,
          headerBackTitleVisible: false, // Hides the back button text
          title:'OTP verification',
          headerTitleStyle: {
            fontFamily: FontFamily.poppinsRegular, // Set font family to Poppins
            fontSize: 16, // Set font size to 16px
            fontWeight: "400", // Set font weight to 400
            lineHeight: 24, // Set line height to 24px
            textAlign: "left",
            color: Color.appDefaultColor, // Align text to the left
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
