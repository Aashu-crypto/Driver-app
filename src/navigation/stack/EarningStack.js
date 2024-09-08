import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Route } from "../../../routes";
import Home from "../../screens/Home/Home";
import ClientLocation from "../../screens/Home/ClientLocation";
import EarningMainScreen from "../../screens/earning/EarningMainScreen";
import EarningHistory from "../../screens/earning/EarningHistory";
import SubscriptionPlanScreen from "../../screens/earning/SubscriptionPlanScreen";
import Wallet from "../../screens/earning/Wallet";
import AllOrders from "../../screens/earning/AllOrders";
import OrderDetailsScreen from "../../screens/earning/OrderDetails";
import Incentives from "../../screens/earning/Incentives";
import { Color, FontFamily } from "../../../GlobalStyles";

const EarningStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={Route.EARNING}
      screenOptions={{
        headerShown: true,
        headerBackTitleVisible: false, // Hides the back button text
        headerTitleStyle: {
          fontFamily: FontFamily.poppinsRegular, // Set font family to Poppins
          fontSize: 16,          // Set font size to 16px
          fontWeight: "400",      // Set font weight to 400
          lineHeight: 24,         // Set line height to 24px
          textAlign: "left",
          color:Color.appDefaultColor      // Align text to the left
        },
      }}
    >
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
        options={{
          title: "Subscription Plan",
        }}
      />
      <Stack.Screen
        name={Route.WALLET}
        component={Wallet}
        options={{ title: "Wallet" }}
      />
      <Stack.Screen
        name={Route.ALLORDERS}
        component={AllOrders}
        options={{ title: "All Orders" }}
      />
      <Stack.Screen
        name={Route.ORDERDETAILS}
        component={OrderDetailsScreen}
        options={{ title: "Order Details" }}
      />
      <Stack.Screen
        name={Route.INCENTIVES}
        component={Incentives}
        options={{ title: "Incentives" }}
      />
    </Stack.Navigator>
  );
};

export default EarningStack;
