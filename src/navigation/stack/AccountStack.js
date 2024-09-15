import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Route } from "../../../routes";
import MyAccountScreen from "../../screens/DrawerScreen/MyAccount";
import AppSettingsScreen from "../../screens/DrawerScreen/AppSetting";
import { Platform } from "react-native";
import { Color, FontFamily } from "../../../GlobalStyles";
import DocumentUploadScreen from "../../screens/DrawerScreen/MyAccountScreens/Document";
import SavedAddressesScreen from "../../screens/DrawerScreen/MyAccountScreens/SavedAddress";

const AccountStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: true ,headerTitleAlign: "left", // Align the title to the left
      headerTintColor: Color.appDefaultColor, // Set header text color to blue
      headerBackTitleVisible: Platform.OS === "ios" ? false : true, // Hide "Back" text on iOS
      headerTitleStyle: {
        fontSize: 16,
        lineHeight: 24,
        fontFamily: FontFamily.poppinsRegular,
        fontWeight: "500",
      },
      headerStyle: {
        backgroundColor: Color.backGroundColor,
      },}}>
      <Stack.Screen
        name={Route.MYACCOUNT}
        component={MyAccountScreen}
        options={{ title: "My Account" }}
      />
      <Stack.Screen name={Route.APPSETTING} component={AppSettingsScreen} options={{
        title:"App Setting"
      }} />
      <Stack.Screen name={Route.DOCUMENT} component={DocumentUploadScreen} options={{
        title:"Document"
      }}/>
      <Stack.Screen name={Route.SAVEDADDRESS} component={SavedAddressesScreen} options={{
        title:"Saved Address"
      }}/>
    </Stack.Navigator>
  );
};

export default AccountStack;
