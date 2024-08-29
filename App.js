import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider, useDispatch } from "react-redux";
import { store } from "./src/Redux/Store";
import { useFonts } from "expo-font";
// import AppLoading from "expo-app-loading"; // Import AppLoading
import RootStack from "./src/navigation/RootStack";

export default function App() {
  const [loaded] = useFonts({
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
  });

  // If fonts are not loaded, return AppLoading component or a custom loading screen
  if (!loaded) {
    return <Text>Loading</Text>;
  }

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
