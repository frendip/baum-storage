const express   = require('express');
const config    = require('config');
const cors      = require('cors')

const app       = express()
const server    = require('http').createServer(app)
const io        = require('socket.io')(server, {
    cors: {
        origin: '*'
    }
})

const PORT      = config.get('port') || 3000
const registerMessageHandler = require('./handlers/messageHandlers')
const registerUserHandler = require('./handlers/userHandlers')

app.use(cors())
app.use(express.json())
app.use('/auth', require('./routes/auth.routes'))
app.use('/lk', require('./routes/lk.routes'))

io.on('connection', (socket) => {
    console.log('New user connect...')

    const { roomID } = socket.handshake.query

    socket.roomID = roomID
    socket.join(roomID)

    registerMessageHandler(io, socket)
    registerUserHandler(io, socket)

    socket.on('disconnect', () => {
        console.log('User disconnected')
        socket.leave(roomID)
    })
})

server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}...`);
});
