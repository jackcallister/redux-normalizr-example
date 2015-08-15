import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import promiseMiddleware from './promiseMiddleware';
import meals from '../shared/reducers/meals';
import Component from '../shared/components/Component';

const createFinalStore = compose(applyMiddleware(promiseMiddleware), createStore);
const store = createFinalStore(meals);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      {() =>
        <Component />
      }
    </Provider>,
    document.getElementById('app')
  );
});
