import React from "react";

import LoginScreen from "../podcasts/screen/LoginScreen";
import RegisterScreen from "../podcasts/screen/SignupScreen";


import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

const UserNavigation = () => {
  return (

    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      defaultScreenOptions={LoginScreen}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />

    </Stack.Navigator>
  );
};

export default UserNavigation;
