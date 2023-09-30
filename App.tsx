import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
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
    <SafeAreaView style = {styles.container}>
      <View style = {styles.top}>
      <TextInput
        style={styles.searchBar}
        placeholder="enter city"
        //onChangeText={setText}
        onSubmitEditing={search}
      />
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
  )
}

