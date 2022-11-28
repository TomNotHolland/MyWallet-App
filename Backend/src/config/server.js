const express = require('express')
const bodyParser = require('body-parser')
const server = express()
const port = 3000
const allowCors = require('./cors')
const queryParser = require('express-query-int')

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)
server.use(queryParser())

server.listen(port, function () {
  console.log(`Server is running on PORT ${port} 🚀✅`)
})

module.exports = server