const express = require('express')
const router = express.Router()

const mongo = require('mongoose')
const jwt = require('jsonwebtoken')

mongo.connect('mongodb://admin:admin@ds227740.mlab.com:27740/juntrax')

router.get('/', (req, res) => {
    res.json({"message" : "Hi! You know for rest :)"})
})

router.post('/login', require('../modules/login'))

const auth = require('../modules/protect')

router.post('/status', auth, (req, res) => {
    res.json({
        "message": "You're logged in!",
        "data": req.decoded
    })
})

module.exports = router