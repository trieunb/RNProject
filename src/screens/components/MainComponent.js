/*
author  :   Trieunb
created :   2018-06-09
description: Main Component
*/
/*============================================================================*/
//import library
import React, { Component } from 'react';
import { Text, View, Button, ActivityIndicator } from 'react-native';
import { ScreenDetail, ScreenThird } from '../../../ScreenNames';
/*============================================================================*/
//export component
export default class MainComponent extends Component{
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      headerTitle: 'Home',
      headerRight: (
        <Button onPress={params.increaseCount} title="+1" color="#fff" />
      ),
      headerBackTitle: 'Home',
      header: () => null
    };
  };
  componentWillMount() {
    this.props.navigation.setParams({ increaseCount: this._increaseCount, isSaving: false });
  }
  state = {
    count: 0,
  };
  _increaseCount = () => {
    // this.setState({ count: this.state.count + 1 });
    this.props.navigation.setParams({ isSaving: true });
    setInterval(() => {
      this.props.navigation.setParams({ isSaving: false });
    }, 3000);
  };
  render() {
    const {navigation}  = this.props;
    let dataSend =  {
      name : 'Star Wars',
      year : '2018'
    };
    console.log(navigation.state.params);
    let _view = (
        <View
            style={{
              flex: 1,
              backgroundColor: '#1abc9c',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}
              >
                This is Main screen
            </Text>
          <View>
            <Button
              style={{
                padding: 10, margin: 20, width: 200, height: 45, backgroundColor: '#8e44ad'
              }}
              onPress = {() => navigation.navigate(ScreenDetail, dataSend)}
              title = "Navigate To Detail"
            />
            <Text>Count: {this.state.count}</Text>
            <Button
              style={{
                padding: 10, marginTop: 20, width: 200, height: 45, backgroundColor: '#8e44ad'
              }}
              // onPress = {() => {this.props.navigate(ScreenThird)}}
              onPress = {() => navigation.navigate(ScreenThird)}
              title = "Navigate To Third"
            />
          </View>
        </View>
    );
    let mainView = (navigation.state.params && navigation.state.params.isSaving === true) ? <ActivityIndicator /> : _view;
    return mainView;
  }
}
