import React, { Component } from 'react';
import './App.scss';
import {  Loader, Dimmer, Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import logo from './logo.svg';



class LifecycleSample extends Component {
 componentWillMount() {   
      console.log('Component WILL MOUNT!')
   }
   componentDidMount() {
      console.log('Component DID MOUNT!')
   }
  
  render() {  

     
    return (       
      <div>
      <h1>React Lifecycle</h1>
        {console.log('render')}
    </div>
 );
}
}

export default LifecycleSample;
