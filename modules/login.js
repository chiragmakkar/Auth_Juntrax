const bcrypt = require('bcrypt');
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const app = require('../app')

const login = (req, res) => {

  var token = jwt.sign({"username": req.body.username, "password": req.body.password}, "139.A.Z.X", {
    expiresIn: 86400 // expires in 24 hours
  });
  res.json({
    success: true,
    message: 'Authenticated',
    token: token
  });
}
module.exports = login