import React, { Component } from 'react';
import Movies from "./MoviesList"
import Increment from "./Increment"
import Add from "./Add"
import './App.css';
import VisibilityToggle from "./VisibilityToggle"
import Indecision from './Indecision'
import FunctionalComponent from './FunctionalComponent'
import TodoList from './TodoList'
import TaskDataTable from './TaskDataTable'
import UserTable from './UserTable'
import SearchPics from './SearchPics'


class App extends Component {
  onSearchSubmit(item){
    console.log(this.item)
  }

  constructor(props){
    super();
    this.state={
      
    }
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
       <FunctionalComponent/>
        <hr/>
       <Indecision />
       <hr/>
       <TodoList/>
       <hr/>
       <TaskDataTable/>
       <hr/>
       <UserTable/>*/}
       <SearchPics onSubmit={this.onSearchSubmit} />
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
