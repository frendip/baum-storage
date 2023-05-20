const { Sequelize } = require("sequelize")
const config = require("config")
const UserModel = require('./models/user')
const ChatModel = require("./models/chat")
const MessageModel = require("./models/message");
const MembersModel = require("./models/members");

const db_config = config.get('db')
const db = new Sequelize(db_config.database, db_config.user, db_config.password, {
    host: db_config.host,
    port: db_config.port,
    dialect: 'mysql'
});

(async function () {
    try {
        await db.authenticate()
        console.log(`Connection with ${db_config.database} has been established successfully!`)
    } catch (error) {
        console.log(`Unable to connect to ${db_config.database}, error: ${error}!`)
    }
})()

db.define('user', UserModel);
db.define('chat', ChatModel);
db.define('message', MessageModel);
db.define('members', MembersModel);

(async () => {
    try {
        await db.models.user.sync()
        await db.models.chat.sync()
        await db.models.message.sync()
        await db.models.members.sync()
        console.log(`Synchronization with ${db_config.database} has been successes!`)
    } catch (error) {
        console.log(`Unable to synchronize with ${db_config.database}, error ${error}!`)
    }
})()

module.exports = db
