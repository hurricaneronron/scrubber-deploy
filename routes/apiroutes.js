var Router = require('express').Router()
var db = require('../models')
var path = require('path')

// query DB for all saved articles
Router.get('/articles', function(req, res) {
    db.Article.find({}).sort({date_added: -1})
      .then(r => {
          res.json(r)
      })
      .catch(e => {
        console.log(e)
      })
})

// save article to DB
Router.post('/articles', function(req, res) {
    db.Article.create({
      title: req.body.title,
      date: req.body.date,
      url: req.body.url
    })
      .then(r => {
        res.json(r)
      })
      .catch(e => {
        console.log(e)
      })
})

// delete saved article from DB
Router.delete('/articles/:id', function(req, res) {
  db.Article.remove({
    _id: req.params.id,
  })
    .then(r => {
        res.json(r)
    })
    .catch(e => {
        console.log(e)
    })
})

Router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
})

module.exports = Router