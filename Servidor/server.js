const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const Nedb = require('nedb')
const db = new Nedb({ filename: './database.db', autoload: true })
const app = express()

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/books', (req, res) => {
    db.find({}, (err, books) => {
        res.json(books)
    })
})

app.post('/books', (req, res) => {
    db.insert({
        name: req.body.name,
        author: req.body.author
    }, (err, doc) => {
        res.json(doc)
    })
})

app.delete('/books/:id', (req, res) => {
    db.remove({
        id: req.params.id
    }, (err, doc) => {
        res.json({
            success: true
        })
    })
})

app.listen(3000, () => {
    console.log('Rodando!')
})