import React, { Component } from 'react'
import { render } from 'react-dom'
import Styles from './app.scss'

class App extends Component {
    render() {
        return (
            <h1>Hello from React!</h1>
        )
    }
}
render(<App />, document.getElementById('root'))
