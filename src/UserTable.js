import React, { Component } from 'react';
import './App.css';

class UserTable extends Component {
  constructor(props){
    super(props);
    this.state={
      persons: [
        {name: ' ',email: ' '} 
      ],
      text:''
    };
  }  
  handleChange = (event) => {
      this.setState({name: event.target.value})
      console.log(this.name)      
  }
   handleChangeData = (event) => {
      this.setState({email: event.target.value})
      console.log(this.email)      
  }
  

  // onSubmit =() => {
  //   this.setState({items: this.state.items.concat(this.state.text)});
  // }
  // handleClick = () => {
  //   var text = this.setState({persons: this.state.persons.concat(this.state.name), text:' ' });
  //   this.setState({text:text})
  //   console.log(this.state.text)   
  // }
handleClick = () => {
  var name=this.setState({name: this.state.nam})
  console.log(this.name)      
  
  var email=this.setState({email: ' '})
  console.log(this.email)      
  
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
          <li key={person}>{person.name}</li>
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
