var mongoose = require('mongoose')
var schema = mongoose.Schema

var requests = new schema({
    "Timestamp": String,
    "API": String,
    "Res Code": String
})

module.exports = mongoose.model('requests', requests)