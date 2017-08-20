import React, { Component } from 'react';

class Quantity extends Component {
  constructor(props) {
      super(props);

      this.state = {
          value: 1,
          itemPrice: this.props.itemPrice
      }
      this.increment = this.increment.bind(this);
      this.decrement = this.decrement.bind(this);
  }

  increment() {
      this.setState(prevState => {
          value: ++prevState.value
      });
  }

  decrement() {
      this.setState(prevState => {
          value: prevState.value > 0 ? --prevState.value : 0
      });
  }
    
  render() {
    return (
      <div className="quantity-box">
            <img className='garbage-img opacity-change' src={process.env.PUBLIC_URL + '/images/trash.svg'} alt='Trash' /> 
            <div className='price-quantity'>
                <div className='quantity-wrapper'>
                    <span className='quantity-button decrease opacity-change' onClick={this.decrement}></span>
                    <input className='quantity-field' type='text' value={this.state.value} readOnly />
                    <span className='quantity-button increase opacity-change' onClick={this.increment}></span>
                </div>
                <p className='price-box'>{this.state.value*this.props.itemPrice}.00 &euro;</p> 
            </div> 
      </div>
    );
  }
}

export default Quantity;
