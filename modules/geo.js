const request = require('request')
const key = "AIzaSyBszjTKMcnhD_42nNB43xtPZmv2pKfvCzE"

const geo = (req, res) => {
    request(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${req.body.lat},${req.body.lng}&key=${key}`, (err, resp, body) => {
        console.log(JSON.parse(body).results[0].formatted_address)
        res.json({
            "latitude" : req.body.lat,
            "longitude" : req.body.lng,
            "address" : JSON.parse(body).results[0].formatted_address
        })
    })
}

module.exports = geo