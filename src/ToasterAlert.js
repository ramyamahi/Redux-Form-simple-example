import React, { Component } from 'react';
import {Provider}  from 'react-redux'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import {createStore, combineReducers, bindActionCreators} from 'redux'
import {reducer as toastrReducer, actions as toastrActions} from 'react-redux-toastr'
import ReduxToastr from 'react-redux-toastr'
import {toastr} from 'react-redux-toastr'
const reducers = {  
  toastr: toastrReducer
}
const reducer = combineReducers(reducers)
const store = createStore(reducer)


class ToasterAlert extends Component {  
  constructor(props) {
    super(props);  
  this.toastr = bindActionCreators(toastrActions, this.props.dispatch)    
  }   
  render() {      
    return (       
      <div>        
        <h1>Redux Toaster</h1>      
        <Provider store={store}>
          <div>   
            <ReduxToastr
              timeOut={5000}
              newestOnTop={false}
              preventDuplicates
              position="top-center"
              transitionIn="fadeIn"
              transitionOut="fadeOut"                                            
            />    
            <button
            onClick={() => toastr.success('Tenant added', 'Successfully')}
            type="button">Add</button>
          </div>
        </Provider>        
      </div>
    );
  }
}

{/* Toastr methods*/}
{/*toastr.success('Title', 'Message', toastrOptions)
toastr.info('The message', toastrOptions)
toastr.warning('The title', 'The message')
toastr.error('The message')
toastr.removeByType('error') // Remove all toastrs with the type error.
toastr.remove('123')*/} 

export default ToasterAlert;
