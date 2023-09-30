import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container : {
      flex : 1,
      backgroundColor : 'black'
    },
    top : {
      borderRadius : 30,
      flex : 2,
      borderWidth : 2,
      backgroundColor : '#171717',
      margin : 8,
      padding : 15
    },
    searchBar : {
        height : 12,
        width : 250,
        borderColor : 'grey',
        borderWidth : 1,
        color : 'white',
        fontSize : 20
    },
    date : {
        fontSize : 25,
        color : 'white',
        margin : 8,
        //fontStyle : 'roman',
        fontStyle : 'italic',
        //fontWeight : 'light'
    },
    temperature : {
        fontSize : 40,
        color : '#B0B0B0',
        textAlign : 'right',
        paddingRight : 15,
        //textAlignVertical : 'center'
        paddingTop : 32
    },
    climate : {
        color : 'white',
        fontSize : 18,
        textAlign : 'right',
        paddingRight : 18,
        //textAlignVertical : 'bottom'
    },
    bottom : {
      flex : 3,
      borderRadius : 50,
      margin : 4,
      borderWidth : 1,
      backgroundColor : '#2E2E2E',
      opacity : 0.7,
    },
    components : {
        flex : 4,
        flexDirection : 'row',
        padding : 15,
    },
    box : {
        flex : 1/3,
        borderColor : 'white',
        borderRadius : 20,
        borderWidth : 0.5,
        marginHorizontal : 5,
        marginVertical : 5,
        aspectRatio: 0.65,
        padding : 8
    },
    header : {
        fontSize : 20,
        color : '#B0B0B0',
        textAlign : 'center',
        fontStyle : 'italic'
    },
    details : {
        flex : 5,
        backgroundColor : '#171717',
        marginHorizontal : 10,
        marginBottom : 15,
        borderRadius : 35
    },
  })