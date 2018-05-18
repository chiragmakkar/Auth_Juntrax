const request = require('request')
const key = "AIzaSyBszjTKMcnhD_42nNB43xtPZmv2pKfvCzE"
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const requestLog = require('../models/requests')

var num = 0
var time

var limit = 10

const geo = (req, res) => {

    if (req.body.limit) {
        if (req.body.token) {
            let token = req.body.token
            jwt.verify(token, "139.A.Z.X", (err1, decoded) => {
                if (!err1 && decoded) {
                    limit = req.body.limit
                    res.json({
                        "message": `limit changed to ${limit}`
                    })
                }
            })
        } else {
            return res.status(403).send({
                success: false,
                message: 'No token provided.'
            })
        }
    }

    else if(req.body.lat && req.body.lng){
        num++
        if (num == 1) {
            time = Date.now()
        }

        if (num <= limit && ((Date.now() / 1000) - (time / 1000) <= 3600)) {
            request(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${req.body.lat},${req.body.lng}&key=${key}`, (err, resp, body) => {
                console.log(JSON.parse(body).results[0].formatted_address)
                res.json({
                    "latitude": req.body.lat,
                    "longitude": req.body.lng,
                    "address": JSON.parse(body).results[0].formatted_address
                })
            })
        } else {
            res.json({
                "message": "Limit exceeded. Please wait for another hour!"
            })
        }
    }



    let requests = new requestLog({
        "Timestamp": new Date().toISOString(),
        "API": "/geo",
        "Res Code": res.statusCode
    })

    requests.save((err, data) => {
        if (err) console.log(err)
        else {
            console.log(data)
        }
    })

}

module.exports = geo