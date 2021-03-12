import * as React from 'react';
import {Text,View,StyleSheet} from 'react-native';

export default class DefenceScreen extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.header}>
                    <Text style = {styles.headerText}>Defend Yourself</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex  :1,
        backgroundColor : '#f7c6db'
    },
    header : {
        backgroundColor : '#3d0c57',
        marginTop : 20,
    },
    headerText : {
        color : 'white',
        fontFamily : 'font-awesome',
        fontSize : 20,
        fontWeight : 'bold',
        padding : 15,
        alignItems : 'center',
    },
})