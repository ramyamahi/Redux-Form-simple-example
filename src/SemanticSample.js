import React, { Component } from 'react';
import './App.scss';
import { Item, Button,Image, Sidebar, Grid, Header, Segment, Menu, MenuItem, Form, Label, Divider, Popup, Dropdown, Icon, Breadcrumb, Loader, Dimmer } from 'semantic-ui-react'
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
    notify.show('Successfully added', 'custom', 2000 , myColor);
  }
  handleClick1 = () => {
    let myColor1 = { background: ' #FF0000', text: "#FFFFFF" };
    notify.show('Cancelled', 'custom', 2000 , myColor1);
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
            <Button onClick={this.handleClick.bind(this)} className='add-button'>Add</Button>
            <Button onClick={this.handleClick1.bind(this)} >Cancel</Button>                
          </Grid.Column>          
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>         
            <Menu vertical>
              <Menu.Item>Home</Menu.Item>
              <Dropdown text='Messages' className='link item'>
                <Dropdown.Menu>
                  <Dropdown.Item>Inbox</Dropdown.Item>
                  <Dropdown.Item>Starred</Dropdown.Item>
                  <Dropdown.Item>Sent Mail</Dropdown.Item>
                  <Dropdown.Item>Drafts (143)</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item>Spam (1009)</Dropdown.Item>
                  <Dropdown.Item>Trash</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Menu.Item>Browse</Menu.Item>
              <Menu.Item>Help</Menu.Item>
            </Menu>
            <Segment>
              <Dimmer active inverted>
                <Loader inverted>Loading</Loader>
              </Dimmer>
              <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
            </Segment>



          </Grid.Column>          
        </Grid.Row>
      </Grid>
    </div>
 );
}
}

export default SemanticSample;
