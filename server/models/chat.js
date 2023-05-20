const { DataTypes } = require('sequelize')

const ChatModel = {
    id_chat: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    chat_name: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    password: {
        type: DataTypes.TEXT('tiny'),
        allowNull: false
    }
}

module.exports = ChatModel
