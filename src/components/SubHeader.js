import React from 'react';
import DisplayCompleteItem from './DisplayCompletedItem';


function SubHeader() {
  return (
    <div className="SubHeader">
       <h1>Tasks Completed</h1>
      <DisplayCompleteItem />
    </div>
  );
}

export default SubHeader;