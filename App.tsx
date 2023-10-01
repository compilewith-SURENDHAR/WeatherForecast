import { Keyboard, SafeAreaView, ScrollView, StyleSheet, Text, 
  TextInput, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { styles } from './styles';

export default function App() {

  var city = 'chennai'
  const API_KEY = ''
  function getWeather(){
    var api_url = ''
    //fetch(api_url){}
  }

  function search() {}

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <SafeAreaView style = {styles.container}>
      <View style = {styles.top}>
        <View style = {styles.searchBar}>
          <TextInput
          style={styles.input}
          placeholder="enter city"
          onSubmitEditing={search}  
          />
        </View>
        <Text style = {styles.date}>date</Text>
        <Text style = {styles.temperature}>temperature</Text>
        <Text style = {styles.climate}>climate</Text>
      </View>
      <View style = {styles.bottom}>
        <View style = {styles.components}>
          <View style = { styles.box}><Text style= {styles.header}>wind</Text></View>
          <View style = { styles.box}><Text style= {styles.header}>pressure</Text></View>
          <View style = { styles.box}><Text style= {styles.header}>humidity</Text></View>
        </View>
        <View style = {styles.details}></View>
      </View>
    </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}


