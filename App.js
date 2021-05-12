import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import FbScreen from './screens/fb'
import InScreen from './screens/in'

export default class App extends React.Component{
  render(){
    return(
        <AppContainer/>
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  Facebook: {screen: FbScreen},
  Instagram: {screen: InScreen}
},

)


const AppContainer = createAppContainer(TabNavigator);
