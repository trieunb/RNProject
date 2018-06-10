/*
author  :   Trieunb
created :   2018-06-09
description : BasketTab
*/
import React, { Component } from 'react';
import { Container, Text, Content, Icon } from 'native-base';

export default class BasketTab extends Component{
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => {
      return <Icon name="basket" style={{color: tintColor}} />
    },
    title: 'Basket',
    header: null
  };
  render() {
    return(
        <Container>
          <Content>
            <Text>This Is BasketTab Screen</Text>
          </Content>
        </Container>
    )
  }
}
