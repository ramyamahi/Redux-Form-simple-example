import React, { Component } from 'react';
import './App.scss';
import Total from './Total'
import ProductForm from './ProductForm'
import { Item, Button,Image, Sidebar, Grid, Header, Segment, Menu, MenuItem, Form, Label, Divider, Popup, Dropdown, Icon, Breadcrumb, Loader, Dimmer } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import Product from './Product'
let loading1 = 
  { loading: 0 }; 
  

class ProductList extends Component {
 constructor(props) {
    super(props);    this.state = {
     
      loading:false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading1: loading1 });
    }, 1000);
  }
   

  render() {  
       if (!this.state.loading1) return  <Loader active inline='centered' />;
  return (       
      <div>
      <h1>React Lifecycle</h1>
        {console.log('render')}
    </div>
 );
}
}

export default ProductList;
