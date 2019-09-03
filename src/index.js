import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import RootReducer from './reducers/rootReducer';

const store=createStore(RootReducer);

function render() {
  ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
}
render();