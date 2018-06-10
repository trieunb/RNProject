/*
author  :   Trieunb
created :   2018-06-09
description: Detail Component
*/
/*============================================================================*/
//import library
import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { ScreenMain, ScreenThird } from '../../../ScreenNames';
/*============================================================================*/
//export component
export default class DetailComponent extends Component{
  // static navigationOptions = {
  //   title: 'Details',
  // };
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('otherParam', 'A Nested Details Screen'),
    };
  };
  render() {
    console.log(JSON.stringify(this.props.navigation));
    let params = this.props.navigation.state.params;
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
            This is Detail screen
        </Text>
        <Text>{params.name}</Text>
        <Text>{params.year}</Text>
        <Button
          title="Update the title"
          onPress={() =>
            this.props.navigation.setParams({ otherParam: 'Updated!' })}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate(ScreenMain)}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}
