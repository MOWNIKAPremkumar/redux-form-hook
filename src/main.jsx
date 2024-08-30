import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import MyForm from './MyForm';

ReactDOM.render(
  <Provider store={store}>
    <MyForm />
  </Provider>,
  document.getElementById('root')
);
