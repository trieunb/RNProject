/*
author  :   Trieunb
created :   2018-06-09
description : Login
*/
/*============================================================================*/
//import library
import React, { Component } from 'react';
import {
  StyleSheet, View, Text, Image,Button,
  SafeAreaView, StatusBar, TextInput,
  KeyboardAvoidingView, TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import FormLogin from './FormLogin';
/*============================================================================*/
//export class Splash
export default class Login extends Component{
  // static navigationOptions = ({ navigation }) => ({
  //   header: () => null
  // })
  render() {
    // const resetAction = NavigationActions.reset({
    //     routeName: 'DrawerNavigator',
    //     params: {},
    //     actions: [
    //         NavigationActions.navigate({routeName: 'Login'})
    //     ]
    // });
    const { navigation } = this.props;
    return(
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
              <View style={styles.logoContainer}>
                <Image
                  style={styles.logo}
                  source={require('../../images/logo_login.png')}
                />
                <Text style={styles.title}>
                  Login To Account
                </Text>
              </View>
              <View style={styles.formLogin}>
                <FormLogin path={navigation}/>
                {/* <View style={styles.container}> */}
                    {/* <TextInput
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
                    <TouchableOpacity style={styles.btnLogin}
                        onPress={() => {navigation.navigate('DrawerNavigator')}}
                      >
                      <Text style={styles.btnText}>LOGIN</Text>
                    </TouchableOpacity> */}
                {/* </View> */}
              </View>
        </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#34495e',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1
  },
  logo: {
    width: 200,
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
    opacity: 0.8
  },
  formLogin: {
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
