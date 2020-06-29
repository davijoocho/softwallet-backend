
const signInVerification = (bcrypt, db) => async (req, res) => {

    const {email, password} = req.body;

    const selectUserCredQuery = 'SELECT secret FROM user_credentials WHERE email = $1';
    const providedUserEmail = [email];
    const selectUserProfileQuery = 'SELECT name FROM users WHERE email = $1';

    try {

    const userCred = await db.query(selectUserCredQuery, providedUserEmail);
    const userProfile = await db.query(selectUserProfileQuery, providedUserEmail);

    if(userCred.rows[0] == undefined) {

        res.status(400).json('sign in unsuccessful');

    } else {
        
        bcrypt.compare(password, userCred.rows[0].secret, (err, result) => {

        if(result){

            res.status(200).json(userProfile.rows[0]);

        } else {

            res.status(400).json(err);

        }    

      });

    } 

    } catch (err) {

    res.status(400).json(err);

    }


}

module.exports = {
    signInVerification 
}