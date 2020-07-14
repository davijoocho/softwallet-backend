const express = require('express');
const router = express.Router()
require('dotenv').config()
const db = require('../database/dbconfig.js');
const plaid = require('plaid');
const accessToken = require('../controllers/access-token-get.js');

const client = new plaid.Client(
    process.env.PLAID_CLIENT_ID,
    process.env.PLAID_SECRET,
    process.env.PLAID_PUBLIC_KEY,
    plaid.environments.development
)

router.route('/')
.post(accessToken.getAccessToken(db, client))


module.exports = router;
