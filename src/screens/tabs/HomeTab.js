/*
author  :   Trieunb
created :   2018-06-09
description : HomeTab
*/
import React, { Component } from 'react';

import { Container, Content, Icon, Header, Body, Text } from 'native-base'
import { createDrawerNavigator, StackNavigator, createStackNavigator, DrawerItems, SafeAreaView } from 'react-navigation';


import MainComponent from '../components/MainComponent';
import DetailComponent from '../components/DetailComponent';
import ThirdComponent from '../components/ThirdComponent';

import { ScreenMain, ScreenDetail, ScreenThird } from '../../../ScreenNames';

const Navigator = createStackNavigator({
  ScreenMain: {
    screen: MainComponent
  },
  ScreenDetail: {
    screen: DetailComponent,
  },
  ScreenThird: {
    screen: ThirdComponent,
  }
});
//
// export default class HomeTab extends Component{
//   render() {
//     return (
//       <Navigator />
//     );
//   }
// }

export default class HomeTab extends Component{
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => {
      return <Icon name="md-home" style={{color: tintColor}} />
    },
    header: { visible:false },
    title: 'Home',
    headerMode: 'none',
    header: () => null
  };
  render() {
    return(
            <Navigator />
    )
  }
}
