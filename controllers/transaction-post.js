
const postTransaction = (db) => async (req, res) => {

    const {email, transaction_type, transaction_name, description, date, amount} = req.body;

    const insertTransactionQuery = 'INSERT INTO user_transactions(email, transaction_type, transaction_name, description, date, amount) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
    const insertTransactionValues = [email, transaction_type, transaction_name, description, date, amount];

    try {
        const postedTransaction = await db.query(insertTransactionQuery, insertTransactionValues);
        res.status(200).json(postedTransaction.rows[0]);

    } catch (err) {

        res.status(400).json(err);

    }
}


module.exports = {
    postTransaction
}

