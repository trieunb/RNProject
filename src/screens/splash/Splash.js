/*
author  :   Trieunb
created :   2018-06-09
description : Splash
*/
/*============================================================================*/
//import library
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
/*============================================================================*/
//export class Splash
export default class Splash extends Component{
  render() {
    return(
        <View style={styles.container}>
          <Text style={styles.title}>
            Hello, This is Splash
          </Text>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495e',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff'
  }
});
