const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://0.0.0.0/mywalletapp', {useNewUrlParser: true})

//! When finally is using Restify, swap '0.0.0.0' for 'localhost'