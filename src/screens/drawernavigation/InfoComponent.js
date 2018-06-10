/*
author  :   Trieunb
created :   2018-06-09
description: Detail Component
*/
/*============================================================================*/
//import library
import React, { Component } from 'react';
import { Text, View, Button, TouchableHighlight } from 'react-native';
/*============================================================================*/
//export component
export default class InfoComponent extends Component{
  static navigationOptions = ({ navigation }) => {
  };
  render() {
    return(
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
            This is Info screen
        </Text>
        <TouchableHighlight
          style={{
            margin: 20,
            width: 200,
            height: 45,
            backgroundColor: '#8e44ad',
            padding: 10,
            alignItems: 'center'
        }}
        onPress={() => navigation.navigate.goBack()}
        >
          <Icon name="menu" />
        </TouchableHighlight>
      </View>
    );
  }
}
