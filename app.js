const express = require('express');

//Routers


//Utils
const { db } = require('./utils/database.util');

// init express app 
const app = express();

//Enable Express app to recive JSON data
app.use(express.json());

//Endpoints
app.use('/api/v1/users', usersRouter);


module.exports = { app };