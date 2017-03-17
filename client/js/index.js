import 'babel-polyfill';

console.log(`Client running in ${process.env.NODE_ENV} mode`);

import React from 'react';
import CheeseList from './components/cheese-list';
import ReactDOM from 'react-dom';

const newCheese = [
    "Bath Blue",
    "Barkham Blue",
    "Buxton Blue"
];
document.addEventListener('DOMContentLoaded', () =>
  ReactDOM.render(
    <CheeseList cheeses={newCheese} />,
    document.getElementById('app')
  )
);
