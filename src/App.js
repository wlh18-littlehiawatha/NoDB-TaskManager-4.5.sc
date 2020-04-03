import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import AddItem from './components/AddItem';
import SubHeader from './components/SubHeader';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taskArray: []
    };

    // bind items here as needed
  }


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
