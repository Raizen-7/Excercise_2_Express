const { json } = require('sequelize');
const {  } = require('../models/task.model');

const getAllTasks = async (req, res) => {
	try {
		const tasks = await Tasks.findAll({
			where: { status: 'active' }
		});

		res.status(200).json({
			status: 'success',
			data: {
				tasks,
			},
		});
	} catch (error) {
		console.log(error);
	}
};

const createTask = async (req, res) => {
	try {
		const { title, userId, limitDate, startDate, finishDate } = req.body;

		const newTask = await Task.create({ title, userId, limitDate, startDate, finishDate });


		res.status(201).json({
			status: 'success',
			data: { newTask },
		});
	} catch (error) {
		console.log(error);
	}
};

const getTasksByStatus = async (req, res)=>{
    res.status(200),json({});
}



module.exports = {
	getAllTasks,
	createTask,
	getTasksByStatus,
	
};