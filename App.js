import "./gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider, useDispatch } from "react-redux";
import { store } from "./src/Redux/Store";
// import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from "expo-font";
// import AppLoading from "expo-app-loading"; // Import AppLoading
import RootStack from "./src/navigation/RootStack";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
// SplashScreen.preventAutoHideAsync();
export default function App() {
  const [loaded] = useFonts({
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
  });

  // useEffect(() => {
  //   if (loaded) {
  //     SplashScreen.hideAsync();
  //   }
  // }, [loaded]);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
