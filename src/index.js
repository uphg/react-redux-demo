import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore } from 'redux'

const stateChange = (state = 0, action) => {
  if (action.type === 'add') {
    return state + action.payload
  } else if( action.type === 'back') {
    return state - action.payload
  } else {
    return state
  }
}

const store = createStore(stateChange)

render()
store.subscribe(render)

function render() {
  ReactDOM.render(
    <React.StrictMode>
      <App
        message={store.getState()}
        onAdd={() => { store.dispatch({ type: 'add', payload: 1 }) }}
        onBack={() => { store.dispatch({ type: 'back', payload: 1 }) }}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
