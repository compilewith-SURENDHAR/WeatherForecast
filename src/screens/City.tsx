import React from "react";
import {View, Text, StyleSheet, SafeAreaView, ImageBackground} from 'react-native'

const City = () => {
    return (
        <SafeAreaView style={styles.main}>
            <ImageBackground style={styles.bgimage}
             source={require('../../assets/images/cityBG.jpg')}>
            <Text style={styles.city}>chennai</Text>
            <View style={styles.population}>
                <Text style={styles.text2}>10000</Text>
                <Text style={styles.text1}>population</Text>
            </View>
            <View style={styles.suncontainer}>
                <View style={styles.sunrise}>
                    <Text style={styles.text1}>sunrise</Text>
                    <Text style={styles.text2}>5:30 am</Text>
                </View>
                <View style={styles.sunset}>
                    <Text style={styles.text1}>sunset</Text>
                    <Text style={styles.text2}>5:30 pm</Text>
                </View>
            </View>
        </ImageBackground>
        </SafeAreaView>
    )
}

export default City

const styles = StyleSheet.create(
    {
        main : {
            flex: 1
        },
        bgimage: {
            flex: 1
        },
        city : {
            textAlign : 'center',
            margin : 35,
            color : 'red',
            fontSize : 40,
            borderBottomWidth : 3
        },
        population : {
            alignItems : 'center',
        },
        suncontainer : {
            flexDirection : 'row',
            marginTop : 25,
            justifyContent : 'space-evenly',
            alignItems : 'center',
        },
        sunrise : {
            margin : 10,
        },
        sunset : {
            margin : 10,
            padding : 10
        },
        text1 : {
            fontSize : 25,
            color : 'black',
            borderBottomWidth : 3,
            borderStyle : 'dotted'
        },
        text2 : {
            fontSize : 20,
            color : 'blue',
            padding : 5,
        }
    }
)