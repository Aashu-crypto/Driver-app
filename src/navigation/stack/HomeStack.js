import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Route } from "../../../routes";
import Home from "../../screens/Home/Home";
import ClientLocation from "../../screens/Home/ClientLocation";
import SharedRideLocation from "../../screens/Home/SharedRideLocation";
import DriverChatScreen from "../../screens/Home/DriverChatScreen";

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
    </Stack.Navigator>
  );
};

export default HomeStack;
