import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppDrawerNavigator from './components/AppDrawerNavigator'

import MainScreen from './screens/MainScreen';

export default class App extends React.Component{
  render(){
    return(
      <View>
        <MainScreen/>
        <AppDrawerNavigator/>
      </View>
    )
  }
}
