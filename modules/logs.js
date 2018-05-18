const mongoose = require('mongoose')
const requestLog = require('../models/requests')

const logs = (req, res) => {

    let requests = new requestLog({
        "Timestamp": new Date().toISOString(),
        "API": "/logs",
        "Res Code": res.statusCode
    })

    requests.save((err, data) => {
        if (err) console.log(err)
        else {
        }
    })

    requestLog.find({}, (err, reqs) => {
        if (err) console.log(err)
        else {
            res.json(reqs)
        }
    })
}

module.exports = logs