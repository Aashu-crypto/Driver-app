import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Route } from "../../../routes";
import MyAccountScreen from "../../screens/DrawerScreen/MyAccount";
import AppSettingsScreen from "../../screens/DrawerScreen/AppSetting";

const AccountStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name={Route.MYACCOUNT}
        component={MyAccountScreen}
        options={{ title: "My Account" }}
      />
      <Stack.Screen name={Route.APPSETTING} component={AppSettingsScreen} options={{
        title:"App Setting"
      }} />
    </Stack.Navigator>
  );
};

export default AccountStack;
