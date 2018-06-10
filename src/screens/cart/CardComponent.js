/*
author  :   Trieunb
created :   2018-06-09
description : Card Component
*/
/*============================================================================*/
//import library
import React, { Component } from 'react';
import {
    Container, Content,
    Text, Icon,
    Card, CardItem, Thumbnail, Body, Left, Right, Button
} from 'native-base';
import { Image } from 'react-native';
/*============================================================================*/
//export class Main
export default class CardComponent extends Component{
  render() {
    return(
      <Card>
        <CardItem>
          <Left>
            <Thumbnail
              // source={require('../../images/no_avatar.jpg')}
              source={this.props.profileImage}
            />
            <Body>
              <Text>This is my profile</Text>
              <Text note>23 February, 2018</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem>
          <Image
            // source={require('../../images/images4.jpg')} style={{height: 200, width: null, flex: 1}}
            source={this.props.bodyImage} style={{height: 200, width: null, flex: 1}}
          />
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent>
              <Icon name="md-heart" />
            </Button>
            <Button transparent>
              <Icon name="md-chatbubbles" />
            </Button>
            <Button transparent>
              <Icon name="md-send" />
            </Button>
          </Left>
          <Right>
            <Text>1000 likes</Text>
          </Right>
        </CardItem>
        <CardItem>
          <Body>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Text>
          </Body>
        </CardItem>
      </Card>
    )
  }
}
