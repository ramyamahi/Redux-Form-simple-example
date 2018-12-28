import React, { Component } from 'react';
import axios from 'axios'; 
 
  

class SearchPics extends Component{ 
  constructor(){
    super();
    this.state={       
      item: ''
    }
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.item)
  }
  handlePic(event){
    var item=this.setState({item:event.target.value})
    console.log(this.state.item)
  }
  
  render(){
    return(
      <div>        
        <h5>Search Pics</h5>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input onChange={this.handlePic.bind(this)} value={this.state.item}></input> 
        </form>       
      </div> 
    );
  }
}

export default SearchPics;