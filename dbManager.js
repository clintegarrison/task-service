'use strict'

const { Client } = require('pg')
const client = new Client()

client.connect()

function getTasks(callback){
    executeQuery('SELECT * FROM tasks', [], function(result){
      callback(result)
    })
}

function executeQuery(sql, args, callback){
    console.log('SQL=', sql)
    console.log('ARGS=', args)
    client.query(sql, args, function(err, res) {
      if (err) {
        console.log(err.stack)
      } else {
        callback(res.rows)
      }
    })
}

var databaseManager = {
	getTasks: getTasks
}

module.exports = databaseManager;