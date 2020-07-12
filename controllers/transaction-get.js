const getTransaction = (db) => async (req, res) => {

    const userObject = req.query
    const {user} = userObject
    

    const selectResultingTransactionQuery = 'SELECT id, transaction_type, transaction_name, description, amount, date FROM user_transactions WHERE email = $1'
    const selectResultingTransactionValue = [user]

    try {

        const transactionList = await db.query(selectResultingTransactionQuery, selectResultingTransactionValue) 

        res.status(200).json(transactionList.rows)

    } catch (err) {

        res.status(400).json(err)
    }

}


module.exports = {
    getTransaction
}