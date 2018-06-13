import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

import { Container, Content, Icon, Button } from 'native-base'
import HeaderComponent from './HeaderComponent'

class SettingsComponent extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Settings",
        // headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
        drawerIcon:
            // <Image
            //     source={require('../../images/settings.png')}
            //     style={[styles.icon]}
            // />
            <Icon name="md-settings"/>
    })

    render() {
        return (

            <Container>

                <HeaderComponent
                    title="Settings"
                    drawerOpen={() => this.props.navigation.navigate("DrawerOpen")}
                />
                <Content contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
                    <Button
                        full
                        onPress={() => this.props.navigation.navigate('Home')}>
                        <Text style={{ color: 'white' }}>Go to Home screen</Text>
                    </Button>
                </Content>
            </Container>
        )
    }

}

export default SettingsComponent
//
// const styles = StyleSheet.create({
//     icon: {
//         height: 24,
//         width: 24
//     }
// })
