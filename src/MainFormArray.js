import React, { Component } from 'react';
import SimpleFormArray from './SimpleFormArray'


class MainFormArray extends Component {
 
  submit = (values) => {
    console.log(values)
  }
  
  render() {
    return <SimpleFormArray onSubmit={this.submit}  />
  }
}

export default MainFormArray;
