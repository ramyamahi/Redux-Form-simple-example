import React from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'
import { Label, Form, Button, Grid, Icon } from 'semantic-ui-react'

class SimpleFormArray extends React.Component {

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props

    return (    
      <Form onSubmit={handleSubmit}>        
         
          <Field label="First Name" name="firstName" component={renderRequiredField} type="text" placeholder="First Name"/>
        
        <Form.Group> 
          <Field label="Last Name" name="lastName" component={renderRequiredField} type="text" placeholder="Last Name"/>
        </Form.Group>   
        <Form.Group> 
          <Field label="Email" name="email" component={renderRequiredField} type="email" placeholder="Email"/>
        </Form.Group>                 
        <FieldArray name="interest" component={renderInterest} />
        <div>
          <label>Sex</label>
          <div>
            <label><Field name="sex" component="input" type="radio" value="male"/> Male</label>
            <label><Field name="sex" component="input" type="radio" value="female"/> Female</label>
          </div>
        </div>
        <div className="form-button">
          <Button type="submit" disabled={pristine || submitting} primary>Submit</Button>
          <Button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</Button>
        </div>
      </Form>
    )
  }
}

const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'This field is required.';
  }
  if (!values.lastName) {
    errors.lastName = 'This field is required.';
  }
  if (!values.email) {
    errors.email = 'This field is required.';
  }
  return errors;
}

const renderRequiredField = ({ input, label, type, className, placeholder, meta: { touched, error } }) => (
  <Form.Field inline required width={12}>
    <label className='admin-font'>{label}</label>
    <input {...input} type={type} className={className} placeholder={placeholder}/>
    {touched && (error && <Label basic color='red' pointing='left'>{error}</Label>)}
  </Form.Field>
)

const renderField = ({ input, label, type, meta: { touched, error } }) => (
   <Form.Field inline width={8}>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label} />
      {touched && error && <span>{error}</span>}
    </div>
  </Form.Field>
)

const renderInterest = ({ fields, meta: { error } }) => (
  <div>
    <Button type="button" onClick={() => fields.push()}>
      Add area of interest
    </Button>
    {fields.map((interest, index) => (
      <Grid key={interest}>
        <Grid.Row>
          <Grid.Column computer={4}>
            <Field
              name={interest}
              type="text"
              component={renderField}
              label={`Area of interest #${index + 1}`}
            />
          </Grid.Column>
          <Grid.Column computer={8}>
            <Button
              basic
              type="button"
              onClick={() => fields.remove(index)}
              className='trash-button'
            ><Icon name="trash alternate outline" className='trash-icon'/></Button>            
          </Grid.Column>
        </Grid.Row>
      </Grid>
    ))}
    {error && <li className="error">{error}</li>}
  </div>
)

export default reduxForm({
  form: 'SimpleFormArray',
  validate 
})(SimpleFormArray)