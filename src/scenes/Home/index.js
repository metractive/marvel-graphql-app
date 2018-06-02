import React, { Component } from 'react'
import { View, StatusBar, StyleSheet, Text } from 'react-native'
import {
    Container,
    Header,
    Body,
    Title,
    Content
} from 'native-base';

let styles = StyleSheet.create({
    header: {
        backgroundColor: '#fff'
    },

    headerTitle: {
        color: "#ED1D24",
        fontFamily: 'bebas',
        fontWeight: 'bold'
    }
})

class Home extends Component {
    render() {
        return(
            <Container>
                <Header style={styles.header} androidStatusBarColor='#FAFAFA'>
                    <StatusBar
                    backgroundColor="white"
                    barStyle="dark-content"
                    />
                    <Body style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Title style={styles.headerTitle}><Text style={{fontFamily: 'bebas'}}>MARVEL</Text></Title>
                    </Body>
                </Header>

                <Content>

                    

                </Content>
            </Container>
        )
    }
}

export default Home