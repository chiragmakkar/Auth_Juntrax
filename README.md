# Auth_Juntrax
> URL - https://juntrax.herokuapp.com/

## Introduction
> This is the backend server setup for the assignment by JUNTRAX Solutions.

> Technologies used : Node & MongoDB

> Deployment : Heroku || Git

## Installation and Running

> npm install

> npm start

* Optional Setup : Mention custom port

> npm start custom_port

## Routes

Protocol | Route Address | Input Parameters | Output JSON Expectation
--- | --- | --- | ---
GET | / | None | Welcome Message
POST | /login | username, password | Success Message -> Token
POST | /log | token, timestamp1, timestamp2 | Array of logs(in JSON)
POST | /logs | token | Array of logs(in JSON)
POST | /geo | lat, lng | Address(in JSON)
POST | /geo | token, limit | Success/Error Message
POST | /status | token | Success/Error Message
POST | /uptime | token | Uptime(in seconds)
