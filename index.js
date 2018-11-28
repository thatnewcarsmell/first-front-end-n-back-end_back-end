const express = require('express')
const app = express()
const parser = require('body-parser')
const cors = require('cors')
const queries = require('./queries')
const port = process.env.PORT || 3000

app.use(parser.json())
app.use(cors())

app.param('id', (req,res,next,value) => {
    id = parseInt(value)
    next()
})
  
app.get('/students', (req, res) => {
    queries.listAll().then(students => res.send(students))
})

app.get('/student/:id', (req, res) => {
    queries.getById(id).then(student => res.send(student))
})

app.post('/student', (req, res) => {
    queries.createStudent(req.body).then(students => res.send(students[0]))
})

app.use((err, req, res, next) => {
    const status = err.status || 500
    res.status(status).json({ error: err })
})

app.listen(port, () => {
    console.log(`There's something fishy going on over at port:${port}!!!!!!`)
})