const mongoose = require('mongoose')
const requestLog = require('../models/requests')

const status = (req, res) => {
    let requests = new requestLog({
        "Timestamp": new Date().toISOString(),
        "API": "/status",
        "Res Code": res.statusCode
      })
    
      requests.save((err, data) => {
        if(err) console.log(err)
        else{
          console.log(data)
        }
      })

    res.json({
        "message": "You're logged in!",
        "data": req.decoded
    })
}

module.exports = status