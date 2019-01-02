import React, { Component } from 'react';
import './App.css';
import { Item, Button,Image, Sidebar, Grid, Header, Segment, Menu, MenuItem } from 'semantic-ui-react'

class SemanticSample extends Component {
  state = { activeItem: 'home' }
handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  constructor(props){
    super(props);
    
  }  
  
  render() {  

    const { activeItem } = this.state  
    return (       
      <div>
       <h1>Todo List</h1> 
       <Menu color='red' inverted widths={3}>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
        <Menu.Item
          name='messages'
          active={activeItem === 'messages'}
          onClick={this.handleItemClick}
          icon='close'
        />
        <Menu.Item
          name='friends'
          active={activeItem === 'friends'}
          onClick={this.handleItemClick}
          iconName='close'
        />
      </Menu> 
    </div>
 );
}
}

export default SemanticSample;
