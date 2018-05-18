const mongoose = require('mongoose')
const requestLog = require('../models/requests')

const uptime = (req, res) => {
    
    let requests = new requestLog({
        "Timestamp": new Date().toISOString(),
        "API": "/uptime",
        "Res Code": res.statusCode
      })
    
      requests.save((err, data) => {
        if(err) console.log(err)
        else{
          console.log(data)
        }
      })

    res.json({"uptime": process.uptime()})

}

module.exports = uptime