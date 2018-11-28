const database = require('./database-connection')

module.exports = {
    listAll(){
        return database('students')
    },
    getById(id){
        return database('students').where('id', id).first()
    },
    createStudent(newKid){
        return database('students').insert(newKid).returning('*')
    },
    editEntry(changedProperty, id){
        return database('students').where('id', id).update(changedProperty).returning('*')
    },
    delete(id){
        return database('students').where('id', id).del().returning('*')
    }
}