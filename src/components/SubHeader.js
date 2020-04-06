import React from 'react';
// import DisplayCompleteItem from './DisplayCompletedItem';


function SubHeader(props) {
console.log(props)
   let mapList = props.taskArray.map((task, i) => {
      return (
         <section className="editAndDelete" key={i} >
            <button onClick={() => props.deleteTaskItem(task.id)}>Task Completed</button>
            {
               props.toggleEdit === true ?
                  <div>
                     <button onClick={() => props.handleEditUpdateTask(task.id)} >Save Task Update</button>
                     {/* lineItem */}
                     <input placeholder={task.lineItem} onChange={(task) => props.handleEdit(task.target.value)} />
                  </div>
                  :
                  <div className="editAndDelete">
                     <button onClick={() => props.handleEditToggle()} >Edit</button>
                     {/* lineItem */}
                     <h2> {task.taskLineItem} </h2>
                  </div>
            }
         </section>
      )
   })

   return (
      <div className="SubHeader">
         <h1>Tasks Completed</h1>
         {mapList}
      </div>
   );
}

export default SubHeader;