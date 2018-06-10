/*
author  :   Trieunb
created :   2018-06-09
description : BookTab
*/
import React, { Component } from 'react';
import { Container, Text, Content, Icon } from 'native-base';

export default class BookTab extends Component{
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => {
      return <Icon name="book" style={{color: tintColor}} />
    },
    title: 'Book',
    header: null
  };
  render() {
    return(
        <Container>
          <Content>
            <Text>This Is HomeTab Screen</Text>
          </Content>
        </Container>
    )
  }
}
