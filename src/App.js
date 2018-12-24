import React, { Component } from 'react';
import Movies from "./MoviesList"
import Increment from "./Increment"
import Add from "./Add"
import './App.css';
import VisibilityToggle from "./VisibilityToggle"
import ClassSample from './ClassSample'
import FunctionalComponent from './FunctionalComponent'


class App extends Component {
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
       <Increment/>
       <Add/>
       <VisibilityToggle/>
       <FunctionalComponent/>
       <ClassSample />
       
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
