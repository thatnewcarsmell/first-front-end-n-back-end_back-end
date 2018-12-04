const database = require('./database-connection')

module.exports = {
    listMessagesIds(){
        return database('messages').select('id')
    },
    listAllMessages(){
        return database('messages')
    },
    getMessageById(id){
        return database('messages').where('id', id).first()
    },
    createMessage(newMessage){
        return database('messages').insert(newMessage).returning('*')
    },
    editMessage(changedProperty, id){
        return database('messages').where('id', id).update(changedProperty).returning('*')
    },
    deleteMessage(id){
        return database('messages').where('id', id).del().returning('*')
    }
}