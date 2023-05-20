const { DataTypes, Deferrable} = require('sequelize')

const MembersModel = {
    id: {
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
    id_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id_user',
            deferrable: Deferrable.INITIALLY_IMMEDIATE()
        }
    },
}

module.exports = MembersModel
