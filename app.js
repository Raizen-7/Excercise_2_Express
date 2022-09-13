const express = require('express');

//Routers

// init express app 
const app = express();

//Enable Express app to recive JSON
app.use(express.json());

//Endpoints
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/tasks');


module.exports = { app };