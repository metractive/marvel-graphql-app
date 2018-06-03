import React, { Component } from 'react'
import { ScrollView, View, Text, Image } from 'react-native'
import { Query } from 'react-apollo'
import { Button } from 'native-base'
import gql from 'graphql-tag'

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
            <View>
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
                                data.allCharacters.map(character => {
                                    return (
                                        <React.Fragment key={`character-${character.id}`}>
                                            <Image source={{ uri: character.thumbnail }} style={{ width: 100, height: 100 }} />
                                            <Text>{character.name}</Text>
                                        </React.Fragment>
                                    )
                                })
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
            </View>
        )
    }
}

export default Characters