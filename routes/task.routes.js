const express = require('express');

//Middleware
const { taskExists } = require('../middleware/task.middleware');

//controllers
const {
    getAllTasks,
    createTask,
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
    .patch( taskExists,updateTask )
    .delete( taskExists, deleteTask );

module.exports = { tasksRouter: router };