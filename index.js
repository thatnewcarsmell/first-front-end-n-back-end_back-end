const express = require('express')
const app = express()
const parser = require('body-parser')
const cors = require('cors')
const queries = require('./queries')
const port = process.env.PORT || 3000

app.use(parser.json())
// app.use(cors)

app.param('id', (req,res,next,value) => {
    id = parseInt(value)
    // if(req.url.includes('series')){
    //   object = seriesDB.find(series => series.id === id)
    // } 
    // else if(req.url.includes('characters')){
    //   object = charactersDB.find(character => character.id === id)
    // }
    next()
  })
  

app.get('/students', (req, res) => {
    queries.listAll().then(students => res.send(students))
})

app.get('/student/:id', (req, res) => {
    queries.getById(id).then(student => res.send(student))
})

app.use((err, req, res, next) => {
    const status = err.status || 500
    res.status(status).json({ error: err })
})

app.listen(port, () => {
    console.log(`There's something fishy going on over at port:${port}!!!!!!`)
})