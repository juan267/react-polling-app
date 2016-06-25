const express = require('express')

const app = express()

app.use(express.static('../polling-app/dist'))
app.use(express.static('../polling-app/node_modules/bootstrap/dist'))

const server = app.listen(3000)
const io = require('socket.io').listen(server)

// Socket Io lifecicly functions

io.on('connection', (socket) => {
  console.log('Connected %s', socket.id)
}) // This function fires everytime a new connection is made between a client and the server

console.log('Express server listening on port 3000')
