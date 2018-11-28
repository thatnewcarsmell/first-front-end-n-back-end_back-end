const express = require('express')
const app = express()
const parser = require('body-parser')
const cors = require('cors')
const queries = require('./queries')
const port = process.env.PORT || 3000

app.use(parser.json())
app.use(cors())

app.param(['id', 'property'], (req,res,next,value) => {
    id = parseInt(value)
    property = req.body
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

app.patch('/students/:id', (req, res) => {
    let acceptableKeys = ['name', 'fave_animal', 'previous_occupation', 'hometown_lat', 'hometown_long', 'useless_superpower']
    for (let keys in property){
        if (!acceptableKeys.includes(keys)) return res.status(400).send('Try again')
    }
    queries.editEntry(property, id).then(student => res.send(student))
})

app.delete('/students/:id', (req, res) => {
    queries.delete(id).then(deletee => res.send(deletee))
})

app.use((err, req, res, next) => {
    const status = err.status || 500
    res.status(status).json({ error: err })
})

app.listen(port, () => {
    console.log(`There's something fishy going on over at port:${port}!!!!!!`)
})