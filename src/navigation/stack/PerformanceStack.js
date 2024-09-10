import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Route } from "../../../routes";
import PerformanceScreen from "../../screens/Performance/Performance";
import { Color } from "../../../GlobalStyles";
import InboxScreen from "../../screens/Performance";

const PerformanceStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: true,
      headerStyle:{
        backgroundColor:Color.backGroundColor
      }
     }}>
      <Stack.Screen name={Route.PERFORMANCE} component={PerformanceScreen} options={{
        title:"Performance"
      }} />
      <Stack.Screen name={Route.INBOX} component={InboxScreen} options={{
        title:"Inbox"
      }} />
    </Stack.Navigator>
  );
};

export default PerformanceStack;
