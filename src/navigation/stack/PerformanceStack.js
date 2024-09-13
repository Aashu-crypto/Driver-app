import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Route } from "../../../routes";
import PerformanceScreen from "../../screens/Performance/Performance";
import { Color } from "../../../GlobalStyles";


const PerformanceStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: Color.backGroundColor,
        },
      }}
    >
      <Stack.Screen
        name={Route.PERFORMANCE}
        component={PerformanceScreen}
        options={{
          title: "Performance",
        }}
      />
     
    </Stack.Navigator>
  );
};

export default PerformanceStack;
