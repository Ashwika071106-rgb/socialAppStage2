import * as React from 'react';
import {Text,View,Image,StyleSheet} from 'react-native';

export default class FamousWomenScreen extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
                <View style= {styles.header}>
                    <Text style = {styles.headerText}>Famous women</Text>
                </View>

                <View style = {styles.img1}>
                    <Image source = {require('../assets/1.png')}/>
                </View>

                <View style = {styles.img2}>
                    <Image source = {require('../assets/2.png')}/>
                </View>

                <View style = {styles.img3}>
                    <Image source = {require('../assets/3.png')}/>
                </View>

                <View style = {styles.img4}>
                    <Image source = {require('../assets/4.png')}/>
                </View>

                <View style = {styles.img5}>
                    <Image source = {require('../assets/5.png')}/>
                </View>

                <View style = {styles.img6}>
                    <Image source = {require('../assets/6.png')}/>
                </View>

                <View style = {styles.img7}>
                    <Image source = {require('../assets/7.png')}/>
                </View>

                <View style = {styles.img8}>
                    <Image source = {require('../assets/8.png')}/>
                </View>

                <View style = {styles.img9}>
                    <Image source = {require('../assets/9.png')}/>
                </View>

                <View style = {styles.img10}>
                    <Image source = {require('../assets/10.png')}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex  :1,
        backgroundColor : '#fcffa3'
    },
    header : {
        backgroundColor : '#ffda47',
        marginTop : 20,
    },
    headerText : {
        color : 'black',
        fontFamily : 'font-awesome',
        fontSize : 20,
        fontWeight : 'bold',
        padding : 15,
        alignItems : 'center',
    },
    img1 : {

    },
    img2 : {

    },
    img3 : {

    },
    img4 : {

    },
    img5 : {

    },
    img6 : {

    },
    img7 : {

    },
    img8 : {

    },
    img9 : {

    },
    img10 : {

    },
})