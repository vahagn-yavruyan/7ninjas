import React from 'react';
import promise from 'redux-promise';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';
import './stylesheets/main.css';

import Header from './components/Header.js';
import Cart from './components/Cart.js';
import Earth from './components/Earth.js';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const App = () => {
    return (
        <Provider store={createStoreWithMiddleware(reducers)}>
          <div className="wrapper-box">
            <Header />
            <Cart />
            <Earth />
          </div>
        </Provider>
    );
}

export default App;
