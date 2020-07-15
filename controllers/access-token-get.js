const getAccessToken = (db, client) => async (req, res) => {

    const {public_token, email} = req.body;

    try{

    const {access_token} = await client.exchangePublicToken(public_token); 
    const  {accounts} = await client.getBalance(access_token);

    const insertAccessTokenQuery = 'INSERT INTO user_plaid (email, access_token) VALUES ($1, $2)';
    const insertAccessTokenValues = [email, access_token]

    await db.query(insertAccessTokenQuery, insertAccessTokenValues);

    res.status(200).json(accounts[0].balances)


    } catch (err) {

        res.status(400).json(err)
    }

}

module.exports = {
    getAccessToken
}