import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

const stateChange = (state = { number: 0 }, action) => {
  if (action.type === 'add') {
    return { number: state.number + action.payload }
  } else if( action.type === 'back') {
    return { number: state.number - action.payload }
  } else {
    return state
  }
}

const store = createStore(stateChange)

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)


// reportWebVitals();
