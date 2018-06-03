import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

class Characters extends Component {
    render () {
        const ALL_CHARACTERS = gql`
            {
                allCharacters {
                    id
                    name
                }
            }
        `

        return (
            <View>
                <Query
                    query={ALL_CHARACTERS}>
                    {({ loading, error, data }) => {
                        if (loading) return <Text>Loading</Text>
                        if (error) return <Text>Error :(</Text>

                        return data.allCharacters.map(character => {
                            return (
                                <Text>{character.id} - {character.name}</Text>
                            )
                        })

                        // return data
                    }}
                </Query>
            </View>
        )
    }
}

export default Characters