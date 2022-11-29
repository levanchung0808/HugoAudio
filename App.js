import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import PodcastNavigation from "./src/components/podcasts/PodcastNavigation";
import SignUpScreen from "./src/components/podcasts/screen/SignupScreen";
import LoginScreen from "./src/components/podcasts/screen/LoginScreen";
import { UserContextProvider } from "./src/components/users/UserContext";
import AppNavigator from "./src/navigators/AppNavigator";

const App = () => {
  return (
    // <NavigationContainer>
    //   <PodcastNavigation/>
    // </NavigationContainer>
    <UserContextProvider>
      <AppNavigator/>
      {/* <SignUpScreen /> */}
      {/* <LoginScreen></LoginScreen> */}
    </UserContextProvider>
  );
};
export default App;
