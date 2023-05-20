const { DataTypes } = require('sequelize')

const UserModel = {
    id_user: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    user_name: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    password: {
        type: DataTypes.TEXT('tiny'),
        allowNull: false
    },
    email: {
        type: DataTypes.TEXT('tiny'),
        allowNull: false
    }
}

module.exports = UserModel
