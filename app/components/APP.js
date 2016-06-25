import React from 'react'
import io from 'socket.io-client'
import Header from './parts/Header.js'

const App = React.createClass({
  getInitialState () {
    return {
      status: 'disconected'
    }
  },
  componentWillMount () {
    this.socket = io('http://localhost:3000')
    this.socket.on('connect', this.connect)
  },
  connect () {
    console.log('Connected' + this.socket.id)
    this.setState({
      status: 'connected'
    })
  },
  render () {
    return (
      <div>
        <Header title='Hello world from react' status={this.state.status} />
      </div>
    )
  }
})

export default App
