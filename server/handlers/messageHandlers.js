const db = require('../db')

module.exports = (io, socket) => {
    const getMessages = async () => {
        const { roomID } = socket.handshake.query

        const messages = await db.models.message.findAll({
            where: {
                id_chat: roomID
            },
            attributes: [
                'id_msg',
                'msg',
                'id_user',
                'date'
            ]
        })

        io.in(roomID).emit('messages', messages)
    }

    const addMessages = async (message) => {
        const { roomID } = socket.handshake.query

        await db.models.message.create({
            id_chat: roomID,
            date: new Date(),
            ...message
        })

        await getMessages()
    }

    const removeMessage = async (messageID) => {
        await db.models.message.destroy({
            where: {
                id_msg: messageID
            }
        })

        await getMessages()
    }

    socket.on('message:get', getMessages)
    socket.on('message:add', addMessages)
    socket.on('message:remove', removeMessage)
}
