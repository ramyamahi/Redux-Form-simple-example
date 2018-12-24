 import React, { Component } from 'react';
import './App.css';

class VisibilityToggle extends Component {
  constructor(props){
    super(props);
    this.state={
    visibility :false
    };
  }
  
 toggleVisibility =()=> {
  this.setState({visibility: !this.state.visibility})
 	console.log(this.visibility)
 };

  render() {
    
    return (    
      
  	<div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.toggleVisibility.bind(this)}>{this.visibility ? 'Hide details' : 'Show Details'}</button>        
        {
        	this.visibility && (
        	<div>Ramya</div>)}
	</div>


 );
}
}

export default VisibilityToggle;
