const express = require('express')
const app = express()
const parser = require('body-parser')
const cors = require('cors')
const queries = require('./queries')
const port = process.env.PORT || 3000
const acceptableKeys = ['name', 'fave_animal', 'previous_occupation', 'hometown_lat', 'hometown_long', 'useless_superpower']

app.use(parser.json())
app.use(cors())

app.param(['id', 'property'], async (req,res,next,value) => {
    id = parseInt(value)
    property = req.body
    let ids = await queries.listIds().map(item => Object.values(item)[0])
    if (!ids.includes(id)) next({status: 404, message: 'The record ID you have selected does not exist.'})
    next()
})
  
app.get('/students', (req, res) => {
    queries.listAll().then(students => res.send(students))
})

app.get('/students/:id', (req, res) => {
    queries.getById(id).then(student => res.send(student))
})

app.post('/students', (req, res) => {
    queries.createStudent(req.body).then(student => res.send(student[0]))
})

app.patch('/students/:id', (req, res, next) => {
    for (let keys in property){
        if (!acceptableKeys.includes(keys)) return next({status: 400, message: 'One or more keys was inaccurate.'})
    }
    queries.editEntry(property, id).then(student => res.send(student[0]))
})

app.delete('/students/:id', (req, res) => {
    queries.delete(id).then(deletee => res.send(deletee[0]))
})

app.use((err, req, res, next) => {
    const status = err.status || 500
    res.status(status).json({ error: err })
})

app.listen(port, () => {
    console.log(`There's something fishy going on over at port:${port}!!!!!!`)
})