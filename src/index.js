import store from './store'
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Landing from './components/Landing'


ReactDOM.render(
  <Provider store={store}>
    <Landing />
  </Provider>,
  document.getElementById('root')
)
