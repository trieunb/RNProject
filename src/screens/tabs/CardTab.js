/*
author  :   Trieunb
created :   2018-06-09
description : CardTab
*/
/*============================================================================*/
//import library
import React, { Component } from 'react';
import { Container, Text, Content, Icon } from 'native-base';
/*============================================================================*/
//import Component
import CardComponent from './../cart/CardComponent';
/*============================================================================*/
//export class CardTab
export default class CardTab extends Component{
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => {
      return <Icon name="cart" style={{color: tintColor}} />
    },
    title: 'Card',
    header: null
  };
  render() {
    let images = [
      {
        key: 1,
        profileImage: require('../../images/no_avatar.jpg'),
        bodyImage: require('../../images/images3.jpg')
      },
      {
        key: 2,
        profileImage: require('../../images/no_avatar.jpg'),
        bodyImage: require('../../images/images4.jpg')
      },
      {
        key: 3,
        profileImage: require('../../images/no_avatar.jpg'),
        bodyImage: require('../../images/images4.jpg')
      }
    ]
    return(
        <Container>
          <Content>
            {/* <CardComponent /> */}
            {
              images.map(eachImage => {
                return <CardComponent
                  key={eachImage.key}
                  profileImage={eachImage.profileImage}
                  bodyImage={eachImage.bodyImage}
                />
              })
            }
          </Content>
        </Container>
    )
  }
}
