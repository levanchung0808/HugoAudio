import { StyleSheet, Text, View } from 'react-native'
import React, {useContext} from 'react'
import HomeNavigator from '../components/podcasts/HomeNavigator';
import LoginScreen from '../components/podcasts/screen/LoginScreen';
import { NavigationContainer } from '@react-navigation/native'

const AppNavigator = () => {
    const {isLoggedIn} = useContext(UserContext);
  return (
    <NavigationContainer>
        
    </NavigationContainer>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})