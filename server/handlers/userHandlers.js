const db = require('../db')

module.exports = (io, socket) => {
    const getUsers = async () => {
        const users = await db.models.user.findAll()

        io.in(socket.roomID).emit('users', users)
    }

    const addUser = async ({ userID }) => {
        const user = await db.models.user.findOne({
            where: {
                id_user: userID
            }
        })

        if (user !== null) {
            await db.models.user.update({
                status: 1
            }, {
                where: {
                    id_user: user.id_user
                }
            })
        }

        await getUsers()
    }

    const removeUser = async (userID) => {
        const user = await db.models.user.findOne({
            where: {
                id_user: userID
            }
        })

        if (user !== null) {
            await db.models.user.update({
                status: 0
            }, {
                where: {
                    id_user: user.id_user
                }
            })
        }

        await getUsers()
    }

    socket.on('user:get', getUsers)
    socket.on('user:add', addUser)
    socket.on('user:leave', removeUser)
}
