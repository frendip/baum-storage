const db = require('../db')

module.exports = (io, socket) => {
    const getMessages = () => {
        const messages = db.models.message.findAll({
            where: {
                id_chat: socket.roomID
            },
            attributes: [
                'id_msg',
                'msg',
                'id_user',
                'date'
            ]
        })

        io.in(socket.roomID).emit('messages', messages)
    }

    const addMessages = async (message) => {
        await db.models.message.create({
            id_chat: socket.roomID,
            date: new Date(),
            ...message
        })

        getMessages()
    }

    const removeMessage = async (messageID) => {
        await db.models.message.destroy({
            where: {
                id_msg: messageID
            }
        })

        getMessages()
    }

    socket.on('message:get', getMessages)
    socket.on('message:add', addMessages)
    socket.on('message:remove', removeMessage)
}
