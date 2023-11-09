import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CurrentWeather from './src/screens/CurrentWeather'
import UpcomingWeather from './src/screens/UpcomingWeather'
import City from './src/screens/City'
import {NavigationContainer} from '@react-navigation/native'

const App = () => {
  return (
    <NavigationContainer>
      <View style = {styles.container}>
        <City/>
      </View>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create(
  {
    container : {
      flex : 1
    }
  }
)

