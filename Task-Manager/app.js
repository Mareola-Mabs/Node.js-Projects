const express = require('express')
const app = express()
require('dotenv').config()

const TasksRouter = require('./routes/tasks')

const port = process.env.PORT

// middleware
app.use(express.json())

// Routes
app.get('/hello', (req, res)=>{
    res.send('Task manager app')
})

app.use('/api/v1/tasks', TasksRouter)

app.listen(port, console.log(`Server listening on http://localhost:${port}`))
