const createNewAccount = (bcrypt, db) => (req, res) => {

    const {name, email, password} = req.body;

    const saltRounds = 10;

    bcrypt.hash(password, saltRounds, async (err, hash) => {

        const client = await db.connect();

        try {

            await client.query('BEGIN');
    
            const insertCredentialsQuery = 'INSERT INTO user_credentials (email, secret) VALUES ($1, $2) RETURNING email';
            const userCredentialValues = [email, hash];
            const credentials = await client.query(insertCredentialsQuery, userCredentialValues);

            const insertUserInfoQuery = 'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING name';
            const userInfoValues = [name, credentials.rows[0].email];
            const user = await client.query(insertUserInfoQuery, userInfoValues);
    
            await client.query('COMMIT');
            res.status(201).json(user.rows[0]);

        } catch (err) {

            await client.query('ROLLBACK');
            res.status(400).json(err);
    
        } finally {
    
            client.release();
    
        }

    });

}

module.exports = {
    createNewAccount
}