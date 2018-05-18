const express = require('express')
const router = express.Router()

const mongo = require('mongoose')
const jwt = require('jsonwebtoken')

var requestLog = require('../models/requests')

mongo.connect('mongodb://admin:admin@ds227740.mlab.com:27740/juntrax')

router.get('/', (req, res) => {
    res.json({"message" : "Hi! You know for rest :)"})
})

router.post('/login', require('../modules/login'))

const auth = require('../modules/protect')

router.post('/log', require('../modules/log'))

router.get('/logs', require('../modules/logs'))

router.post('/geo', require('../modules/geo'))

router.post('/status', auth, require('../modules/status'))

router.post('/uptime', auth, require('../modules/uptime'))

module.exports = router