/* ********************************************
 * This server.js file is the primary file of the 
 * application. It is used to control the project.
 **********************************************/


/* ***********************
 * Require Statements
 *************************/
const cors = require('cors');
const express = require('express');
const app = express();
const env = require('dotenv').config();

/*======= controllers =====*/
const professionalRoute = require('./routes/professionalRoute');



/* ************************
 * Middleware CORS
 *************************/
app.use(cors());



/* ************************
 * Routes
 *************************/
app.get('/', (req, res, next) => {
    res.send("Hello World");
});
app.use('/professional', professionalRoute);




/* ************************************
 * Local Server Information
 * Values from .env (environment) file
 *************************************/
const port = process.env.PORT;
const host = process.env.HOST;



/* *****************************************
 * Log statement to confirm server operation
 *******************************************/
app.listen(port, () => {
    console.log(`app listening on ${host}:${port}`);
})