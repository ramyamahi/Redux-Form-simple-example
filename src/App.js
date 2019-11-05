import React, { Component } from 'react';
import './App.scss' 
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';
import MainFormArray from "./MainFormArray"

class App extends Component {
 
  render() {    
    return (    
      <Router>
        <div className="App">    
          <h1 className="heading">
            <NavLink to="/MainFormArray" activeClassName='is-active'>Example for Redux-Form</NavLink> 
          </h1>        
          <hr/>
          <Switch>
            <Route exact path="/" />
            <Route exact path="/MainFormArray" component={MainFormArray} />     
          </Switch>          
        </div>
      </Router>
    );
  }
}

export default App;
