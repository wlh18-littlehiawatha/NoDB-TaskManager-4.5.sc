import React from 'react';
import DisplayCompleteItem from './DisplayCompletedItem';


function SubHeader(props) {

   // let mapList = props.taskArray.map((e, i) => {
   //    return (
   //       <section key={i} >
   //          <button onClick={() => props.deleteTaskItem(e.id)}>Task Completed</button>
   //          {
   //             props.toggleEdit === true ?
   //                <div>
   //                   <button onClick={() => props.editTaskItem(e.id)} >Save Task Update</button>
   //                   {/* lineItem */}
   //                   <input placeholder={e.lineItem} onChange={(e) => props.handleEdit(e.target.value)} />
   //                </div>
   //                :
   //                <div>
   //                   <button onClick={() => props.handleEditToggle()} >Edit</button>
   //                   {/* lineItem */}
   //                   <h2> {e.lineItem} </h2>
   //                </div>
   //          }
   //       </section>
   //    )
   // })

   return (
      <div className="SubHeader">
         <h1>Tasks Completed</h1>
         <DisplayCompleteItem />
      </div>
   );
}

export default SubHeader;