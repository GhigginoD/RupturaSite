const express = require('express');
const route = express.Router()

route.get('/', (req, res) => {res.render("landingPage");});
route.get('/login', (req, res) => {res.render("login")});
route.get('/register', (req, res) => {res.render("register")});

module.exports = route