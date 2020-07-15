const express = require('express');
const app = express();
const cors = require('cors');
const signInRoute = require('./routes/signin.js'); 
const signUpRoute = require('./routes/signup.js');
const dashboardRoute = require('./routes/dashboard.js');
const accessTokenRoute = require('./routes/access-token.js');
const getBalanceRoute = require('./routes/bank-balance.js');




app.use(express.json());
app.use(cors());

//Middleware for Get Balance Route

app.use('/get_balance', getBalanceRoute);

//Middleware for Get Access Token Route

app.use('/get_access_token', accessTokenRoute);

//Middleware for Sign-Up Routes

app.use('/signup', signUpRoute);

//Middleware for Sign-In Routes

app.use('/signin', signInRoute);

//Middleware for Dashbaord Routes

app.use('/dashboard', dashboardRoute);





app.listen(process.env.PORT || 3000);
