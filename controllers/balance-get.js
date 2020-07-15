
const getBalance = (db, client) => async (req, res) => {

    const userObject = req.query
    const {user} = userObject

    try{

        const getBalanceQuery = 'SELECT access_token FROM user_plaid WHERE email = $1'
        const getBalanceValue = [user]

        const response = await db.query(getBalanceQuery, getBalanceValue)

        const {accounts} = await client.getBalance(response.rows[0].access_token)

        res.status(200).json(accounts[0].balances)
        

    } catch (err) {
        res.status(400).json(err)
    }

}



module.exports = {
    getBalance
}