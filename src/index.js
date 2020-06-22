import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import combineReducers from './reducers';
import { Provider } from 'react-redux';
import App from './components/App';
const store = createStore(combineReducers, applyMiddleware(thunk));
render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));