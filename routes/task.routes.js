const express = require('express');

//Middleware
const {  } = require('../middleware/task.middleware');

//controllers
const {
    createTask,
    getAllTasks,
    getTasksByStatus,
    updateTask,
    deleteTask,
} = require('../controller/task.controller');

const router = express.Router();

router.post('/', createTask);

router.get('/', getAllTasks);

router.get('/:status', getTasksByStatus);

router
    .router('/:id')
    .patch(updateTask)
    .delete(deleteTask);

module.exports = { tasksRouter: router };