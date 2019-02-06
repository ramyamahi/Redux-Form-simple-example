import React, { Component } from 'react';
import logo from './logo.svg';

class ApiCall extends Component {
  constructor(props){
    super(props); 
    this.state = {
      detail: {}
    }
  }
 
  componentDidMount(){
    fetch("https://swapi.co/api/people/1")
    .then(response => response.json())
    .then(data => {
      this.setState({detail:data})
    })
  }

  render(){    
    return(
      <div>
        {this.state.detail.name}
      </div>     
    )
  }
};

export default ApiCall;