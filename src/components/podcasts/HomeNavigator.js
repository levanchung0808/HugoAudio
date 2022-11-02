import { View, Text } from "react-native";
import React from "react";

import HomeScreen from "./screen/HomeScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      defaultScreenOptions={HomeScreen}
    >
      <Stack.Screen
        name="HomeStackScreen"
        component={HomeScreen}
        options={{ title: "Home" }}
      />
      <Stack.Screen name="UpdateProductStackScreen" component={UpdateProduct} />
      <Stack.Screen name="WelcomeScreen2" component={WelcomeScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
