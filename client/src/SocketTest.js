import React, { Component } from 'react'
import socketIOClient from 'socket.io-client'

// Making the App component
class SocketTest extends Component {
    constructor() {
        super()
        this.state = {
            endpoint: "http://localhost:8080", // this is where we are connecting to with sockets
            color: 'white'
        }
    
    }

    // method for emitting a socket.io event
    send = () => {
        const socket = socketIOClient(this.state.endpoint)
        
        // this emits an event to the socket (your server) with an argument of 'red'
        // you can make the argument any color you would like, or any kind of data you want to send.
        
        socket.emit('change color', this.state.color) ;
        // socket.emit('change color', 'red', 'yellow') | you can have multiple arguments
    }

    // adding the function
    setColor = (color) => {
        console.log(color, 'CC')
        this.setState({ color })
    }

  
   // render method that renders in code if the state is updated
    render() {
        // testing for socket connections

        console.log(this.state.color);

        const socket = socketIOClient(this.state.endpoint);
        socket.on('change color', (col) => {
            document.body.style.backgroundColor = col
        })

        return (
        <div style={{ textAlign: "center" }}>
                <button onClick={() => this.send() }>Change Color</button>


                <button id="blue" onClick={() => this.setColor('blue')}>Blue</button>
                <button id="red" onClick={() => this.setColor('red')}>Red</button>

            </div>
        )
    }
}

export default SocketTest