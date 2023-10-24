import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function App() {
  return (
    <SafeAreaView style= {styles.wrapper}>
      <View style = {styles.container}>
        <Text style = {styles.temp}>21</Text>
        <Text style = {styles.feels}>feels like 15</Text>
        <View style = {styles.highLow}>
          <Text style = {styles.highLowText}>high: 26</Text>
          <Text style = {styles.highLowText}>low: 13</Text>
        </View>
      </View>
      <View style = {styles.footer}>
          <Text style = {styles.footerText}>its a clear weather!</Text>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper : {
    flex : 1,
    backgroundColor : 'lightblue',
  },
  container : {
    flex : 1,
    marginBottom : 45,
    justifyContent: 'center',
    alignItems: 'center',
    //borderWidth : 3,
    //bordercolor : 'black'
  },
  temp : {
    fontSize : 60,
    color : 'darkblue',
    textAlign : 'center'
  },
  feels : {
    fontSize : 30,
    color : 'black',
    textAlign : 'center'
  },
  highLow : {
    flexDirection : 'row',
  },
  highLowText : {
    fontSize : 22,
    color : 'black',
    padding : 4
  },
  footer : {
    justifyContent : 'flex-end',
    alignItems : 'center',
    paddingBottom : 30,
  },
  footerText : {
    fontSize : 30,
    color : 'red'
  }
})


