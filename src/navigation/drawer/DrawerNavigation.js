import * as React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
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
import { Color, FontFamily } from "../../../GlobalStyles";

import Inbox from "../../screens/DrawerScreen/Inbox";
import InboxScreen from "../../screens/DrawerScreen/Inbox";
import MyAccountScreen from "../../screens/DrawerScreen/MyAccount";
import AppSettingsScreen from "../../screens/DrawerScreen/AppSetting";
import AccountStack from "../stack/AccountStack";
import PerformanceScreen from "../../screens/DrawerScreen/Performance";
import ScheduledRidesScreen from "../../screens/DrawerScreen/SchedulePickup";
import EditProfile from "../../screens/DrawerScreen/EditUserProfile";
import EditUserProfile from "../../screens/DrawerScreen/EditUserProfile";

// Add other screens  to PerformanceScreen

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={[styles.drawerContent, { paddingTop: 10 }]}
    >
      <View style={styles.profileContainer}>
        <View>
          <Image
            source={require("../../../assets/img/ProfilePhoto.png")}
            style={styles.profilePic}
            resizeMode="cover"
          />
          <View style={styles.ratingView}>
            <Text style={styles.rating}>⭐ 4.75</Text>
          </View>
        </View>

        <View style={styles.profileDetails}>
          <Text style={styles.name}>Rakesh Kumar</Text>

          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate(Route.EDITUSERPROFILE);
            }}
          >
            <Text style={styles.editProfile}>Edit profile</Text>
          </TouchableOpacity>
        </View>

        <Feather name="arrow-right" size={24} color="white" />
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
          onPress={() => props.navigation.navigate(Route.PERFORMANCE)}
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
          onPress={() => props.navigation.navigate(Route.SCHEDULEPICKUP)}
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
          onPress={() => props.navigation.navigate(Route.SCHEDULEPICKUP)}
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
        headerTitleAlign: "left", // Align the title to the left
        headerTintColor: Color.appDefaultColor, // Set header text color to blue
        headerBackTitleVisible: false, // Hide "Back" text on iOS
        headerTitleStyle: {
          fontSize: 16,
          lineHeight: 24,
          fontFamily: FontFamily.poppinsRegular,
          fontWeight: "500",
        },
        headerStyle: {
          backgroundColor: Color.backGroundColor,
        },
      }}
    >
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name={Route.EARNING_STACK} component={EarningStack} />
      <Drawer.Screen
        name={Route.PERFORMANCE}
        component={PerformanceScreen}
        options={{
          headerShown: true,
          title: "Performance",
        }}
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
        name={Route.SCHEDULEPICKUP}
        component={ScheduledRidesScreen}
        options={{
          headerShown: true,
          title: "Scheduled rides",
        }}
      />
      <Drawer.Screen name={Route.ACCOUNT_STACK} component={AccountStack} />
      <Drawer.Screen
        name={Route.EDITUSERPROFILE}
        component={EditUserProfile}
        options={{
          headerShown: true,
          title: "Edit Profile",
          headerTitleAlign: "center",
        }}
      />
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
    justifyContent: "space-around",
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
    fontSize: 15,
    fontWeight: "500",
    lineHeight: 22.5,
    fontFamily: FontFamily.poppinsRegular,
  },
  ratingView: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: -5,
    left: 10,
    borderRadius: 4,
    padding: 2,
    borderWidth: 1,
    borderColor: Color.borderColor,
  },
  rating: {
    color: "#595F75",
    fontSize: 9,
    marginTop: 4,
    textAlignVertical: "center",
  },
  editProfile: {
    color: "#FFFFFF",
    marginTop: 6,
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "400",
    fontFamily: FontFamily.poppinsRegular,
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
