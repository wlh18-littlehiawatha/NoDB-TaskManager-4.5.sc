const express = require('express')
//

const app = express()

const PORT = 5555;

app.use(express.json())

app.listen(PORT, () => console.log(`Server running on port ${PORT} smash brother!`))



// endpoints

app.get('/api/taskManager')
// if you have more controllers insert here
app.post('/api/taskManager')
app.put('/api/taskManager:id')
app.delete('/api/taskManager:id')