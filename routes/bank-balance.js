const express = require('express');
const router = express.Router()
const plaid = require('plaid');
const db = require('../database/dbconfig.js');
require('dotenv').config()
const balance = require('../controllers/balance-get.js')

const client = new plaid.Client(
    process.env.PLAID_CLIENT_ID,
    process.env.PLAID_SECRET,
    process.env.PLAID_PUBLIC_KEY,
    plaid.environments.development
)

router.route('/')
.get(balance.getBalance(db, client))


module.exports = router;