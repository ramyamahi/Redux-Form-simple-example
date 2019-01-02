import React, { Component } from 'react';
import './App.css';

class TodoList extends Component {
  constructor(props){
    super(props);
    this.state={
       
    };
  } 
timerStart = () => {

}  
  render() {    
    return (       
    	<div>
        <h1>Timer</h1>
        {/*<button>Start</button>
        <input type='text' onClick={this.state.timerStart.bind(this)}></input>
        <button>Stop</button>*/}

      </div>
    );
  }
}

export default TodoList;
