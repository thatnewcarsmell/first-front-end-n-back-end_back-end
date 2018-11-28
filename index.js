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
    // let { workaround } = req.body
    // console.log(workaround)
    property = req.body
    // if(req.url.includes('change')){
    //     switch (req.body[key]) {
    //         case 'name':
    //         case 
    //     }
    // }
    next()
})
  
app.get('/students', (req, res) => {
    queries.listAll().then(students => res.send(students))
})

app.get('/student/:id', (req, res) => {
    queries.getById(id).then(student => res.send(student))
})

app.post('/student', (req, res) => {
    queries.createStudent(req.body).then(student => res.send(student[0]))
})

app.patch('/student/change/:id', (req, res) => {
    // console.log(property)
    // let property = { req.body }
    queries.editEntry(property, id).then(student => res.send(student))
})

app.use((err, req, res, next) => {
    const status = err.status || 500
    res.status(status).json({ error: err })
})

app.listen(port, () => {
    console.log(`There's something fishy going on over at port:${port}!!!!!!`)
})