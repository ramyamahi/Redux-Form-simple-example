import React, { Component } from 'react';
import './App.scss' 
import 'normalize.css/normalize.css'
import './styles.scss' 
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from "react-router-dom";
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
import BreadcrumbNav from './BreadcrumbNav'
import SearchPics from './SearchPics'
import ExpenseApp from './ExpenseApp'
import SignUp from './SignUp'
import LifecycleSample from './LifecycleSample'
import ApiCall from './ApiCall'
import ProductList from './ProductList'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import ToasterAlert from './ToasterAlert'
import {Provider}  from 'react-redux'
import NotFound  from './NotFound'





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
              <NavLink to="/Increment" activeClassName='is-active'>Increment and Decrement</NavLink>
            </li>
            <li>            
              <NavLink to="/Add" activeClassName='is-active'>Arithmetic Operations(+,-,*,/)</NavLink>
            </li>
            <li>
              <NavLink to="/TodoList" activeClassName='is-active'>Todo List</NavLink>
            </li>
            <li>            
              <NavLink to="/VisibilityToggle" activeClassName='is-active'>Visibility Toggle</NavLink>
            </li>
            <li>            
              <NavLink to="/FunctionalComponent" activeClassName='is-active'>Functional Component</NavLink>
            </li>            
            <li>            
              <NavLink to="/UserTable" activeClassName='is-active'>Data Table</NavLink>
            </li>
            <li>            
              <NavLink to="/CurrentTime" activeClassName='is-active'>Click and Get current Time</NavLink>
            </li>
            <li>            
              <NavLink to="/SemanticSample" activeClassName='is-active'>Semantic Sample</NavLink>
            </li>
            <li>            
              <NavLink to="/BreadcrumbNav" activeClassName='is-active'>Navlink for Breadcrumb</NavLink>
            </li>
            {/*<li>            
              <Link to="/Indecision">Indecision</Link>
            </li>*/}
            <li>            
              <NavLink to="/SearchPics" activeClassName='is-active'>Search Photos</NavLink>
            </li>
            <li>            
              <NavLink to="/ExpenseApp" activeClassName='is-active'>Expense List</NavLink>
            </li>
            <li>            
              <NavLink to="/ToasterAlert" activeClassName='is-active'>React-Redux Toastr</NavLink>
            </li>
            <li>            
              <NavLink to="/SignUp" activeClassName='is-active'>Sign Up</NavLink>
            </li>
             {/*<li>            
              <NavLink to="/ApiCall" activeClassName='is-active'>API Call</NavLink>
            </li>*/}
            <li>            
              <NavLink to="/LifecycleSample" activeClassName='is-active'>LifecycleSample</NavLink>
            </li>
            <li>            
              <NavLink to="/ProductList" activeClassName='is-active'>Shopping Cart</NavLink>
            </li>



          </ul>
          <hr/>
          <Switch>
            <Route exact path="/" />
            <Route exact path="/Increment" component={Increment} />
            <Route exact path="/Add" component={Add} />
            <Route exact path="/TodoList" component={TodoList} />
            <Route exact path="/VisibilityToggle" component={VisibilityToggle} />
            <Route exact path="/FunctionalComponent" component={FunctionalComponent} images={this.state.images}/>
            <Route exact path="/UserTable" component={UserTable} />
            <Route exact path="/CurrentTime" component={CurrentTime} />
            <Route exact path="/SemanticSample" component={SemanticSample} />
            <Route exact path="/BreadcrumbNav" component={BreadcrumbNav} />
            {/*<Route exact path="/Indecision" component={Indecision} />*/}
            <Route exact path="/SearchPics" component={SearchPics} />
            <Route exact path="/ExpenseApp" component={ExpenseApp} />
            <Route exact path="/ToasterAlert" component={ToasterAlert} />
            <Route exact path="/SignUp" component={SignUp} />
            <Route exact path="/ApiCall" component={ApiCall} />
            <Route exact path="/LifecycleSample" component={LifecycleSample} />
            <Route exact path="/ProductList" component={ProductList} />
            {/*<SearchPics onSubmit={this.onSearchSubmit} />       
            {this.state.images.length} images*/} 
            <Route component={NotFound}/>      
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
