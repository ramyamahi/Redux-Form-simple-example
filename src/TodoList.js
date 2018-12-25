 import React, { Component } from 'react';
import './App.css';

class TodoList extends Component {
  constructor(props){
    super(props);
    this.state={
      items: [],
      text:' '
    };
  }  
  handleChange = (event) => {
      this.setState({text: event.target.value})
      console.log('hi')      
  }
  // onSubmit =() => {
  //   this.setState({items: this.state.items.concat(this.state.text)});
  // }
  handleClick = () => {
    var text = this.setState({items: this.state.items.concat(this.state.text), text:' ' });
    // this.setState({text:' '});
    console.log(this.state.text)
  }
  removeAll = () => {
    this.setState({items: []})
  } 
  render() {    
    return (       
    	<div>
       <h1>Todo List</h1> 
        <p>Add your Todo List here</p>
        
          {this.state.items.map(item => (
          <li key={item}>{item}</li>
        ))}
        
        {/*<form onSubmit={this.handleSubmit}>*/}        
          <input onChange={this.handleChange.bind(this)} value={this.state.text}></input>
          <button onClick={this.handleClick.bind(this)}>Add Item</button>
          <button onClick={this.removeAll.bind(this)}>Remove All</button>
        {/*</form>*/}
    </div>
 );
}
}

export default TodoList;
