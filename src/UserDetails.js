import React, { Component } from 'react';
import { Grid, Menu, Button,  Form, Input, Header, Modal, Divider, Table} from 'semantic-ui-react'

class UserDetails extends Component{
    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }
    render(){
        const { values } = this.props;
        return(
            <Form >
                <h1 className="ui centered">Enter User Details</h1>
                <Form.Field width={4}>
                    <label>First Name</label>
                    <input
                    placeholder='First Name'
                    onChange={this.props.handleChange('firstName')}
                    defaultValue={values.firstName}
                    />
                </Form.Field>
                <Form.Field width={4}>
                    <label>Last Name</label>
                    <input
                    placeholder='Last Name'
                    onChange={this.props.handleChange('lastName')}
                    defaultValue={values.lastName}
                    />
                </Form.Field>
                <Form.Field width={4}>
                    <label>Email Address</label>
                    <input
                    type='email'
                    placeholder='Email Address'
                    onChange={this.props.handleChange('email')}
                    defaultValue={values.email}
                    />
                </Form.Field>
                <Button onClick={this.saveAndContinue}>Save And Continue </Button>
            </Form>
        )
    }
}

export default UserDetails;