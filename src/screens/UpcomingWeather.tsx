import React from 'react'
import { View, Text, FlatList, StyleSheet, ImageBackground } from "react-native"
import Item from '../Components/Item'

const DATA = [
    {
        "coord": {
          "lon": 10.99,
          "lat": 44.34
        },
        "weather": [
          {
            "id": 501,
            "main": "Rain",
            "description": "moderate rain",
            "icon": "10d"
          }
        ],
        "base": "stations",
        "main": {
          "temp": 298.48,
          "feels_like": 298.74,
          "temp_min": 297.56,
          "temp_max": 300.05,
          "pressure": 1015,
          "humidity": 64,
          "sea_level": 1015,
          "grnd_level": 933
        },
        "visibility": 10000,
        "wind": {
          "speed": 0.62,
          "deg": 349,
          "gust": 1.18
        },
        "rain": {
          "1h": 3.16
        },
        "clouds": {
          "all": 100
        },
        "dt": 1661870592,
        "sys": {
          "type": 2,
          "id": 2075663,
          "country": "IT",
          "sunrise": 1661834187,
          "sunset": 1661882248
        },
        "timezone": 7200,
        "id": 3163858,
        "name": "Zocca",
        "cod": 200
      }  
    ]


const UpcomingWeather = () => {

  const renderItem = ({ item }) => (
    <Item max = {item.main.temp_max}
     min = {item.main.temp_min}
      dt_txt = {item.weather[0].description} />
)

    return (
        <View style={styles.main}>
          <ImageBackground style={styles.bgimage}
           source={require('../../assets/images/currentWeather1.jpg')}>
            <FlatList 
                data = {DATA}
                renderItem = {renderItem}
                keyExtractor = {(item) => (item.weather[0].id)}
            />
          </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create(
  {
    main : {
      backgroundColor: 'light grey',
      flex : 1
    },
    
    bgimage : {
      flex: 1,
    }
  }
)

export default UpcomingWeather