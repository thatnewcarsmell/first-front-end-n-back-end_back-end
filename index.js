const express = require('express')
const app = express()
const parser = require('body-parser')
const cors = require('cors')
const queries = require('./queries')
const port = process.env.PORT || 3000

app.use(parser.json())
app.use(cors())

const acceptableKeys = ['name', 'fave_animal', 'previous_occupation', 'hometown_lat', 'hometown_long', 'useless_superpower']

app.param(['id', 'property', 'ids'], async (req,res,next,value) => {
    
    id = parseInt(value)
    
    property = req.body
    for (let keys in property){
        if (!acceptableKeys.includes(keys)) return next({status: 400, message: 'One or more keys was inaccurate.'})
    }
    
    ids = await queries.listStudentsIds().map(item => Object.values(item)[0])
    if (!ids.includes(id) && req.method !== 'PUT') next({status: 404, message: 'The record ID you have selected does not exist.'})
    
    next()
})
  
app.get('/students', (req, res) => {
    queries.listAllStudents().then(students => res.status(200).send(students))
})

app.get('/students/:id', (req, res) => {
    queries.getStudentById(id).then(student => res.status(200).send(student))
})

app.post('/students', (req, res) => {
    queries.createStudent(property).then(student => res.status(201).send(student[0]))
})

app.patch('/students/:id', (req, res, next) => {
    queries.editStudent(property, id).then(student => res.status(200).send(student[0]))
})

app.put('/students/:id', (req, res, next) => {
    ids.includes(id) ? queries.editStudent(property, id).then(student => res.status(200).send(student[0])) : (
        queries.createStudent(property).then(student => res.status(201).send(student[0]))
    )
})

app.delete('/students/:id', (req, res) => {
    queries.deleteStudent(id).then(deletee => res.status(200).send(deletee[0]))
})

app.use((err, req, res, next) => {
    const status = err.status || 500
    res.status(status).json({ error: err })
})

app.listen(port, () => {
    console.log(`There's something fishy going on over at port:${port}!!!!!!`)
})