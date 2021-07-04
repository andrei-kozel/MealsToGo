import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";
import styled from "styled-components/native";

import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";

const Tab = createBottomTabNavigator();

const View = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

function SettingsScreen() {
  return (
    <View>
      <Text>Settings!</Text>
    </View>
  );
}

const createScreenOptions = ({ route }) => ({
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

export const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={createScreenOptions}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);
