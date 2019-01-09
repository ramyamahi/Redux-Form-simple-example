import React, { Component } from 'react';
import './App.scss';
import { Item, Button,Image, Sidebar, Grid, Header, Segment, Table } from 'semantic-ui-react'

class UserTable extends Component {
  constructor(props){
    super(props);
    this.state={
      persons: [],
      name:'',
      email:''      
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
    let obj = {persons: {name:this.state.name, email:this.state.email}}
    this.setState({persons: this.state.persons.concat(obj),name:'', email:''})
    console.log(this.state.persons)    
  }  
  handleSubmit = (event) => {
    event.preventDefault();
  }
  render() { 
  console.log(this.state.persons);   
    return (       
      <div>
        <h1>Todo List</h1> 
        <p>Add your Todo List here</p>     
        {this.state.persons.map((person) => {console.log(person.persons.name,"person")
          return(           
            <div>
              <table className='table-style'>
                <tbody>
                  <tr>
                    <td key={person.persons.name}>{person.persons.name}</td>
                    <td key={person.persons.email}>{person.persons.email}</td>
                  </tr>
                </tbody>
              </table>
            </div>                    
        ) })}<br/>        
        <form onSubmit={this.handleSubmit}>      
          <input onChange={this.handleChange.bind(this)} value={this.state.name}></input>
          <input onChange={this.handleChangeData.bind(this)} value={this.state.email}></input>
          <button onClick={this.handleClick.bind(this)}>Add Item</button>         
        </form>        
    </div>
 );
}
}

export default UserTable;
