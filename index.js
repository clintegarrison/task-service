var express = require('express')
var app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/tasks', function (req, res) {
  res.send('hello world')
})

app.listen(process.env.PORT || 9090, function(){
    console.log('starting server on port 9090')
})