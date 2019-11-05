import React, { Component } from 'react';
import SimpleForm from './SimpleForm'


class Main extends Component {
 
  submit = (values) => {
    console.log(values)
  }
  
  render() {
    return <SimpleForm onSubmit={this.submit}  />
  }
}

export default Main;
