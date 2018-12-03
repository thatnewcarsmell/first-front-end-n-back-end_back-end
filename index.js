const express = require('express')
const app = express()
const parser = require('body-parser')
const cors = require('cors')
const queries = require('./queries')
const port = process.env.PORT || 3000

app.use(parser.json())
app.use(cors())

const acceptableKeys = ['subject', 'read', 'starred', 'selected', 'labels', 'body']

app.param(['id', 'property', 'ids'], async (req,res,next,value) => {
    
    id = parseInt(value)
    
    property = req.body
    for (let keys in property){
        if (!acceptableKeys.includes(keys)) return next({status: 400, message: 'One or more keys was inaccurate.'})
    }
    
    ids = await queries.listMessagesIds().map(item => Object.values(item)[0])
    if (!ids.includes(id) && req.method !== 'PUT') next({status: 404, message: 'The record ID you have selected does not exist.'})
    
    next()
})
  
app.get('/messages', (req, res) => {
    queries.listAllMessages().then(messages => res.status(200).send(messages))
})

app.get('/messages/:id', (req, res) => {
    queries.getMessageById(id).then(Message => res.status(200).send(Message))
})

app.post('/messages', (req, res) => {
    queries.createMessage(property).then(Message => res.status(201).send(Message[0]))
})

app.patch('/messages/:id', (req, res, next) => {
    queries.editMessage(property, id).then(Message => res.status(200).send(Message[0]))
})

app.put('/messages/:id', (req, res, next) => {
    ids.includes(id) ? queries.editMessage(property, id).then(Message => res.status(200).send(Message[0])) : (
        queries.createMessage(property).then(Message => res.status(201).send(Message[0]))
    )
})

app.delete('/messages/:id', (req, res) => {
    queries.deleteMessage(id).then(deletee => res.status(200).send(deletee[0]))
})

app.use((err, req, res, next) => {
    const status = err.status || 500
    res.status(status).json({ error: err })
})

app.listen(port, () => {
    console.log(`There's something fishy going on over at port:${port}!!!!!!`)
})