/*
author  :   Trieunb
created :   2018-06-09
description: Main Screen
*/
/*============================================================================*/
//import library
import React, { Component }                       from 'react';
import { Platform }                               from 'react-native';
import { Container, Text, Content, Icon }         from 'native-base';
import { createBottomTabNavigator, TabNavigator } from 'react-navigation';
/*============================================================================*/
//import component
import HomeTab        from './tabs/HomeTab';
import PlanetTab      from './tabs/PlanetTab';
import BasketTab      from './tabs/BasketTab';
import BookTab        from './tabs/BookTab';
import CardTab        from './tabs/CardTab';
/*============================================================================*/
//export class Main
export default class Main extends Component{
  static navigationOptions = {
    // headerLeft: <Icon
    //               name={Platform.OS === 'ios' ? 'ios-basket' : 'md-basket'}
    //               style={{paddingLeft: 10}}
    //             />,
    // headerRight: <Icon
    //               name={Platform.OS === 'ios' ? 'ios-compass' : 'md-compass'}
    //               style={{paddingRight: 10}}
    //             />,
    // title: 'Navigation',
    // headerStyle: {
    //   backgroundColor: '#3498db',
    // },
    // headerTintColor: '#fff',
    // headerTitleStyle: {
    //   fontWeight: 'bold',
    //   textAlign: 'center'
    // },
    header: () => null
  };
  render() {
    return(
      <MainNavigator>
        <Text>This Is Main Screen</Text>
      </MainNavigator>
    )
  }
}

const MainNavigator = createBottomTabNavigator ({
  HomeTab: {
    screen:   HomeTab
  },
  PlanetTab: {
    screen:   PlanetTab
  },
  BasketTab: {
    screen:   BasketTab
  },
  BookTab: {
    screen:   BookTab
  },
  CardTab: {
    screen:   CardTab
  },
}, {
  // tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: true,
  activeTintColor: 'tomato',
  inactiveTintColor: 'gray',
  // tabBarOptions: {
  //   showIcon: true,
  //   showLabel: false,
  // },
});
