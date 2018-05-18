# Auth_Juntrax
Juntrax Backend Assignment

## Introduction
> This is the backend server setup for the assignment by JUNTRAX Solutions.

> Technologies used : Node & MongoDB

## Installation and Running

> npm install

> npm start

* Optional Setup : Mention custom port

> npm start custom_port

## Routes

Protocol | Route Address | Input Parameters | Output JSON Expectation
--- | --- | --- | ---
GET | / | None | Welcome Message
POST | /auth/register | fullName, userName, email, phone, passEnter, passConfirm | Success/Error Message
GET | /auth/verify/:username/:code | None | Success/Error Message
POST | /auth/verify/phone/:username | otp | Success/Error Message
POST | /auth/login | username, password | Success Message -> Token or Error Message
GET | /auth/logout | token (Header: x-access-token) or Params | Success/Error Message
POST | /auth/change-password | token, oldPassword, newPassword | Success/Error Message
GET | /cron?options | None | Success Message
