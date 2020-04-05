import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import AddItem from './components/AddItem';
import SubHeader from './components/SubHeader';

import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taskArray: [],
      displayCompletedSaved: []
    };

    // bind items here as needed
  }

  componentDidMount() {
    axios.get('/api/taskmanager')
    .then(res => {
      this.setState({
        taskArray: res.data
      })
    }).catch(error => console.log(error))
  }

  addTaskItem =(input) => {
    axios.post(`/api/taskManager`, {input})
    .then(res => {
      this.setState({
        taskArray: res.data
      })
    }).catch(error => console.log(error))
  }

  editTaskItem = (id, taskItem) => {
    axios.put(`/api/taskManager/${id}`, {taskItem})
    .then(res => {
      this.setState({
        taskArray: res.data
      })
    }).catch(error =>console.log(error))
  }


  deleteTaskItem = (id) => {
    axios.delete(`/api/taskManager/${id}`)
    .then(res => {
      // console.log(res.data)
      this.setState({
        taskArray: res.data[0],
        displayCompletedSaved: res.data[1]
      })
    }).catch(error => console.log(error))
  }




render(){
  const {taskArray, displayCompletedSaved} = this.state;

  return(
   <div>
      <h1>App.js</h1>

      <Header />
      <AddItem 
        taskArray = {taskArray}      
        addTaskItem = {this.addTaskItem}
        deleteTaskItem = {this.deleteTaskItem}
        editTaskItem = {this.editTaskItem}
      />
      <SubHeader
       displayCompletedSaved = {displayCompletedSaved} 
       />
   </div >
  )};

}

export default App;
