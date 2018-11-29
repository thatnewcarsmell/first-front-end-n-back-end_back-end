const database = require('./database-connection')

module.exports = {
    listStudentsIds(){
        return database('students').select('id')
    },
    listAllStudents(){
        return database('students')
    },
    getStudentById(id){
        return database('students').where('id', id).first()
    },
    createStudent(newKid){
        return database('students').insert(newKid).returning('*')
    },
    editStudent(changedProperty, id){
        return database('students').where('id', id).update(changedProperty).returning('*')
    },
    deleteStudent(id){
        return database('students').where('id', id).del().returning('*')
    }
}