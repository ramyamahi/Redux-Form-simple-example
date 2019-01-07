import React, { Component } from 'react';
import './App.css';
import { Item, Button,Image, Sidebar, Grid, Header, Segment, Menu, MenuItem, Form, Label, Divider } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import {Provider}  from 'react-redux'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import {createStore, combineReducers, bindActionCreators} from 'redux'
import {reducer as toastrReducer, actions as toastrActions} from 'react-redux-toastr'
import ReduxToastr from 'react-redux-toastr'
import {toastr} from 'react-redux-toastr'
const reducers = {  
  toastr: toastrReducer
}
const reducer = combineReducers(reducers)
const store = createStore(reducer)


class ToasterAlert extends Component {  
  constructor(props) {
    super(props);  
  this.toastr = bindActionCreators(toastrActions, this.props.dispatch)    
  }   
  render() {      
    return (       
      <div>        
        <h1>React Redux Toaster</h1>      
        <Provider store={store}>
          <div>   
            <ReduxToastr
              timeOut={20000}
              newestOnTop={false}
              preventDuplicates
              position="top-center"
              transitionIn="fadeIn"
              transitionOut="fadeOut"                 
            />    
            <button
            onClick={() => toastr.success('Successfully added')}
            type="button">Add</button>
          </div>
        </Provider>        
      </div>
    );
  }
}

export default ToasterAlert;
