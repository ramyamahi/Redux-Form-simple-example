import React, { Component } from 'react';
import './App.scss';

class CurrentTime extends Component {
  constructor(props){
    super(props);
    this.state={
       timer : 0
    };
  } 
timerStart = () => {
  return(
    this.setState({timer: Date()})
  );
}  
  render() {    
    return (       
    	<div>
        <h1>Get Current Time</h1>
        <button onClick={this.timerStart.bind(this)}>Get current Time</button><br/>
        <input type='text' value={this.state.timer}></input>
      </div>
    );
  }
}

export default CurrentTime;
