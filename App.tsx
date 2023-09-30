import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from './styles';

export default function App() {
  return (
    <SafeAreaView style = {styles.container}>
      <View style = {styles.top}>
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

