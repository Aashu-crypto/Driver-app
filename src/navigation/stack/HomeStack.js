import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Route } from "../../../routes";
import Home from "../../screens/Home/Home";
import ClientLocation from "../../screens/Home/ClientLocation";

const HomeStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={Route.HOME}>
      <Stack.Screen name={Route.HOME} component={Home} />
      <Stack.Screen name={Route.CLIENTLOCATION} component={ClientLocation} />
    </Stack.Navigator>
  );
};

export default HomeStack;
