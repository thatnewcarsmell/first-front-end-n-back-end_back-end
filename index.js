const express = require('express')
const app = express()
const parser = require('body-parser')
const queries = require('./queries')
const port = process.env.PORT || 3000



app.get('/', (req, res) => {
    queries.listAll().then(students => res.send(students))
})

app.use((err, req, res, next) => {
    const status = err.status || 500
    res.status(status).json({ error: err })
})

app.listen(port, () => {
    console.log(`There's something fishy going on over at port:${port}!!!!!!`)
})