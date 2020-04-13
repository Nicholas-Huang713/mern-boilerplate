const express = require('express');
const router = express.Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');
// const {registerValidation, loginValidation} = require('../validation');
const bcrypt = require('bcryptjs');
const path = require( 'path' );
const url = require('url');
require('dotenv').config();

//GET ALL USERS
router.get('/', (req, res) => {
    User.find({})
    .then((data) => {res.json(data)})
    .catch((error) => {console.log('Error: ' + error)});
});

module.exports = router;