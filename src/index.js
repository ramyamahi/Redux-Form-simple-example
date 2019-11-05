import React from 'react';
import './index.scss';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { combineReducers, createStore } from 'redux'
import { reducer as formReducer } from 'redux-form'
import App from './App'

const reducers = combineReducers({
  form: formReducer
})

const store = createStore(
  reducers
)

render(
  <Provider store={store}>
    <App />
  </Provider> ,
  document.getElementById('root')
)
