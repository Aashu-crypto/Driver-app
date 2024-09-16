import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Route } from "../../../routes";
import Home from "../../screens/Home/Home";
import ClientLocation from "../../screens/Home/ClientLocation";
import SharedRideLocation from "../../screens/Home/SharedRideLocation";

const HomeStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={Route.HOME}
    >
      <Stack.Screen name={Route.HOME} component={Home} />
      <Stack.Screen name={Route.CLIENTLOCATION} component={ClientLocation} />
      <Stack.Screen
        name={Route.SHAREDRIDELOCATION}
        component={SharedRideLocation}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
