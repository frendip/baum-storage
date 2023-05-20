const { DataTypes, Deferrable} = require('sequelize')

const MessageModel = {
    id_msg: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    id_chat: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'chats',
            key: 'id_chat',
            deferrable: Deferrable.INITIALLY_IMMEDIATE()
        }
    },
    msg: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    id_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id_user',
            deferrable: Deferrable.INITIALLY_IMMEDIATE()
        }
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    }
}

module.exports = MessageModel
