import React, { Component } from 'react';
import logo from './logo.svg';

import MoviesRow from "./MovieRow"


const URL = "https://api.themoviedb.org/3/movie/top_rated?api_key=f9340678aa6a61a60578f56c8f272f61&language=en-US&page=1"

class ApiCall extends Component {

  constructor(props){
    super(props); 
    this.state = {
        list:[]
    }
  }

  componentWillMount(){
    console.log("componentWillMount")
    this.getDataFromServer().then(resultList =>{
      this.setState({list:resultList.results})
    })
  }

  getDataFromServer(){
    return fetch(URL).then(response =>{
      return response.json()
    })
  }


  componentDidMount(){
  }

  renderLoading(){
    return(
      <div>     
        <img src={logo} style={{width:200,height:200}}/>
      </div>
    )
  }

  renderList(){
    console.log(this.state.list)
    return(
      <div style={{width:"800px",float:"left"}}>
        {
          
          this.state.list.map((movie,index)=>{
            console.log(movie)
            return <MoviesRow data={movie}></MoviesRow>
          })
        }
      </div>
    )
  }

  
  render(){
    console.log("render",this.state.list.length)
    return(
      (this.state.list.length == 0) ? this. renderLoading() : this.renderList()
    )
  }

};

export default ApiCall;