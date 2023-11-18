import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import { LogBox, Text, View } from "react-native";
import TabNavigation from "./TabNavigation";

const Stack = createNativeStackNavigator();

LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} /> */}
        <Stack.Screen
          name="Tab"
          options={{ headerShown: false }}
          component={TabNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
