import React, { Component } from 'react'
import {
    ScrollView,
    View,
    Text,
    Image,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
    List,
    FlatList
} from 'react-native'

import {
    Container,
    Header,
    Body,
    Title,
    Content
} from 'native-base';

import { Query } from 'react-apollo'
import { Button } from 'native-base'
import gql from 'graphql-tag'

import styled from "styled-components";

const CharacterContainer = styled.View`
    flex: 1;
    height: 180;
    alignItems: center;
    justifyContent: center;
    backgroundColor: #fff;
`;

const CharacterImage = styled.Image`
    width: 100%;
    flex: 1;
    height: 150;
    resizeMode: cover;
`;

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
    }
})

class Characters extends Component {
    render () {
        const ALL_CHARACTERS = gql`
            query Characters($offset: Int) {
                allCharacters(offset: $offset) {
                    id
                    name
                    thumbnail
                }
            }
        `
        return (
            <Container>

                <Header style={styles.header} androidStatusBarColor='#FAFAFA'>
                    <StatusBar
                    backgroundColor="white"
                    barStyle="dark-content"
                    />
                    <Body style={styles.headerBody}>
                        <Title style={styles.headerTitle}>CHARACTERS</Title>
                    </Body>
                </Header>
                
                <Query
                    query={ALL_CHARACTERS}
                    variables={{
                        offset: 0
                    }}>

                    {({ loading, error, data, fetchMore }) => {
                        if (loading) return <Text>Loading</Text>
                        if (error) return <Text>Error :(</Text>

                        return (
                            <ScrollView>
                               {
                                   (data.allCharacters) && (
                                        <FlatList
                                        data={data.allCharacters}
                                        numColumns={2}
                                        renderItem={({item}) => 
                                                <CharacterContainer key={`character-${item.id}`} style={{margin: 8, elevation: 4, borderRadius: 8}}>
                                                    <CharacterImage
                                                        source={{ uri: item.thumbnail }}
                                                        style={{borderTopLeftRadius: 8, borderTopRightRadius: 8}}/>
                                                    <Text style={{color: '#000', fontWeight: 'bold'}}>{item.name}</Text>
                                                </CharacterContainer>
                                        }>
                                        </FlatList>
                                   )
                               }
                            <Button 
                                onPress={() => {
                                    return fetchMore({
                                        variables: {
                                            offset: data.allCharacters.length
                                        },
                                        updateQuery: (prev, { fetchMoreResult }) => {
                                            console.log(prev, fetchMoreResult)
                                            if (!fetchMoreResult) return prev
                                            
                                            return Object.assign({}, prev, {
                                                allCharacters: [...prev.allCharacters, ...fetchMoreResult.allCharacters]
                                            })
                                        }
                                    })
                                }}>
                                    <Text>Carregar Mais</Text>
                                </Button>
                            </ScrollView>
                        )

                        // return data
                    }}
                </Query>
            </Container>
        )
    }
}

export default Characters