const express = require('express');
const router = express.Router();
const signIn = require('../controllers/signin-verification.js');
const db = require('../database/dbconfig.js');
const bcrypt = require('bcrypt');

router.route('/')
.post(signIn.signInVerification(bcrypt, db))


module.exports = router;