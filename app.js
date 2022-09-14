const express = require('express');
const { usersRouter } = require('./routes/user.routes');
const { tasksRouter } = require('./routes/task.routes');
//Routers

// init express app 
const app = express();

//Enable Express app to recive JSON
app.use(express.json());

//Endpoints
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/tasks', tasksRouter);


module.exports = { app };