import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {Icon} from 'react-native-elements';
import MainScreen from '../screens/MainScreen';
import DefenceScreen from '../screens/DefenceScreen';
import FamousWomenScreen from '../screens/FamousWomenScreen';

export const AppDrawerNavigator = createDrawerNavigator({
    Home : {
      screen : MainScreen,
      navigationOptions:{
        drawerIcon : <Icon name="home" type ="fontawesome5" />
      }
      },
    SelfDefence : {
      screen : DefenceScreen,
      navigationOptions:{
        drawerIcon : <Icon name="gift" type ="font-awesome" />,
        drawerLabel : "Defence"
      }
    },
    FamousWomen : {
      screen : FamousWomenScreen,
      navigationOptions:{
        drawerIcon : <Icon name="bell" type ="font-awesome" />,
        drawerLabel : "Famous Women"
      }
    },
        initialRouteName : 'Home'
    })
  