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
    },

    menuItemContainer: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        height: 170,
        marginBottom: 8,
        marginHorizontal: 8,
        backgroundColor: '#000',
    },

    menuItemText: {
        marginRight: 8,
        marginBottom: 8,
        color: '#fff',
        fontSize: 36,
        fontWeight: 'bold',
        alignSelf: 'flex-end'
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

                <Content style={{flexDirection: 'column', backgroundColor: '#fff'}}>

                    <View style={[styles.menuItemContainer, {marginTop: 8}]}>
                        <Text style={styles.menuItemText}>CHARACTERS</Text>
                    </View>

                    <View style={styles.menuItemContainer}>
                        <Text style={styles.menuItemText}>COMICS</Text>
                    </View>

                    <View style={styles.menuItemContainer}>
                            <Text style={styles.menuItemText}>CREATORS</Text>
                    </View>

                </Content>
            </Container>
        )
    }
}

export default Home