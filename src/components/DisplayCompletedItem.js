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
      return <p> {element.taskLineItem} </p>
   })

  return(
   <div>
      <h1>DisplayCompletedItems.js</h1>
      <strike>{completedList}</strike>
   </div >
  )};

}

export default DisplayCompletedItems;