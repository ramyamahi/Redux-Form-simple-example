 import React, { Component } from 'react';
import './App.scss';

class Increment extends Component {
  constructor(props){
    super();
    this.state={
    data:1
    }
  }
  
  add(){
    var data=this.setState({data:this.state.data + 1})
    console.log("hi")
  }
  sub(){
    var sub=this.setState({data:this.state.data - 1})
    console.log("hello");
  }

  render() {
    
    return (    
      
      <div>
        <h1>Increment and Decrement</h1>
        <button onClick={this.add.bind(this)}>increment</button>        
        <input value={this.state.data}></input>
         <button onClick={this.sub.bind(this)}>Decrement</button>
        </div>
 );
}
}

export default Increment;
