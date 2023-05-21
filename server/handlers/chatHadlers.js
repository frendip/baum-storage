const db = require('../db')

module.exports = (io, socket) => {
    const getChats = async () => {
        const chats = await db.models.members.findAll({
            where: {
                id_user: socket.userID
            },
            attributes: [
                'chats.id_chat',
                'chats.chat_name'
            ],
            include: [db.models.chat]
        })

        console.log(chats)
        socket.rooms = chats

        chats.forEach((chat) => {
            socket.join(chat.id_chat)
        })

        socket.emit('chats', chats)
    }

    const addChat = async ({ userID, name, password }) => {
        const chat = await db.models.chat.findOne({
            where: {
                chat_name: name
            }
        })

        if (chat === null) {
            const new_chat = await db.models.chat.create({
                chat_name: name,
                password: password
            })

            await db.models.member.create({
                id_chat: new_chat.id_chat,
                id_user: userID
            })
        }

        await getChats()
    }

    const addUserToChat = async ({ userID, chatID }) => {
        const chat = await db.models.chat.findOne({
            where: {
                id_chat: chatID
            }
        })

        const member = await db.models.members.findOne({
            where: {
                id_char: chatID,
                id_user: userID
            }
        })

        if (chat !== null && member === null) {
            await db.models.member.create({
                id_chat: chatID,
                id_user: userID
            })
        }

        await getChats()
    }

    socket.on('chat:get', getChats)
    socket.on('chat:add', addChat)
    socket.on('chat:newUser', addUserToChat)
}
