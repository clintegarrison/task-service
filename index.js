var express = require('express')
var app = express()
var dbManager = require('./dbManager')

// respond with "hello world" when a GET request is made to the homepage
app.get('/tasks', function (req, res) {
  dbManager.getTasks(function(tasks){
    res.send(tasks)
  })
})

app.listen(process.env.PORT || 9090, function(){
    console.log('starting server')
    dbManager.connect()
    console.log('connecting to db')
})