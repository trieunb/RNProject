/*
author  :   Trieunb
created :   2018-06-09
description : HomeTab
*/
import React, { Component } from 'react';
import { Container, Text, Content, Icon } from 'native-base';

export default class HomeTab extends Component{
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => {
      return <Icon name="md-home" style={{color: tintColor}} />
    },
    header: { visible:false },
    title: 'Home',
    headerMode: 'none',
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
