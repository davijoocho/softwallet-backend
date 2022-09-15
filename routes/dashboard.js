const express = require('express');
const router = express.Router()
const db = require('../database/dbconfig.js');
const postTransactions = require('../controllers/transaction-post.js');
const deleteTransactions = require('../controllers/transaction-delete.js');
const getTransactions = require('../controllers/transaction-get.js');

router.route('/income')
.post(postTransactions.postTransaction(db))
.delete(deleteTransactions.deleteTransaction(db))

router.route('/assets')
.post(postTransactions.postTransaction(db))
.delete(deleteTransactions.deleteTransaction(db))

router.route('/liabilities')
.post(postTransactions.postTransaction(db))
.delete(deleteTransactions.deleteTransaction(db))

router.route('/expenses')
.post(postTransactions.postTransaction(db))
.delete(deleteTransactions.deleteTransaction(db))

router.route('/')
.get(getTransactions.getTransaction(db))

module.exports = router;