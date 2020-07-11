const express = require('express');
const router = express.Router()
const db = require('../database/dbconfig.js');
const transactions = require('../controllers/transaction-post.js');

router.route('/income')
.post(transactions.postTransaction(db))

router.route('/assets')
.post(transactions.postTransaction(db))

router.route('/liabilities')
.post(transactions.postTransaction(db))

router.route('/expenses')
.post(transactions.postTransaction(db))

module.exports = router;