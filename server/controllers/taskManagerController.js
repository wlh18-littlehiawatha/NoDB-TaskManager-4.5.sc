let taskListArr = [];
let tasksCompletedArr = [];
let id = 0;

module.exports = {

getTaskListArr: (req, res) => {
   res.status(200).send(taskListArr)
},


addTaskListArr: (req,res) => {
   
   const {input} = req.body
   const savedTask = {
      id: id,
      taskLineItem: input
   }
   
   id++
   
   taskListArr.unshift(savedTask)
   res.status(200).send(taskListArr)
},


editTaskListArr: (req, res) => {
   const {id} = req.params
   const{taskItem} = req.body

   const index = taskListArr.findIndex (task => {
      return task.id === +id
   })

   taskListArr[index].taskLineItem = taskItem
   res.status(200).send(taskListArr)
},


deleteTaskItem: (req, res) => {
   const {id} = req.params
   

   const index = taskListArr.findIndex(task => {
      return task.id === +id
   });

   tasksCompletedArr.unshift(taskListArr[index])

   taskListArr.splice(index,1)

   res.status(200).send([taskListArr, tasksCompletedArr])
}


}