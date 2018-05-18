const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const requestLog = require('../models/requests')

const app = require('../app')

const login = (req, res) => {

  if (req.body.username && req.body.password) {
    var token = jwt.sign({
      "username": req.body.username,
      "password": req.body.password
    }, "139.A.Z.X", {
      expiresIn: 86400 // expires in 24 hours
    });
    res.json({
      success: true,
      message: 'Authenticated',
      token: token
    });

    res.end("<----End-of-Response---->")

    let requests = new requestLog({
      "Timestamp": new Date().toISOString(),
      "API": "/login",
      "Res Code": res.statusCode
    })

    requests.save((err, data) => {
      if (err) console.log(err)
      else {
        console.log(data)
      }
    })
  }
}
module.exports = login