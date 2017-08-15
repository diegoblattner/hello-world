var app = require('express')()
var http = require('http').Server(app)
var io = require('socket.io')(http)

http.listen(1337, '0.0.0.0', function () {
  console.log('listening on *:1337')
})

let users = {}
let messages = []

function makeID () {
  let text = ''
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (let i = 0; i < 16; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return text
}

function composeMessage (message, name = 'Dojo Chat') {
  return {
    message,
    name,
    _id: makeID(),
    messageSent: new Date()
  }
}
function sendMessage (composedMessage) {
  io.emit('newMessageDown', composedMessage)
}

io.on('connection', function (socket) {
  socket.on('newUser', name => {
    users[socket.id] = { name }

    let composedMessage = composeMessage(`${users[socket.id].name} has joined the chat`)

    sendMessage(composedMessage)
  })

  socket.on('newMessageUp', message => {
    let composedMessage = composeMessage(message, users[socket.id].name)

    messages.push(composedMessage)

    sendMessage(composedMessage)
  })
})
