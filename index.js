/*
installs
- native-base
- react-native-vector-icons
- react-natigation
Document
https://docs.nativebase.io/docs/GetStarted.html
https://flatuicolors.com/palette/defo
https://reactnavigation.org/docs/en/getting-started.html
https://ionicframework.com/docs/ionicons/
*/

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

import App from './App';
import Splash from './src/screens/splash/Splash';
import Login from './src/screens/login/Login';

class Main extends Component{
  constructor(props) {
    super(props);
    this.state = {
      currentScreen : 'Splash'
    };
    setTimeout(() => {
      console.log('Hello');
      this.setState({currentScreen : 'Login'})
    }, 3000);
  }
  render() {
    const { currentScreen } = this.state;
    let mainScreen = currentScreen === 'Splash' ? <Splash /> : <Login />;
    return mainScreen;
  }
}

AppRegistry.registerComponent('RNProject', () => App);
