const express = require("express")
const path = require("path")
const PORT = process.env.PORT || 3001
const app = express()
const bodyparser = require('body-parser')
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI ||'mongodb://localhost/scrubberDB')

// Middleware
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())
app.use(require('./routes/apiroutes'))

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"))
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"))
})

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`)
})
