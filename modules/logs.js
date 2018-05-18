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
            console.log(data)
        }
    })

    requestLog.find({}, (err, reqs) => {
        if (err) console.log(err)
        else {
            console.log(reqs)
            res.json(reqs)
        }
    })
}

module.exports = logs