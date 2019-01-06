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
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import ExpenseApp from './ExpenseApp'

import axios from 'axios'
import 'semantic-ui-css/semantic.min.css'; 

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
  
  render() {    
    return (    
      <Router>
        <div className="App">
          <h1>My React Programs</h1>
          <ul className='link-list'>
            <li>
              <Link to="/Increment">Increment and Decrement</Link>
            </li>
            <li>            
              <Link to="/Add">Arithmetic Operations(+,-,*,/)</Link>
            </li>
            <li>
              <Link to="/TodoList">Todo List</Link>
            </li>
            <li>            
              <Link to="/VisibilityToggle">Visibility Toggle</Link>
            </li>
            <li>            
              <Link to="/FunctionalComponent">Functional Component</Link>
            </li>            
            <li>            
              <Link to="/UserTable">Data Table</Link>
            </li>
            <li>            
              <Link to="/CurrentTime">Click and Get current Time</Link>
            </li>
            <li>            
              <Link to="/SemanticSample">Semantic Sample</Link>
            </li>
            {/*<li>            
              <Link to="/Indecision">Indecision</Link>
            </li>*/}
            <li>            
              <Link to="/SearchPics">Search Photos</Link>
            </li>

          </ul>

          <Route exact path="/Increment" component={Increment} />
          <Route exact path="/Add" component={Add} />
          <Route exact path="/TodoList" component={TodoList} />
          <Route exact path="/VisibilityToggle" component={VisibilityToggle} />
          <Route exact path="/FunctionalComponent" component={FunctionalComponent} images={this.state.images}/>
          <Route exact path="/UserTable" component={UserTable} />
          <Route exact path="/CurrentTime" component={CurrentTime} />
          <Route exact path="/SemanticSample" component={SemanticSample} />
          {/*<Route exact path="/Indecision" component={Indecision} />*/}
          <Route exact path="/SearchPics" component={SearchPics} />
          {/*<SearchPics onSubmit={this.onSearchSubmit} />       
          {this.state.images.length} images*/}       
     
        </div>
      </Router>
    );
  }
}

export default App;
