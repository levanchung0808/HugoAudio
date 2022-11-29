import React from "react";
import { PodcastContextProvider } from "./src/components/podcasts/PodcastContext";
import { UserContextProvider } from "./src/components/users/UserContext";
import AppNavigator from "./src/navigators/AppNavigator";

const App = () => {
  return (
    <UserContextProvider>
      <PodcastContextProvider>
        <AppNavigator />
      </PodcastContextProvider>
    </UserContextProvider>
  );
};
export default App;
