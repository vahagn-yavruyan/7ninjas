import React, { Component } from 'react';
import Header from './components/Header.js';
import CartItem from './components/CartItem.js';
import Earth from './components/Earth.js';
import './stylesheets/main.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper-box">
        <Header />
        <div className='cart-wrapper'>
            <div className='cart-inner'>
                <CartItem itemPrice='75' />
                <CartItem itemPrice='75' />
                <CartItem itemPrice='75' />
                <h1 className='cart-summary'>225.00 &euro;</h1>    
            </div>
        </div>
        <Earth />
      </div>
    );
  }
}

export default App;
