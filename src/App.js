import React, { Component } from 'react';
import './App.scss' 
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';
import Main from "./Main"

class App extends Component {
 
  render() {    
    return (    
      <Router>
        <div className="App">    
          <h1 className="heading">
            <NavLink to="/Main" activeClassName='is-active'>Example for Redux-Form</NavLink> 
          </h1>        
          <hr/>
          <Switch>
            <Route exact path="/" />
            <Route exact path="/Main" component={Main} />     
          </Switch>          
        </div>
      </Router>
    );
  }
}

export default App;
