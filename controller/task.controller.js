const { Tasks } = require('../models/task.model');

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

		const newTask = await Tasks.create({ title, userId, limitDate, startDate, finishDate });


		res.status(201).json({
			status: 'success',
			data: { newTask },
		});
	} catch (error) {
		console.log(error);
	}
};

const getTasksByStatus = async (req, res)=>{
	const { status } = req.params;

	const arrayStatus = ['active', 'completed', 'late', 'cancelled'];

	const statusFound = arrayStatus.find(validStatus =>  validStatus === status );

	if(!statusFound){
		try {
			const tasks = await Tasks.findAll({ where: { status } });
			
			res.status(200).json({ tasks });

		} catch (error) {
			console.log(`${error} status does not match the expected statuses`);
		}
	}
	
};

const updateTask = async (req, res) => {
	try {
		const { task } = req;
		const { finishDate } = req.body;
	  
		// Get numerical values of the dates
		const limitDateNum = new Date(task.limitDate).getTime();
		const finishDateNum = new Date(finishDate).getTime();
	  
		const remainingTime = limitDateNum - finishDateNum;
	  
		if (remainingTime > 0) {
		  await task.update({ finishDate, status: 'completed' });
		} else if (remainingTime < 0) {
		  await task.update({ finishDate, status: 'late' });
		}
	  
		res.status(200).json({
		  status: 'success',
		  task,
		});
		
	} catch (error) {
		console.log(error);
	}
  };

  const deleteTask = async (req, res) => {
	try {
		const { task } = req;
  
		await task.update({ status: 'cancelled' });
	  
		res.status(200).json({
		  status: 'success',
		});
	} catch (error) {
		console.log(error);
	}
  };



module.exports = {
	getAllTasks,
	createTask,
	getTasksByStatus,
	updateTask,
	deleteTask
	
};