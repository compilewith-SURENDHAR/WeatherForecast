import React from "react";
import {View, Text, StyleSheet} from 'react-native'

const Item = (props: { max: any; min: any; dt_txt: any }) => (
    <View style={styles.item}>
      <Text style={styles.text}>maximum temperature: {props.max}</Text>
      <Text style={styles.text}>minimum twmperature: {props.min}</Text>
      <Text style={styles.text}>description: {props.dt_txt}</Text>
    </View>
  )

  export default Item

  const styles = StyleSheet.create(
    {
      item : {
        padding : 15,
        alignItems : 'center',
      },
      text : {
        fontSize: 22,
        color : 'red',
        padding: 10,
        borderWidth: 3,
        bordercolor: 'black',
        margin : 8
      },
    }
  )