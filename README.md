# Auth_Juntrax
> URL - https://juntrax.herokuapp.com/

## Introduction
> This is the backend server setup for the assignment by JUNTRAX Solutions.

> Technologies used : Node & MongoDB

> Deployment : Heroku || Git

> Testing : Mocha & Chai

## Installation and Running

> npm install

> npm start

* Optional Setup : Mention custom port

> npm start custom_port

* For Testing

> npm test 

## Routes

Protocol | Route Address | Input Parameters | Output JSON Expectation
--- | --- | --- | ---
GET | / | None | Welcome Message
POST | /login | username, password | Success Message -> Token
POST | /log (secure) | token, timestamp1, timestamp2 | Array of logs(in JSON)
POST | /logs (secure) | token | Array of all logs(in JSON)
POST | /geo | lat, lng | Address(in JSON)
POST | /geo (secure) | token, limit | Success/Error Message
POST | /status (secure)| token | Success/Error Message
POST | /uptime (secure) | token | Uptime(in seconds)
