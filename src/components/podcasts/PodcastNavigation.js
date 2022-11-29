import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import LibraryScreen from './screen/LibraryScreen';
import HomeScreen from './screen/HomeScreen';
import SearchScreen from './screen/SearchScreen';
import Home from '../../assets/btn_Home.svg'
import Search from '../../assets/btn_Search.svg'
import Library from '../../assets/btn_Library.svg'

const PodcastNavigation = () => {

  return (
    <Tab.Navigator screenOptions={{headerShown:false}}> 
        <Tab.Screen name="Home" component={HomeScreen}options={{
          tabBarIcon: ()=> <Home style={{  width: 32,height: 32,color: 'black'}}/>
        }} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Library" component={LibraryScreen} />
    </Tab.Navigator>
  )
}

export default PodcastNavigation