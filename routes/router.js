const express = require('express')
const router = express.Router()

const mongo = require('mongoose')
const jwt = require('jsonwebtoken')

mongo.connect('mongodb://admin:admin@ds227740.mlab.com:27740/juntrax')

router.get('/', (req, res) => {
    res.json({"message" : "Hi! You know for rest :)"})
})

module.exports = router