const deleteTransaction = (db) => async (req, res) => {

    const {id, email} = req.body;
    const deleteTransactionQuery = 'DELETE FROM user_transactions WHERE id = $1'
    const deleteTransactionValue = [id]
    const selectResultingTransactionQuery = 'SELECT id, transaction_type, transaction_name, amount, date, description FROM user_transactions WHERE email = $1'
    const selectResultingTransactionValue = [email]


    try {


        await db.query(deleteTransactionQuery, deleteTransactionValue)

        const resultingTransactionList = await db.query(selectResultingTransactionQuery, selectResultingTransactionValue)

        res.status(200).json(resultingTransactionList.rows)

    } catch (err) {

        res.status(400).json(err)

    }
}

module.exports = {

    deleteTransaction

}