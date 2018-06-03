import React, { Component } from 'react'
import { View, StatusBar, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import {
    Container,
    Header,
    Body,
    Title,
    Content
} from 'native-base';

import {Actions} from 'react-native-router-flux';

import styled from "styled-components";

const IMAGES = {
    DAREDEVIL: require('../../assets/images/devil.png'),
    HULK_RION:  require('../../assets/images/hulk-rion.png'),
    VENON_SPIDERMAN:  require('../../assets/images/venon-spiderman.png'),
    WOLVERINE_CHAOS:  require('../../assets/images/wolverine-chaos.png')
}

let styles = StyleSheet.create({
    header: {
        backgroundColor: '#fff'
    },

    headerBody: {
        alignItems: 'center',
        justifyContent: 'center'
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
        minHeight: 170,
        width: undefined,
        marginBottom: 8,
        marginHorizontal: 8,
        backgroundColor: '#000',
        elevation: 4
    },

    menuItemText: {
        marginRight: 16,
        marginBottom: 8,
        color: '#fff',
        fontSize: 36,
        fontWeight: 'bold',
        alignSelf: 'flex-end',
        zIndex: 2
    }
})

const StyledMenuImage = styled.Image`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    opacity: 0.8;
`;

class Home extends Component {
    render() {
        return(
            <Container>
                <Header style={styles.header} androidStatusBarColor='#FAFAFA'>
                    <StatusBar
                    backgroundColor="white"
                    barStyle="dark-content"
                    />
                    <Body style={styles.headerBody}>
                        <Title style={styles.headerTitle}>MARVEL</Title>
                    </Body>
                </Header>

                <Content style={{flexDirection: 'column', backgroundColor: '#fff'}}>

                    <TouchableOpacity
                    activeOpacity={.7}
                    style={[styles.menuItemContainer, {marginTop: 8}]}
                    onPress={ () => Actions.push('characters') }>
                        <StyledMenuImage
                            source={IMAGES.HULK_RION}>
                        </StyledMenuImage>
                        <Text style={styles.menuItemText}>CHARACTERS</Text>
                    </TouchableOpacity>

                    <View style={styles.menuItemContainer}>
                        <StyledMenuImage
                            source={IMAGES.DAREDEVIL}>
                        </StyledMenuImage>
                        <Text style={styles.menuItemText}>COMICS</Text>
                    </View>

                    <View style={styles.menuItemContainer}>
                        <StyledMenuImage
                            source={IMAGES.VENON_SPIDERMAN}>
                        </StyledMenuImage>
                        <Text style={styles.menuItemText}>CREATORS</Text>
                    </View>

                    <View style={styles.menuItemContainer}>
                        <StyledMenuImage
                            source={IMAGES.WOLVERINE_CHAOS}>
                        </StyledMenuImage>
                        <Text style={styles.menuItemText}>EVENTS</Text>
                    </View>

                </Content>
            </Container>
        )
    }
}

export default Home