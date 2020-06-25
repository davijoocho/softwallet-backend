const express = require('express');
const app = express();
const cors = require('cors');
const signInRoute = require('./routes/signin.js'); 
const signUpRoute = require('./routes/signup.js');



app.use(express.json());
app.use(cors());


//Middleware for Sign-Up Routes

app.use('/signup', signUpRoute);

//Middleware for Sign-In Routes

app.use('/signin', signInRoute);



app.listen(process.env.PORT || 3000);
