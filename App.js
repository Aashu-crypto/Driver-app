import "react-native-gesture-handler"; // Ensure gesture handler import is correct
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./src/Redux/Store";
import { useFonts } from "expo-font";
import RootStack from "./src/navigation/RootStack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import './i18n'
export default function App() {
  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
  });

  if (!fontsLoaded) {
    // Show a loading screen while fonts are loading
    return <Text>loading</Text>
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
        <StatusBar style="auto" />
      </Provider>
    </GestureHandlerRootView>
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
