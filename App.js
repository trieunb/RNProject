/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
   Text,
   StyleSheet,
   ScrollView,
   Image
} from 'react-native';

import { Container, Content, Icon, Header, Body } from 'native-base'
import { createDrawerNavigator, StackNavigator, createStackNavigator, DrawerItems, SafeAreaView } from 'react-navigation'
//
// import Main from './src/screens/Main';
// const Navigator = createStackNavigator({
//   Main: {
//     screen: Main
//   }
// })
/*============================================================================*/
//example 1
// export default class App extends Component{
//   render() {
//     return (
//       <Navigator />
//     );
//   }
// }
/*============================================================================*/
//example 2
// import MainComponent from './src/screens/components/MainComponent';
// import DetailComponent from './src/screens/components/DetailComponent';
// import ThirdComponent from './src/screens/components/ThirdComponent';
//
// import { ScreenMain, ScreenDetail, ScreenThird } from './ScreenNames';
//
// const Navigator = createStackNavigator({
//   ScreenMain: {
//     screen: MainComponent
//   },
//   ScreenDetail: {
//     screen: DetailComponent,
//   },
//   ScreenThird: {
//     screen: ThirdComponent,
//   }
// });
//
// export default class App extends Component{
//   render() {
//     return (
//       <Navigator />
//     );
//   }
// }

// import { Home, Info, Setting, Cloud } from './ScreenNames';

// let routeConfig = {
//   Home: {
//     screen: HomeComponent,
//   },
//   Info: {
//     screen: InfoComponent,
//   },
//   Setting: {
//     screen: SettingComponent,
//   },
//   Cloud: {
//     screen: CloudComponent,
//   },
// }
// let drawerNavigatorConfig = {
//   initialRouteName: 'Home',
//   // drawerWidth: width/2,
//   drawerPosition: 'left',
//   drawerOpenRoute: 'DrawerOpen',
//   drawerCloseRoute: 'DrawerClose',
//   drawerToggleRoute: 'DrawerToggle',
//   contentOptions: {
//     activeTintColor: 'red'
//   }
// }

import DrawerNavigator from './src/screens/drawernavigation/DrawerNavigator';
import Login from './src/screens/login/Login';

const MyApp = createStackNavigator({
  Login: {screen: Login},
  DrawerNavigator: {screen: DrawerNavigator},
},{
  navigationOptions: {
    header: () => null
  }
});

// /*============================================================================*/
// //example 1
export default class App extends Component{
  render() {
    return (
      <MyApp />
    );
  }
}
