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
import { createDrawerNavigator, StackNavigator, DrawerItems, SafeAreaView } from 'react-navigation'

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

import HomeComponent from './src/screens/drawernavigation/HomeComponent';
import InfoComponent from './src/screens/drawernavigation/InfoComponent';
import SettingComponent from './src/screens/drawernavigation/SettingComponent';
import CloudComponent from './src/screens/drawernavigation/CloudComponent';

import { Home, Info, Setting, Cloud } from './ScreenNames';

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
//   drawerWidth: width/2,
//   drawerPosition: 'left',
//   drawerOpenRoute: 'DrawerOpen',
//   drawerCloseRoute: 'DrawerClose',
//   drawerToggleRoute: 'DrawerToggle',
//   contentOptions: {
//     activeTintColor: 'red'
//   }
// }

const CustomDrawerContentComponent = (props) => (
  <Container>
    <Header style={styles.drawerHeader}>
      <Body>
        <Image
          style={styles.drawerImage}
          source={require('./src/images/Unsure-Programmer-Logo.png')} />
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props} />
    </Content>
  </Container>
);

const MyApp = createDrawerNavigator({
  // For each screen that you can navigate to, create a new entry like this:
    Home: {
      screen: HomeComponent,
    },
    Setting: {
      screen: SettingComponent
    }
  },
    {
      initialRouteName: 'Home',
      drawerPosition: 'left',
      contentComponent: CustomDrawerContentComponent,
      drawerOpenRoute: 'DrawerOpen',
      drawerCloseRoute: 'DrawerClose',
      drawerToggleRoute: 'DrawerToggle'
    });

/*============================================================================*/
//example 1
export default class App extends Component{
  render() {
    return (
      <MyApp />
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  drawerHeader: {
    height: 200,
    backgroundColor: 'white'
  },
  drawerImage: {
    height: 150,
    width: 150,
    borderRadius: 75
  }

})
