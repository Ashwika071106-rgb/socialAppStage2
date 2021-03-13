import * as React from 'react';
import {Text,View,StyleSheet} from 'react-native';
import Video from 'react-native-video';

export default class DefenceScreen extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.header}>
                    <Text style = {styles.headerText}>Defend Yourself</Text>
                </View>
                <View>
                    <View>
                        <Text>
                            According to wikipedia, Self - defense is a resistant material that includes the protection of health and the well-being of harming oneself. The use of the right to self-defense as a legal tiff deed for the use of force in times of danger is available in many jurisdictions.
                        </Text>
                        <Text>
                            In simple words, self defence is the ability to protect yourself in a dangerous situation.
                        </Text>
                    </View>
                        <Text>WAYS TO DEFEND YOURSELF</Text>
                        <Video source={{uri: "https://www.youtube.com/watch?v=T7aNSRoDCmg"}}  
                            ref={(ref) => {
                                this.player = ref
                            }}                                      
                            onBuffer={this.onBuffer}                
                            onError={this.videoError}
                        />
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