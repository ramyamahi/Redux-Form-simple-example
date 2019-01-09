import React, { Component } from 'react';
import './App.scss' 
import './styles.scss' 
import './custom.css' 
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {createStore, combineReducers} from 'redux'
import 'semantic-ui-css/semantic.min.css';
import Movies from "./MoviesList"
import Increment from "./Increment"
import Add from "./Add"
import TodoList from './TodoList'
import VisibilityToggle from "./VisibilityToggle"
import FunctionalComponent from './FunctionalComponent'
import UserTable from './UserTable'
import CurrentTime from './CurrentTime'
import SemanticSample from './SemanticSample'
import SearchPics from './SearchPics'
import ExpenseApp from './ExpenseApp'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import ToasterAlert from './ToasterAlert'
import {Provider}  from 'react-redux'




import axios from 'axios'

{/*import TaskDataTable from './TaskDataTable'*/}
{/*import Indecision from './Indecision'*/}

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
          <h1 className='app-head'>My React Programs</h1>
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
            <li>            
              <Link to="/ExpenseApp">Expense List</Link>
            </li>
            <li>            
              <Link to="/ToasterAlert">React-Redux Toastr</Link>
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
          <Route exact path="/ExpenseApp" component={ExpenseApp} />
          <Route exact path="/ToasterAlert" component={ToasterAlert} />
          {/*<SearchPics onSubmit={this.onSearchSubmit} />       
          {this.state.images.length} images*/}       
     
        </div>
      </Router>
    );
  }
}

export default App;
