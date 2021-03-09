import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default  class MainScreen extends React.Component{
    render(){
        return(
            <View style = {styles.main}>
                <View style = {styles.container}>
                    <View style = {styles.header}>
                        <Text style = {styles.text}>MAIN SCREEN</Text>
                    </View>
                    <View style = {styles.subHeader}>
                        <Text style = {styles.subHeaderText}>INTRODUCTION</Text>
                    </View>
                    <View style = {{width: 1515, height: 385, backgroundColor: '#ffe5d9'}}>
                        <Text style = {{marginTop:100,textAlign : 'left',color : 'black',fontSize :20, backgroundColor: '#ffe5d9',fontFamily : 'impact', marginLeft : 270}}>Hello! My name is Riya. </Text>
                        <Text style = {styles.intro}>I have alsways noticed the discrimination of women and have decided to try to change it.</Text>
                        <Text style = {styles.intro}>This app of mine focuses on major problems and how to deal with them</Text>
                        <Text style = {styles.intro}>Hope it helps you!</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#ffe5d9',
        alignItems : 'center'
    },
    header : {
        height : 140,
        width: '80%',
        margin : 50,
        marginLeft : 50,
        backgroundColor : '#49438f',
        alignItems: 'center'
    },
    text: {
        fontSize : 40,
        fontFamily : 'fantasy',
        color : 'white',
        padding : 40
    },
    subHeader : {
        marginTop : 40,
        backgroundColor : '#49438f',
        width : 1000,
        height : 60,
        padding : 15
    },
    subHeaderText : {
        color : 'white',
        fontFamily : 'font-awesome',
        fontSize : 35,
        alignItems : 'center',
        marginLeft : 350
    },
    intro : {
        marginTop: 30,
        textAlign : 'left',
        color : 'black',
        fontSize :20,
        fontFamily : 'impact',
        backgroundColor: '#ffe5d9',
        marginLeft : 270
    },
    main : {
        backgroundColor: '#ffe5d9'
    }
})