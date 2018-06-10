/*
author  :   Trieunb
created :   2018-06-09
description : PlanetTab
*/
import React, { Component } from 'react';
import { Container, Text, Content, Icon } from 'native-base';

export default class PlanetTab extends Component{
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => {
      return <Icon name="md-planet" style={{color: tintColor}}  />
    },
    title: 'Planet',
    header: null
  };
  render() {
    return(
        <Container>
          <Content>
            <Text>This Is PlanetTab Screen</Text>
          </Content>
        </Container>
    )
  }
}
