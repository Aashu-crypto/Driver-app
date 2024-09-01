import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Route } from "../../../routes";
import Home from "../../screens/Home/Home";
import ClientLocation from "../../screens/Home/ClientLocation";
import EarningMainScreen from "../../screens/earning/EarningMainScreen";
import EarningHistory from "../../screens/earning/EarningHistory";
import SubscriptionPlanScreen from "../../screens/earning/SubscriptionPlanScreen";
import Wallet from "../../screens/earning/Wallet";

const EarningStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName={Route.EARNINGHISTORY} screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name={Route.EARNING}
        component={EarningMainScreen}
        options={{
          title: "Earnings",
        }}
      />
      <Stack.Screen
        name={Route.EARNINGHISTORY}
        component={EarningHistory}
        options={{
          title: "Earning History",
        }}
      />
      <Stack.Screen
        name={Route.SUBSCRIPTIONPLAN}
        component={SubscriptionPlanScreen}
      />
      <Stack.Screen name={Route.WALLET} component={Wallet} />
    </Stack.Navigator>
  );
};

export default EarningStack;