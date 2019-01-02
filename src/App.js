import React, { Component } from 'react';
import Movies from "./MoviesList"
import Increment from "./Increment"
import Add from "./Add"
import './App.css'
import VisibilityToggle from "./VisibilityToggle"
import Indecision from './Indecision'
import FunctionalComponent from './FunctionalComponent'
import TodoList from './TodoList'
import TaskDataTable from './TaskDataTable'
import UserTable from './UserTable'
import SearchPics from './SearchPics'
import SemanticSample from './SemanticSample'
import CurrentTime from './CurrentTime'

import axios from 'axios' 


class App extends Component {
  state = {
    images:[]
  }
   onSearchSubmit = async item => {
    const response = await axios.get(
        'https://api.unsplash.com/search/photos', 
        { 
          params: {query: item},
          headers: {Authorization: 'Client-ID 6478c2fa4d0f049630f416ce2d28ff3b7d9d162f464781219a45241645e41edf'}
        }
        ).catch(error => {
    console.log(error.response)
});
    this.setState({images: response.data.results});
   
  }

 

  handleEvent(){
    //("fgg")
  }
 
  render() {
    
    return (    
      
      <div className="App">
      <div>
       {/*<Increment/>
       <hr/>
       <Add/>
        <hr/>
       <VisibilityToggle/>
        <hr/>
       <FunctionalComponent images={this.state.images}/>
        <hr/>
       <Indecision />
       <hr/>
       <TodoList/>
       <hr/>
       <TaskDataTable/>
        <SemanticSample/>*/}
       <hr/>
       <UserTable/>
       <hr/>
       <CurrentTime/>
       
       
       <SearchPics onSubmit={this.onSearchSubmit} />
       
       {this.state.images.length} images
      </div>
        <header>
          {/*<h1>Movie App</h1>
            <Movies/>*/}
            
              
        </header>
      </div>
    );
  }
}

export default App;
