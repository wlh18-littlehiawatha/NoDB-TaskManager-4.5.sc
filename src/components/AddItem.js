import React, { Component } from 'react';
import SubHeader from './SubHeader';


class AddItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
       input: '',
       edit: '',
       toggleEdit: false,      
    };

    // bind items here as needed
  }

  handleEditToggle = () => {
     this.setState({toggleEdit: !this.state.toggleEdit})

  }

  handleEditUpdateTask = (id) => {
     this.props.editTaskItem(id, this.state.edit)
     this.setState({toggleEdit: !this.state.toggleEdit})
  }

  handleEdit = (task) => {
     this.setState({edit: task})
  }

  handleButton = () => {
     this.props.addTaskItem(this.state.input)
  }

  handleInput = (whatsTyped) => {
     this.setState({input: whatsTyped})
  }

render(){

  return(
   <div>
      
      <button onClick = {() => this.handleButton()}>Add Task</button>
      <input onChange = {(whatsTyped) => this.handleInput(whatsTyped.target.value)} /> 

      <SubHeader 
         taskArray = {this.props.taskArray}
         deleteTaskItem = {this.props.deleteTaskItem}


         handleEditToggle = {this.handleEditToggle}
         handleEditUpdateTask = {this.handleEditUpdateTask}
         handleEdit = {this.handleEdit}

         // why do I not need to declare these two as a const outside of my return in the render above????

         edit = {this.state.edit}
         toggleEdit = {this.state.toggleEdit}

      />

   </div >
  )};

}

export default AddItem;
