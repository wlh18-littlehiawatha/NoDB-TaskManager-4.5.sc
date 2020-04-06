import React, { Component } from 'react';


class DisplayCompletedItems extends Component {
  constructor(props) {
    super(props);

    this.state = {
       completedTasks: []
      
    };

    // bind items here as needed
  }


render(){
   console.log(this.props)
   let completedList = this.props.displayCompletedSaved.map((element) => {
      console.log(element)
      return <p className = "taskLineItemsCompleted"> {element.taskLineItem} </p>
   })

  return(
   <section className="CompletedTasks">
      
      <strike>{completedList}</strike>
   </section >
  )};

}

export default DisplayCompletedItems;