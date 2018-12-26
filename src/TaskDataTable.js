import React, { Component } from 'react';
import './App.css';

class TaskDataTable extends Component {
  constructor(props){
    super(props);
    this.state={
      items: [],
      items1: [],
      text:' ',
      text1:' '
    };
  }  
  handleChange = (event) => {
      this.setState({text: event.target.value})
      console.log(this.text)      
  }
  handleChangedata = (event) => {
      this.setState({text1: event.target.value})
      console.log(this.text)      
  }

  // onSubmit =() => {
  //   this.setState({items: this.state.items.concat(this.state.text)});
  // }
  handleClick = () => {
    var text = this.setState({items: this.state.items.concat(this.state.text), text:' ' });
    var text1 = this.setState({items1: this.state.items1.concat(this.state.text1), text1:' ' });
    // this.setState({text:' '});
    console.log(this.state.text)
    console.log(this.state.text1)
  }
  removeAll = () => {
    this.setState({items: []})
  } 
  handleSubmit = (event) => {
    event.preventDefault();
  }
  render() {    
    return (       
      <div>
       <h1>Todo List</h1> 
        <p>Add your Todo List here</p>
        <table border="1"><tr>
          {this.state.items.map(item => (
          <td key={item}>{item}</td>
        ))}</tr>
          <tr>{this.state.items1.map(item1 => (
          <td key={item1}>{item1}</td>
        ))}
          </tr>
        </table>
        
        <form onSubmit={this.handleSubmit}>      
          <input onChange={this.handleChange.bind(this)} value={this.state.text}></input>
          <input onChange={this.handleChangedata.bind(this)} value={this.state.text1}></input>
          <button onClick={this.handleClick.bind(this)}>Add Item</button>
          <button onClick={this.removeAll.bind(this)}>Remove All</button>
        </form>
    </div>
 );
}
}

export default TaskDataTable;
