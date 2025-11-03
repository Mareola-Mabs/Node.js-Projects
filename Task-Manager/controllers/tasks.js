const getAllTasks = (req, res)=>{
    res.send('Get all tasks from database')
}

const getOneTask = (req, res)=>{
    res.json({id:req.params.id})
}

const createTask = (req, res)=>{
    res.json(req.body)
}

const updateTask = (req, res)=>{
    res.send('Update a task')
}

const deleteTask = (req, res)=>{
    res.send('Delete a task')
}







module.exports = {
    getAllTasks, getOneTask, createTask, updateTask, deleteTask
}