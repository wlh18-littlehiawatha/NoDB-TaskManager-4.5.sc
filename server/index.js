const express = require('express');

// IMPORT controllers file
const taskManagerController = require('./controllers/taskManagerController')


const app = express();

const PORT = 5555;

app.use(express.json());

app.listen(PORT, () => console.log(`Server running on port ${PORT} smash brother!`));



// endpoints

app.get('/api/taskManager', taskManagerController.getTaskListArr)
// if you have more controllers insert here
app.post('/api/taskManager', taskManagerController.addTaskListArr)
app.put('/api/taskManager:id', taskManagerController.editTaskListArr)
app.delete('/api/taskManager:id', taskManagerController.deleteTaskItem)