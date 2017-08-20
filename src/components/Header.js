import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="header-box">
            <img className='img-logo' src={process.env.PUBLIC_URL + '/images/logo.png'} alt='Logo' /> 
            <h1 className='header-title'>Front-End Developer<span className='color-red'>.</span></h1>
            <p className='info-title'>Our mission is to build market-leading, software-driven businesses by delivering 
            outstanding value, continuous innovation, and an exceptional customer-centric experience.</p>
      </div>
    );
  }
}

export default Header;
