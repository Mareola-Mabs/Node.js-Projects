const express = require('express')

const TaskRouter = express.Router()

const {getAllTasks, getOneTask, createTask, updateTask, deleteTask} = require('../controllers/tasks')





TaskRouter.get('/', getAllTasks).post('/', createTask)

TaskRouter.get('/:id', getOneTask).patch('/:id', updateTask).delete('/:id', deleteTask)


module.exports = TaskRouter