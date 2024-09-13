import * as React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import {
  FontAwesome5,
  MaterialIcons,
  Ionicons,
  Feather,
  Entypo,
} from "@expo/vector-icons";
import HomeStack from "../stack/HomeStack";
import { Route } from "../../../routes";
import EarningStack from "../stack/EarningStack";
import { Color } from "../../../GlobalStyles";
import PerformanceStack from "../stack/PerformanceStack";
import Inbox from "../../screens/DrawerScreen/Inbox";
import InboxScreen from "../../screens/DrawerScreen/Inbox";
import MyAccountScreen from "../../screens/DrawerScreen/MyAccount";
import AppSettingsScreen from "../../screens/DrawerScreen/AppSetting";
import AccountStack from "../stack/AccountStack";

// Add other screens similar to PerformanceScreen

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.drawerContent}
    >
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: "https://example.com/profile-pic.png" }}
          style={styles.profilePic}
          resizeMode="cover"
        />
        <View style={styles.profileDetails}>
          <Text style={styles.name}>Rakesh Kumar</Text>
          <Text style={styles.rating}>⭐ 4.75</Text>
          <TouchableOpacity
            onPress={() => {
              /* Handle profile edit navigation */
            }}
          >
            <Text style={styles.editProfile}>Edit profile</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.drawerItemsContainer}>
        <DrawerItem
          label="Home"
          icon={() => (
            <FontAwesome5 name="home" size={20} color={Color.appDefaultColor} />
          )}
          labelStyle={styles.drawerLabel}
          onPress={() => props.navigation.navigate("Home")}
        />
        <DrawerItem
          label="Performance"
          icon={() => (
            <FontAwesome5
              name="chart-line"
              size={20}
              color={Color.appDefaultColor}
            />
          )}
          labelStyle={styles.drawerLabel}
          onPress={() => props.navigation.navigate(Route.PERFORMANCE_STACK)}
        />
        <DrawerItem
          label="Services"
          icon={() => (
            <MaterialIcons
              name="miscellaneous-services"
              size={20}
              color={Color.appDefaultColor}
            />
          )}
          labelStyle={styles.drawerLabel}
          onPress={() => props.navigation.navigate("Services")}
        />
        <DrawerItem
          label="My Account"
          icon={() => (
            <FontAwesome5
              name="user-circle"
              size={20}
              color={Color.appDefaultColor}
            />
          )}
          labelStyle={styles.drawerLabel}
          onPress={() => props.navigation.navigate(Route.ACCOUNT_STACK)}
        />
        <DrawerItem
          label="Inbox"
          icon={() => (
            <Ionicons
              name="mail-outline"
              size={20}
              color={Color.appDefaultColor}
            />
          )}
          labelStyle={styles.drawerLabel}
          onPress={() => props.navigation.navigate(Route.INBOX)}
        />
        <DrawerItem
          label="Ride History"
          icon={() => (
            <FontAwesome5 name="car" size={20} color={Color.appDefaultColor} />
          )}
          labelStyle={styles.drawerLabel}
          onPress={() => props.navigation.navigate("RideHistory")}
        />
        <DrawerItem
          label="Earnings"
          icon={() => (
            <FontAwesome5
              name="money-bill-wave"
              size={20}
              color={Color.appDefaultColor}
            />
          )}
          labelStyle={styles.drawerLabel}
          onPress={() => props.navigation.navigate(Route.EARNING_STACK)}
        />
        <DrawerItem
          label="Schedule Pickup"
          icon={() => (
            <Ionicons
              name="time-outline"
              size={20}
              color={Color.appDefaultColor}
            />
          )}
          labelStyle={styles.drawerLabel}
          onPress={() => props.navigation.navigate("SchedulePickup")}
        />
        <DrawerItem
          label="Invite Friends"
          icon={() => (
            <Feather name="user-plus" size={20} color={Color.appDefaultColor} />
          )}
          labelStyle={styles.drawerLabel}
          onPress={() => props.navigation.navigate("InviteFriends")}
        />
        <DrawerItem
          label="Support Center"
          icon={() => (
            <Entypo
              name="help-with-circle"
              size={20}
              color={Color.appDefaultColor}
            />
          )}
          labelStyle={styles.drawerLabel}
          onPress={() => props.navigation.navigate("SupportCenter")}
        />
        <DrawerItem
          label="Settings"
          icon={() => (
            <Ionicons
              name="settings-outline"
              size={20}
              color={Color.appDefaultColor}
            />
          )}
          labelStyle={styles.drawerLabel}
          onPress={() => props.navigation.navigate("Settings")}
        />
      </View>
    </DrawerContentScrollView>
  );
}

export default function App() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: "#FFFFFF",
        },
        drawerLabelStyle: {
          color: "#333333",
          fontSize: 16,
        },
      }}
    >
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name={Route.EARNING_STACK} component={EarningStack} />
      <Drawer.Screen
        name={Route.PERFORMANCE_STACK}
        component={PerformanceStack}
      />
      <Drawer.Screen
        name={Route.INBOX}
        component={InboxScreen}
        options={{
          headerShown: true,
          title: "Inbox",
        }}
      />
      <Drawer.Screen
        name={Route.MYACCOUNT}
        component={MyAccountScreen}
        options={{
          headerShown: true,
          title: "My Account",
        }}
      />
      <Drawer.Screen name={Route.ACCOUNT_STACK} component={AccountStack} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  drawerContent: {
    flexGrow: 1,
    padding: 0,
  },
  profileContainer: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: Color.appDefaultColor,
    flexDirection: "row",
    alignItems: "center",
  },
  profilePic: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  profileDetails: {
    marginLeft: 15,
  },
  name: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  rating: {
    color: "#FFFFFF",
    fontSize: 14,
    marginTop: 4,
  },
  editProfile: {
    color: "#FFFFFF",
    marginTop: 6,
    textDecorationLine: "underline",
  },
  drawerItemsContainer: {
    flex: 1,
    paddingTop: 10,
  },
  drawerLabel: {
    fontSize: 16,
    marginLeft: -16,
    color: Color.colorDarkslategray,
  },
});
