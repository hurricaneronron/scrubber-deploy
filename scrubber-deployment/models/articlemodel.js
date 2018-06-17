var mongoose = require('mongoose')

var Schema = mongoose.Schema

var articlemodel = new Schema({
    title: {
        type: String,
        required: true,
        default: 'No Title Available'
    },
    date: {
        type: String,
        required: true,
        default: '2000-00-00T00:00:00Z'
    },
    url: {
      type: String,
      required: true,
      default: 'http://www.nytimes.com/'
    },
    date_added: {
        type: Date,
        default: Date.now
    }
})

var Article = mongoose.model('Article', articlemodel)

module.exports = Article
