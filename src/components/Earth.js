import React, { Component } from 'react';

class Earth extends Component {
  render() {
    return (
      <div className="earth-wrapper">
            <img className='earth-img' src={process.env.PUBLIC_URL + '/images/earth.png'} alt='Logo' /> 
            <h1 className='earth-title'>Do more with less</h1>
      </div>
    );
  }
}

export default Earth;
