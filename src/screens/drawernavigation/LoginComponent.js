import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image
} from "react-native";

//library imports
import { Icon, Button, Container, Header, Content, Left } from 'native-base'

//custom components imports
import HeaderComponent from './HeaderComponent'

class LoginComponent extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Home",
    // headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
    drawerLabel: 'Logout',
    drawerIcon: ({ tintColor }) => (
      // <Image
      //   source={require('../../images/home.png')}
      //   style={styles.icon}
      // />
      <Icon name="md-log-out"/>
    ),
    header: () => null,
    // disableOpenGesture: true
    drawerLockMode: 'locked-closed'
  })

  render() {
    return (

      <Container>

        {/* <HeaderComponent title="Cloud" drawerOpen={() => this.props.navigation.navigate('DrawerOpen')} /> */}
        {/* <HeaderComponent title="Home" navigate={this.props.navigation.navigate} /> */}
        {/* <HeaderComponent {..this.props} /> */}

        <Content
          contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
          <Button
            onPress={() => this.props.navigation.navigate('Home')} full>
            <Text style={{ color: 'white' }}>Login Screen</Text>
          </Button>
        </Content>

      </Container>

    )
  }

}

export default LoginComponent;

//
// const styles = StyleSheet.create({
//   icon: {
//     width: 24,
//     height: 24,
//   },
// });
