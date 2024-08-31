import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

import HomeStack from "../stack/HomeStack";
// Import other screens similarly

const Drawer = createDrawerNavigator();


function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen name="Home" component={HomeStack} />

      {/* Add other screens similarly */}
    </Drawer.Navigator>
  );
}

export default MyDrawer;
