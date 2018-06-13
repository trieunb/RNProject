import React, { Component } from 'react';
import {
  View,
   Text,
   StyleSheet,
   ScrollView,
   Image
} from 'react-native';

import { Container, Content, Icon, Header, Body, Card, CardItem, Left, Thumbnail } from 'native-base'
import { createDrawerNavigator, StackNavigator, createStackNavigator, DrawerItems, SafeAreaView  } from 'react-navigation'

import HomeComponent from './HomeComponent';
import InfoComponent from './InfoComponent';
import SettingComponent from './SettingComponent';
import CloudComponent from './CloudComponent';
import LoginComponent from './LoginComponent';

const CustomDrawerContentComponent = (props) => (
  <Container>
    <Header style={styles.drawerHeader}>
      <Body style={styles.bodyContainer}>
        {/* <Left> */}
          <Image
            style={styles.drawerImage}
            source={require('../../images/Unsure-Programmer-Logo.png')} />
          <Text style={styles.title}>Nguyen Ba Trieu</Text>
        {/* </Left> */}
      </Body>
        {/* <Image
          style={styles.drawerImage}
          source={require('../../images/Unsure-Programmer-Logo.png')} /> */}
    </Header>
    <Content>
      <DrawerItems {...props} />
    </Content>
  </Container>
);

export default MyApp = createDrawerNavigator({
  // For each screen that you can navigate to, create a new entry like this:
    Home: {
      screen: HomeComponent,
    },
    Info: {
      screen: InfoComponent
    },
    Setting: {
      screen: SettingComponent
    },
    Cloud: {
      screen: CloudComponent
    },
    Logout: {
      screen: LoginComponent,
      // disableOpenGesture: true
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  drawerHeader: {
    height: 100,
    backgroundColor: 'white',
    // padding: 10
  },
  bodyContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  drawerImage: {
    height: 80,
    width: 80,
    borderRadius: 75,
    marginLeft: 20
  },
  title: {
    width: 200,
    marginLeft: 10,
    fontWeight: '700'
  }
})
