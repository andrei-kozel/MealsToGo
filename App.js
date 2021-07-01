import React, { useEffect } from "react";
import { View, Text, Platform } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";

import { theme } from "./src/infrastructure/theme";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AppLoading from "expo-app-loading";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import Ionicons from "react-native-vector-icons/Ionicons";

// Screens
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";

import "./src/services/restaurant/restaurants.service";

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return <AppLoading />;
  }

  const Tab = createBottomTabNavigator();

  function MapScreen() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Map!</Text>
      </View>
    );
  }

  function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Settings!</Text>
      </View>
    );
  }

  const createScreenoptions = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;
      if (route.name === "Restaurants") {
        iconName = focused ? "ios-restaurant" : "ios-restaurant-outline";
      } else if (route.name === "Map") {
        iconName = focused ? "ios-map" : "ios-map-outline";
      } else if (route.name === "Settings") {
        iconName = focused ? "ios-list-sharp" : "ios-list-outline";
      }
      return <Ionicons name={iconName} size={size} color={color} />;
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={createScreenoptions}
            tabBarOptions={{
              activeTintColor: "tomato",
              inactiveTintColor: "gray",
            }}
          >
            <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
