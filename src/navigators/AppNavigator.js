import React, { useContext } from "react";
import UserNavigation from "../components/users/UserNavigation";
import PodcastNavigation from "../components/podcasts/PodcastNavigation";
import { NavigationContainer } from "@react-navigation/native";
import UserContext from "../components/users/UserContext";

const AppNavigator = () => {
  const { isLoggedIn } = useContext(UserContext);
  return (
    <NavigationContainer>
      {isLoggedIn == false ? <UserNavigation /> : <PodcastNavigation />}
    </NavigationContainer>
  );
};

export default AppNavigator;
