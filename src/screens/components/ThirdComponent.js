/*
author  :   Trieunb
created :   2018-06-09
description: Third Component
*/
/*============================================================================*/
//import library
import React, { Component } from 'react';
import { Text, View } from 'react-native';

/*============================================================================*/
//export component
export default class ThirdComponent extends Component{
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
            This is Third screen
        </Text>
      </View>
    );
  }
}
