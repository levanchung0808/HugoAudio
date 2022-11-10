import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import PodcastNavigation from './src/components/podcasts/PodcastNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <PodcastNavigation/>
    </NavigationContainer>
  )
}
export default App;
