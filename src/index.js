import React, { Component } from 'react'
import { Actions, Router, Stack, Scene } from 'react-native-router-flux'
import { Root } from 'native-base'
import { BackHandler } from 'react-native'

import Home from './scenes/Home'

console.warn(Home)

class App extends Component {
    constructor (props) {
        super(props)

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
                    </Stack>
                </Router>
            </Root>
        )
    }
}

export default App