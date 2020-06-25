
const signInVerification = (bcrypt, db) => async (req, res) => {

    const {email, password} = req.body;

    const selectUserCredQuery = 'SELECT secret FROM user_credentials WHERE email = $1';
    const providedUserEmail = [email];

    db.query(selectUserCredQuery, providedUserEmail, (err, userCred) => {

        if (userCred.rows[0] == undefined) {

            res.status(400).json('sign in unsuccessful');
            
        } else {

            bcrypt.compare(password, userCred.rows[0].secret, (err, result) => {

                    if(result){

                        res.status(200).json('sign in successful');
    
                    } else {

                        res.status(400).json('sign in unsuccessful');

                    }    
            });
        }
    })

}

module.exports = {
    signInVerification 
}