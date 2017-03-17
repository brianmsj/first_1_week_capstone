import 'babel-polyfill';
import React from 'react';
import CheeseList from './components/cheese-list';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';

console.log(`Client running in ${process.env.NODE_ENV} mode`);

// const newCheese = [
//     "Bath Blue",
//     "Barkham Blue",
//     "Buxton Blue"
// ];
document.addEventListener('DOMContentLoaded', () =>
  ReactDOM.render(
    <Provider store={store}>
      <CheeseList />
    </Provider>,
    document.getElementById('app')
  )
);
