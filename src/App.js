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
      taskArray: []
    };

    // bind items here as needed
  }

  // componentDidMount() {
  //   axios.get('/api/taskmanager'). then(res => {
  //     this.setState({
  //       taskArray: res.data
  //     })
  //   }).catch(error => console.log(error))
  // }


render(){
  return(
   <div>
      <h1>App.js</h1>

      <Header />
      <AddItem />
      <SubHeader />
   </div >
  )};

}

export default App;
