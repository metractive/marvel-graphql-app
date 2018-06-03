import React, { Component } from 'react'
import { Actions, Router, Stack, Scene } from 'react-native-router-flux'
import { Root } from 'native-base'  
import { BackHandler } from 'react-native'

// Apollo (GraphQL)
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'

import Home from './scenes/Home'
import Characters from './scenes/Characters'

class App extends Component {
    constructor (props) {
        super(props)

        // Create apollo client instance
        this.client = new ApolloClient({ 
            uri: 'https://marvel-graphql-server.herokuapp.com'
        })

        // Bind methods
        this.onBackHandlerClick = this.onBackHandlerClick.bind(this)
        this.lastTimePressedBack = null
    }

    onBackHandlerClick () {
        if (Actions.state.index == 0) {
            if (!this.lastTimePressedBack) {
                // Set last time pressed (getTime)
                this.lastTimePressedBack = new Date().getTime()
                return true
            }

            // Get difference in seconds (from lastTimePressedBack - now)
            let now = new Date().getTime()
            let diff = Math.abs((this.lastTimePressedBack - now) / 1000)

            // In case the difference is less than 2 seconds, close app
            if (diff < 2) return false

            // In case the difference is bigger, update last time pressed back
            this.lastTimePressedBack = new Date().getTime()

            return true
        }

        Actions.pop()
        return true
    }

    render () {
        return (
            <ApolloProvider client={this.client}>
                <Root>
                    <Router backAndroidHandler={this.onBackHandlerClick}>
                        <Stack key="root">
                            <Scene 
                                key="home"
                                component={Home}
                                title="Home"
                                hideNavBar
                                initial
                            />

                            <Scene
                                key="characters"
                                component={Characters}
                                title="Characters"
                                hideNavBar
                            />
                        </Stack>
                    </Router>
                </Root>
            </ApolloProvider>
        )
    }
}

export default App