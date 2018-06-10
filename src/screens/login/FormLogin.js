/*
author  :   Trieunb
created :   2018-06-09
description : Login
*/
/*============================================================================*/
//import library
import React, { Component } from 'react';
import {
  StyleSheet, View, Text, TextInput, TouchableOpacity
} from 'react-native';
/*============================================================================*/
//export class FormLogin
export default class FormLogin extends Component{
  render() {
    return(
      <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="UserName"
            placeholderTextColor="rgba(255,255,255,0.8)"
            returnKeyType="next"
            autoCapitalize="none"
            autoCorrect={false}
            onSubmitEditing={() => this.passwordInput.focus()}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="rgba(255,255,255,0.8)"
            returnKeyType="go"
            secureTextEntry={true}
            ref={(input) => this.passwordInput = input}
          />
          <TouchableOpacity style={styles.btnLogin}>
            <Text style={styles.btnText}>LOGIN</Text>
          </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    color: '#FFF',
    marginBottom: 10,
    paddingHorizontal: 10
  },
  btnLogin: {
    backgroundColor: '#3498db',
    paddingVertical: 15
  },
  btnText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700'
  }
});
