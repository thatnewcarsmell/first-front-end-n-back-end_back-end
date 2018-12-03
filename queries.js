const database = require('./database-connection')

module.exports = {
    listMessagesIds(){
        return database('Messages').select('id')
    },
    listAllMessages(){
        return database('Messages')
    },
    getMessageById(id){
        return database('Messages').where('id', id).first()
    },
    createMessage(newMessage){
        return database('Messages').insert(newMessage).returning('*')
    },
    editMessage(changedProperty, id){
        return database('Messages').where('id', id).update(changedProperty).returning('*')
    },
    deleteMessage(id){
        return database('Messages').where('id', id).del().returning('*')
    }
}