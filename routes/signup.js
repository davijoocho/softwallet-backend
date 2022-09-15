const express = require('express');
const router = express.Router();
const db = require('../database/dbconfig.js');
const bcrypt = require('bcrypt');
const signUp = require('../controllers/signup-create.js');


router.route('/')
.post(signUp.createNewAccount(bcrypt, db))


module.exports = router;

