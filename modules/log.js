const mongoose = require('mongoose')
const requestLog = require('../models/requests')

const log = (req, res) => {

    if (req.body.timestamp1 && req.body.timestamp2) {
        let requests = new requestLog({
            "Timestamp": new Date().toISOString(),
            "API": "/log",
            "Res Code": res.statusCode
        })

        requests.save((err, data) => {
            if (err) console.log(err)
            else {
                // console.log(data)
            }
        })

        requestLog.find({
            "Timestamp": {
                "$gte": new Date(parseInt(req.body.timestamp1 * 1000)).toISOString(),
                "$lte": new Date(parseInt(req.body.timestamp2 * 1000)).toISOString()
            }
        }, (err, reqs) => {
            if (err) console.log(err)
            else {
                // console.log(reqs)
                res.json(reqs)
            }
        })
    }
}

module.exports = log