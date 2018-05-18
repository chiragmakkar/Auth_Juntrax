const bcrypt = require('bcrypt');
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const app = require('../app')

const auth = (req, res, next) => {
	let token = req.body.token || req.params.token || req.headers['x-access-token'];
	if (token) {
		jwt.verify(token, "139.A.Z.X", (err1, decoded) => {

			req.decoded = decoded;
			next();
		});
	} else {
		return res.status(403).send({
			success: false,
			message: 'No token provided.'
		});
	}
}

module.exports = auth;