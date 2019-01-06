import React, { Component } from 'react';
import './App.css';
import { Item, Button,Image, Sidebar, Grid, Header, Segment, Menu, MenuItem, Form, Label, Divider } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import SweetAlert from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';
import Notifications, {notify} from 'react-notify-toast';

class SemanticSample extends Component {
  state = { activeItem: 'home' }
handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  constructor(props){
    super(props);
   this.show = notify.createShowQueue();
    
  }  
  handleClick = () => {
    let myColor = { background: ' #008000', text: "#FFFFFF" };
    notify.show('Successfully added', 'custom', 5000 , myColor);
  }
  
  render() {  

    const { activeItem } = this.state  
    return (       
      <div>
        <Grid>
          <Grid.Row>
            <Grid.Column computer={4}>
       
             {/*<Menu color='red' inverted widths={3}>
              <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
              <Menu.Item
                name='messages'
                active={activeItem === 'messages'}
                onClick={this.handleItemClick}          
              />
              <Menu.Item
                name='friends'
                active={activeItem === 'friends'}
                onClick={this.handleItemClick}
                iconName='close'
              />
              </Menu>*/}


            <button onClick={() => this.setState({ show: true })}>Alert</button>
            <SweetAlert
              show={this.state.show}
              title=""
              text="Are you sure?"
              onConfirm={() => this.setState({ show: false })}        
            > 
            {/*<Button onCancel={() => this.setState({ show: false })}>cancel</Button>*/}  
            </SweetAlert><br/><br/>
            <Notifications> 
              
            </Notifications>
            <Button onClick={this.handleClick.bind(this)} >Add</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
 );
}
}

export default SemanticSample;
