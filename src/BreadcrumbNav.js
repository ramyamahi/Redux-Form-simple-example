import React, { Component } from 'react';
import './App.scss';
import { Item, Button,Image, Sidebar, Grid, Header, Segment, Menu, MenuItem, Form, Label, Divider, Popup, Dropdown, Icon, Breadcrumb } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import { NavLink } from 'react-router-dom';

class BreadcrumbNav extends Component {
    render() {      
    return (       
      <div>
      <h1>NavLink for Breadcrumb</h1>            
      <NavLink to='./VisibilityToggle' >            
        <span style={{color: '#FFFFFF'}}>Visibility Toggle</span>
      </NavLink>
      <NavLink to='./Increment' >            
        <span>Increment</span>
      </NavLink><br/>          
      <Breadcrumb style={{backgroundColor: '#FFFFFF'}}>
        <Breadcrumb.Section link><NavLink to='./VisibilityToggle' >            
        <span>Visibility Toggle</span>
      </NavLink></Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section link><NavLink to='./Increment' >            
        <span>Increment</span>
      </NavLink></Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section active style={{color: '#000000'}}>Semantic Sample</Breadcrumb.Section>
      </Breadcrumb>        
    </div>
 );
}
}

export default BreadcrumbNav;
