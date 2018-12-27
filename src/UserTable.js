import React, { Component } from 'react';
import './App.css';
//import { Item, Button,Image, Sidebar, Grid, Header, Segment } from 'semantic-ui-react'

class UserTable extends Component {
  constructor(props){
    super(props);
    this.state={
      persons: [],
      text:''
    };
  }  
  handleChange = (event) => {
      var name=this.setState({name: event.target.value})
      console.log(this.name)      
  }
   handleChangeData = (event) => {
      var email=this.setState({email: event.target.value})
      console.log(this.email)      
  } 

  
handleClick = () => {
  var persons=this.setState({persons: [{name: '', email: ''}]})
  console.log(this.persons)      
  
  
  
}
  removeAll = () => {
    this.setState({persons: []})
  } 
  handleSubmit = (event) => {
    event.preventDefault();
  }
  render() {    
    return (       
      <div>
       <h1>Todo List</h1> 
        <p>Add your Todo List here</p>
     
          {this.state.persons.map(person => (
          <li key={person}>{person}</li>
        ))}          
        
        <form onSubmit={this.handleSubmit}>      
          <input onChange={this.handleChange.bind(this)} value={this.state.name}></input>
          <input onChange={this.handleChangeData.bind(this)} value={this.state.email}></input>
          <button onClick={this.handleClick.bind(this)}>Add Item</button>
          <button onClick={this.removeAll.bind(this)}>Remove All</button>
        </form>
    </div>
 );
}
}

export default UserTable;
